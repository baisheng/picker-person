'use strict';
import trimHtml from 'trim-html';
import Base from './base.js';

// import * as fs from 'fs';
// import * as path from 'path';
// import sharp from 'sharp';
// import htmlMetadata from 'html-metadata';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */

    init(http) {
        super.init(http);

    }

    async indexAction() {
        let _dao = this.model('posts', {aid: this.aid});
        let _taxonomy = this.model('taxonomy', {aid: this.aid});

        // console.log(JSON.stringify(this.options.post.default_category))
        // let default_category = this.options.post
        if (this.isGet()){
            let ID = this.get('id');

            if (!think.isEmpty(ID)) {
                let post = await _dao.find(ID);

                post.terms = await _taxonomy.getTermsByObject(post.id);

                // let snippets = await _dao.where({type: 'snippet', parent: ID}).select();
                let snippets = await _dao.findPostSnippets(ID);

                // console.log(JSON.stringify(snippets))
                // 处理 json 对象

                post.snippets = snippets;
                // console.log(JSON.stringify(snippets))
                // console.log(JSON.stringify(snippets) + "xxxxxxxxx")
                // console.log(JSON.stringify(post.terms))

                this.assign("post", post);

                return this.json(post)

            }else {
                this.assign("post", null);
                return this.json({})
            }

            // return this.display();

        }

        else if (this.isPost()) {
            let data = this.post();

            if (data.autoExcerpt){
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

    }

    // 关联 taxonomy
    async relationAction(){
        let _taxonomy = this.model('taxonomy', {aid: this.aid});
        let default_category = this.options.post['default_category'];

        if (this.isPost()) {
            let data = this.post();

            if (data.term_id === default_category && !(data.terms.length > 0) ) return;
            // object_id, term_id
            let _dao = this.model('taxonomy', {aid: this.aid});
            let insertId = await _dao.saveOrDelRelation(data.object_id, data.term_id);

            return this.success();
        }
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
