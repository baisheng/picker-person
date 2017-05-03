'use strict';
import marked from "marked";
import Base from './base.js';
import toc from 'markdown-toc';
import highlight from 'highlight.js';
import push2Firekylin from 'push-to-firekylin';
import trimHtml from 'trim-html';

export default class extends Base {
    modelInstance = this.modelInstance.where({type: 0});

    async getAction() {
        let _dao = this.model('posts', {aid: this.aid});
        let _taxonomy = this.model('taxonomy', {aid: this.aid});

        // console.log(JSON.stringify(this.options.post.default_category))
        // let default_category = this.options.post
        //     let ID = this.get('id');

            if (!think.isEmpty(this.id)) {
                let post = await _dao.find(this.id);

                post.terms = await _taxonomy.getTermsByObject(post.id);

                // let snippets = await _dao.where({type: 'snippet', parent: ID}).select();
                let snippets = await _dao.findPostSnippets(this.id);

                // console.log(JSON.stringify(snippets))
                // 处理 json 对象

                post.snippets = snippets;
                // console.log(JSON.stringify(snippets))
                // console.log(JSON.stringify(snippets) + "xxxxxxxxx")
                // console.log(JSON.stringify(post.terms))

                this.assign("post", post);

                return this.success(post)

            } else {
                this.assign("post", null);
                return this.success({})
            }

            // return this.display();

    }

    async postAction() {
        let _dao = this.model('posts', {aid: this.aid});
        let _taxonomy = this.model('taxonomy', {aid: this.aid});

        let data = this.post();

        if (data.autoExcerpt) {
            data.excerpt = await trimHtml(data.content).html;
        }

        if (think.isEmpty(data.status)) {
            data.status = 'auto-draft';

        }
        let _id = data.id;

        data.author = this.userInfo.id;

        // Update
        if (!think.isEmpty(_id)) {
            // if(data.terms){
            //     console.log(JSON.stringify(data.terms))
            // }
            delete data.date;
            data.modified = !think.isEmpty(data.modified) ? new Date(data.modified).valueOf() : new Date().getTime();

            let rows = await _dao.update(data);

            if (data.status === 'publish' && rows > 0) {
                // await this.successMsg("内容发布成功!")
            }

            // await this._term_relationships(data);

            // if (data.terms.length > 0){

            // console.log(JSON.data.terms)
            // for (let term in terms){
            //
            // }
            // }
            return this.json({_id: _id});

        } else { // 初次添加
            data.date = new Date().getTime();
            let insertId = await _dao.add(data);
            data.id = insertId;

            // 关联分类与内容
            await this._term_relationships(data);

            return this.json({_id: data.id});
        }


    }

    /**
     * get
     * @return {[type]} [description]
     */
    async getaaaAction(self) {
        // this.modelInstance.field('id,user_id,type,status,title,pathname,create_time,update_time');
        let data;
        if (this.id) {
            if (this.id === 'lastest') {
                return this.lastest();
            }
            data = await this.modelInstance.where({id: this.id}).find();
            //文章选项
            if (data.options) {
                data.options = JSON.parse(data.options) || {};
            } else {
                data.options = {};
            }
        } else {
            let where = {};
            //不是管理员，只显示个人的文章
            if (this.userInfo.type !== 1) {
                where.user_id = this.userInfo.id;
            }

            if (this.get('status')) {
                where.status = this.get('status');
            }

            if (this.get('keyword')) {
                let keywords = this.get('keyword').split(/\s+/g);
                if (keywords.indexOf(':public') > -1 || keywords.indexOf(':private') > -1) {
                    where.is_public = Number(keywords.indexOf(':public') > -1);
                    keywords = keywords.filter(word => word !== ':public' && word !== ':private');
                }
                if (keywords.length > 0) {
                    where.title = ["like", keywords.map(word => `%${word}%`)];
                }
            }

            let field = ['id', 'title', 'user_id', 'create_time', 'update_time', 'status', 'pathname', 'is_public'];
            data = await this.modelInstance.where(where).field(field).order('create_time DESC').page(this.get('page'), 15).countSelect();
        }
        return this.success(data);
    }

    getBaseAction(self) {
        return super.getAction(self);
    }

    /**
     * add user
     * @return {[type]} [description]
     */
    async __postAction() {
        let data = this.post();
        //check pathname
        let post = await this.modelInstance.where({pathname: data.pathname}).select();
        if (post.length > 0) {
            return this.fail('PATHNAME_EXIST');
        }

        /** 如果是编辑发布文章的话默认状态改为审核中 **/
        if (data.status == 3 && this.userInfo.type != 1) {
            data.status = 1;
        }

        /** 推送文章 **/
        this.pushPost(data);

        data.tag = await this.getTagIds(data.tag);
        data = await this.getContentAndSummary(data);
        data.user_id = this.userInfo.id;
        data = this.getPostTime(data);
        data.options = data.options ? JSON.stringify(data.options) : '';

        let insertId = await this.modelInstance.addPost(data);
        return this.success({id: insertId});
    }

    /**
     * update user info
     * @return {[type]} [description]
     */
    async putAction() {
        if (!this.id) {
            return this.fail('PARAMS_ERROR');
        }

        let data = this.post();
        data.id = this.id;

        /** 判断接收的参数中是否有 markdown_content 来区别审核通过的状态修改和普通的文章更新 */
        if (data.markdown_content) {
            /** 推送文章 */
            this.pushPost(data);

            data = this.getPostTime(data);
            data = await this.getContentAndSummary(data);
            data.options = data.options ? JSON.stringify(data.options) : '';
            if (data.tag) {
                data.tag = await this.getTagIds(data.tag);
            }
        }

        let rows = await this.modelInstance.savePost(data);
        return this.success({affectedRows: rows});
    }

    async deleteAction() {
        if (!this.id) {
            return this.fail('PARAMS_ERROR');
        }

        /** 如果不是管理员且不是本文作者则无权限删除文章 **/
        if (this.userInfo.type !== 1) {
            let post = await this.modelInstance.where({id: this.id}).find();
            if (post.user_id != this.userInfo.id) {
                return this.fail('USER_NO_PERMISSION');
            }
        }

        await this.modelInstance.deletePost(this.id);
        return this.success();
    }

    async pushPost(post) {
        let postOpt = JSON.parse(post.options);
        let canPush = Array.isArray(postOpt.push_sites) && postOpt.push_sites.length > 0;
        if (post.status != 3 && post.is_public != 1 && !canPush) {
            return;
        }
        post = think.extend({}, post);

        let options = await this.model('options').getOptions();
        let push_sites = options.push_sites;
        let push_sites_keys = postOpt.push_sites;

        if (post.markdown_content.slice(0, 5) !== '> 原文：') {
            let site_url = options.hasOwnProperty('site_url') ? options.site_url : `http://${this.http.host}`;
            post.markdown_content = `> 原文：${site_url}/post/${post.pathname}.html
${post.markdown_content}`;
        }
        delete post.cate;
        delete post.options;

        if (!Array.isArray(push_sites_keys)) {
            push_sites_keys = [push_sites_keys];
        }
        let pushes = push_sites_keys.map(key => {
            let {appKey, appSecret, url} = push_sites[key];
            let p2fk = new push2Firekylin(url, appKey, appSecret);
            return p2fk.push(post);
        });
        let result = await Promise.all(pushes);
        console.log('push result for debug: ', result);
    }

    async lastest() {
        let userId = this.userInfo.type !== 1 ? this.userInfo.id : null;
        let data = await this.modelInstance.getLatest(userId, 6);
        return this.success(data);
    }

    getPostTime(data) {
        data.update_time = think.datetime();
        /**草稿可以没有创建时间**/
        if (!data.create_time) {
            data.create_time = data.status != 0 ? data.update_time : null;
        } else {
            data.create_time = think.datetime(data.create_time);
        }
        return data;
    }

    /**
     * 渲染 markdown
     * 摘要为部分内容时不展示 TOC
     * 文章正文设置为手动指定 TOC 时不显示
     * 页面不自动生成 TOC 除非是手动指定了
     */
    async getContentAndSummary(data) {
        let options = await this.model('options').getOptions();
        let postTocManual = options.postTocManual === '1';

        let showToc;
        if (!postTocManual) {
            showToc = data.type / 1 === 0;
        } else {
            showToc = /(?:^|[\r\n]+)\s*\<\!--toc--\>\s*[\r\n]+/i.test(data.markdown_content);
        }

        data.content = this.markdownToHtml(data.markdown_content, {toc: showToc, highlight: true});
        data.summary = data.markdown_content.split('<!--more-->')[0];
        data.summary = this.markdownToHtml(data.summary, {toc: false, highlight: true});
        data.summary.replace(/<[>]*>/g, '');

        return data;
    }

    async getTagIds(tags) {
        if (!tags) {
            return [];
        }
        if (!think.isArray(tags)) {
            tags = [tags];
        }
        let modelInstance = this.model('tag').setRelation(false), tagIds = [];
        let promises = tags.map(name =>
            modelInstance.where({name}).thenAdd({
                name,
                pathname: encodeURIComponent(name)
            }).then(data => tagIds.push({tag_id: data.id, name: name}))
        );
        await Promise.all(promises);
        return tagIds;
    }

    /**
     * generate toc name
     * @param  {String} name []
     * @return {String}      []
     */
    generateTocName(name) {
        name = name.trim().replace(/\s+/g, '').replace(/\)/g, '').replace(/[\(\,]/g, '-').toLowerCase();
        if (/^[\w\-]+$/.test(name)) {
            return name;
        }
        return `toc-${think.md5(name).slice(0, 3)}`;
    }

    /**
     * markdown to html
     * @return {} []
     */
    markdownToHtml(content, option = {toc: true, highlight: true}) {
        let markedContent = marked(content);

        /**
         * 增加 TOC 目录
         */
        if (option.toc) {
            let tocContent = marked(toc(content).content).replace(/<a\s+href="#([^\"]+)">([^<>]+)<\/a>/g, (a, b, c) => {
                return `<a href="#${this.generateTocName(c)}">${c}</a>`;
            });

            markedContent = markedContent.replace(/<h(\d)[^<>]*>(.*?)<\/h\1>/g, (a, b, c) => {
                return `<h${b}><a id="${this.generateTocName(c)}" class="anchor" href="#${this.generateTocName(c)}"></a>${c}</h${b}>`;
            });
            markedContent = `<div class="toc">${tocContent}</div>${markedContent}`;
        }

        /**
         * 增加代码高亮
         */
        if (option.highlight) {
            markedContent = markedContent.replace(/<pre><code\s*(?:class="lang-(\w+)")?>([\s\S]+?)<\/code><\/pre>/mg, (a, language, text) => {
                text = text.replace(/&#39;/g, '\'').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/\&quot;/g, '"').replace(/\&amp;/g, "&");
                var result = highlight.highlightAuto(text, language ? [language] : undefined);
                return `<pre><code class="hljs lang-${result.language}">${result.value}</code></pre>`;
            });
        }

        return markedContent;
    }


    /**
     * 保存对象与分类之间的关联
     *
     * @param objectId
     * @param terms
     * @returns {Promise.<void>}
     * @private
     */
    async _term_relationships(post){

        let _taxonomy = this.model('taxonomy', {aid: this.aid});
        let default_category = this.options.post['default_category'];

        if (!think.isEmpty(post.terms) && post.terms.length > 0){

            for (let term in post.terms){
                await _taxonomy.relationships(post.id, term.id);
            }
        } else {
            await _taxonomy.relationships(post.id, default_category);
        }
    }

}