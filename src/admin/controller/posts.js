'use strict';

import Base from './base.js';
import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';
import htmlMetadata from 'html-metadata';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */

    init(http) {
        super.init(http);
        // this._terms = this.model('terms');
        this.tactive = "article";

    }


    async indexAction() {
        return this.display();
    }

    async _read(data) {
        let $this = this;
        // let p = new Promise(function(resolve, reject){
        await req(data.content, function (err, resp) {
            let html = resp.body.toString();
            // replace <br />(blanks goes here) to <br />.

            // code goes here...
            // console.log('lala');
            // console.log(JSON.stringify(resp))

            html = html.replace(/<br[^/>]*\/?>/ig, '<br />')
            // remove tab symbols like \r\t\n
            html = html.replace(/[\n\r\t]{2,}/gi, ' ')
            // $ = cheerio.load(html)
            let $ = cheerio.load(html);
            console.log($('meta[name="description"]').attr("content"))
            data.title = $.html('title');
            // data.content = $.html('body')
            data.name = data.content;
            // data.content = $.html();
            $this._update(data);
            // resolve(html);
        })

        // await $this._update(data);
        // });


        // p.then(function(html){

        // console.log(rows + '---')
        // if (rows > 0 )
        // $this.successMsg('链接数据提取成功！');
        // })


    }

    async _update(data) {
        await this.dao.where({id: data.id}).update(data);
    }

    async testsnippetAction() {
        let data = {
            meta_type: 'link'
        }


        switch (data.meta_type) {
            case 'link':
                console.log(2)
                await htmlMetadata('http://www.jianshu.com/p/e942832ed6ce', (err, metadata) => {
                    console.log(1)
                    if (err) {
                        console.error('[testCallbackBased]: Scraper html-metadata failed! ', err);
                    }
                    else {
                        console.log('[testCallbackBased]: html-metadata returned: ', metadata);

                    }
                }).then((data) => {
                    console.log(data + "---------");
                    return this.json(data)

                })

                // await self._snippet_link_meta(data);
                break;
            case 'code':
                console.log(data.meta_type + "-------")
                await self._snippet_code_meta(data);
                break;
            case 'quote':
                break;
            case 'chat':
                break;
            case 'status':
                break;
            case 'feed':
                break;
            case 'note':
                break;
            case 'tips':
                break;
        }


    }

    async snippetAction() {
        let _dao = this.model('posts',{aid: this.aid})
        if (this.isPost()) {
            let data = this.post();
            data.modified = !think.isEmpty(data.modified) ? new Date(data.modified).valueOf() : new Date().getTime();

            let _id = data.id;
            let insert_id;
            data.type = "snippet";
            let _meta_data = data.meta;

            if (!think.isEmpty(_id)) {

                // 0 先更新内容或获取内容
                // 1 收到 data.meta
                // 2 查询 meta_key 是否存在
                // 3 如果存在 更新键:值
                // 4 如果不存在 插入键:值
                // let snippet_data = await this.dao.where({id: _id}).find();

                let rows = await _dao.where({id: _id}).update(data);

                if (rows > 0) {
                    insert_id = data.id;

                    // 如果需要更新或插入 meta 信息(snippet_card 类型)
                    if (!think.isEmpty(data.meta_type)) {

                        switch (data.meta_type) {
                            case 'link':
                                await this._snippet_link_meta(data);
                                break;
                            case 'code':
                                await this._snippet_code_meta(data);
                                break;
                            case 'quote':
                                break;
                            case 'chat':
                                break;
                            case 'status':
                                break;
                            case 'feed':
                                break;
                            case 'note':
                                break;
                            case 'tips':
                                break;
                        }


                    }

                }


            } else {
                data.date = !think.isEmpty(data.date) ? new Date(data.date).valueOf() : new Date().getTime();
                data.author = this.userInfo.id;
                insert_id = await _dao.add(data);
                if (insert_id > 0) {
                    if (!think.isEmpty(_id)) {
                    await this.successMsg('碎片更新成功')

                    } else {
                    await this.successMsg('碎片保存成功')
                    //
                    }

                    return this.json({_id: insert_id});


                } else {
                    await this.errorMsg('保存失败!')
                    return this.json({_id: data.id});


                }

            }

        }

        if (this.isGet()) {
            let id = this.get('id');
            if (!think.isEmpty(id)) {

                let snippet = await _dao.get(id);

                // console.log(JSON.stringify(snippet))
                return this.json(snippet)
            }
        }
    }

    async _snippet_code_meta(data) {
        let _snippet_metas = await this.model('postmeta').where({post_id: data.id}).select();
        let _meta_data = data.meta;

        if (!think.isEmpty(_snippet_metas)) {
            for (let key of Object.keys(_meta_data)) {

                let _meta_item = think._.find(_snippet_metas, {meta_key: key});

                // if meta 存在
                if (!think.isEmpty(_meta_item)) {

                    // console.log(JSON.stringify(find_meta) + "*****");
                    // Update meta
                    _meta_item['meta_value'] = _meta_data[key];

                    // console.log(JSON.stringify(find_meta) + "======")

                    let rows = await this.model('postmeta').where({
                        post_id: data.id,
                        meta_key: key
                    }).update(_meta_item);

                    if (rows > 0) {
                        // await this.infoMsg('信息更新成功')

                    } else {
                        await this.infoMsg('未能更新信息!')

                    }

                } else {
                    // Insert meta
                    let insert = await this.model('postmeta').add({
                        post_id: data.id,
                        meta_key: key,
                        meta_value: _meta_data[key]
                    });

                    if (insert > 0) {
                        // await this.infoMsg('信息保存成功')
                    }
                }
            }
        }


    }

    async _snippet_link_meta(data) {

        let _snippet_metas = await this.model('postmeta').where({post_id: data.id}).select();
        let _meta_data = data.meta;

        if (isURL(data.content)) {

            let _new_meta = await htmlMetadata(data.content, (err, metadata) => {
                console.log(2)

                if (err) {
                    console.error('[testCallbackBased]: Scraper html-metadata failed! ', err);
                }
                else {
                    // console.log('[testCallbackBased]: html-metadata returned: ', metadata);

                }

            }).then((metadata) => {
                if (metadata.openGraph !== undefined && !think.isEmpty(metadata.openGraph)) {
                    _meta_data['_snippet_link'] = "og";
                    let _meta_assign = think._.assign(_meta_data, metadata.openGraph);
                    return _meta_assign;
                } else {

                    let _meta_assign = think._.assign(_meta_data, metadata.general);
                    return _meta_assign;
                }

            });

            if (_new_meta) {
                for (let key of Object.keys(_new_meta)) {

                    let _meta_item = think._.find(_snippet_metas, {meta_key: key});

                    // if meta 存在
                    if (!think.isEmpty(_meta_item)) {

                        // console.log(JSON.stringify(find_meta) + "*****");
                        // Update meta
                        _meta_item['meta_value'] = _new_meta[key];

                        let rows = await this.model('postmeta').where({
                            post_id: data.id,
                            meta_key: key
                        }).update(_meta_item);
                        // if (rows > 0) {
                        //     await this.infoMsg('信息更新成功')
                        //
                        // } else {
                        //     await this.infoMsg('未能更新信息!')
                        //
                        // }

                    } else {
                        // Insert meta
                        let rows = await this.model('postmeta').add({
                            post_id: data.id,
                            meta_key: key,
                            meta_value: _new_meta[key]
                        });

                        // if (rows > 0) {

                        // await this.infoMsg('信息保存成功')

                        // return this.json({_id: data.id});
                        // }
                    }

                }

                return this.json({_id: data.id});

            }

            return this.json({_id: data.id});

        }
        else {
            // console.log('未能找到链接地址，或者链接地址格式不正确！')
        }

        return this.json({_id: data.id});

    }

    /**
     * 添加内容
     *
     * @returns {Promise<PreventPromise>}
     */
    async addAction() {
        // console.log("add action");
        let type = this.get('type');
        let ID = this.get('id');

        if (this.isPost()) {
            let data = this.post();
            let _id = data.id;

            data.modified = !think.isEmpty(data.modified) ? new Date(data.modified).valueOf() : new Date().getTime();
            data.date = !think.isEmpty(data.date) ? new Date(data.date).valueOf() : new Date().getTime();

            // console.log();
            // Update
            if (!think.isEmpty(_id)) {
                let rows = await this.dao.update(data);

                return this.json({_id: _id});

            } else {

                let insertId = await this.dao.add(data);

                return this.json({_id: insertId});
            }
        }

        if (!think.isEmpty(type)) {
            // if (!think.isEmpty(ID)) {
            //     console.log("查询出内容草稿和当前内容")
            // }
            return this.display(`${type}_${this.http.action}`)

        } else {
            // return 404
        }
    }

    // snippet

    /**
     * 文章内容操作
     *
     * @returns {Promise.<void>}
     */
    async articleAction() {

        let type = this.get('type');
        let ID = this.get('id');

        if (this.isPost()) {
            let data = this.post();

            if (think.isEmpty(data.status)) {
                data.status = 'auto-draft';
            }
            let _id = data.id;

            data.author = this.userInfo.id;

            // Update
            if (!think.isEmpty(_id)) {
                delete data.date;
                data.modified = !think.isEmpty(data.modified) ? new Date(data.modified).valueOf() : new Date().getTime();

                let rows = await this.dao.update(data);

                if (data.status === 'publish' && rows > 0) {
                    await this.successMsg("内容发布成功!")

                }
                return this.json({_id: _id});

            } else {
                data.date = new Date().getTime();
                let insertId = await this.dao.add(data);
                return this.json({_id: insertId});
            }
        }

        // if (!think.isEmpty(type)) {
        if (!think.isEmpty(ID)) {
            let article = await this.dao.find(ID);
            this.assign("post", article);
        }

        return this.display();
    }


    /**
     * 简历管理
     *
     * @returns {Promise.<void>}
     */
    async resumeAction() {

        let _dao = this.model('posts', {aid: this.aid});

        if (this.isPost()) {
            let data = this.post();

            data.type = 'resume';
            if (think.isEmpty(data.meta)) {
                data.meta = {
                    _resume_section: [
                        {
                            "name": "profiles",
                            "active": true
                        },
                        {
                            "name": "education",
                            "active": true
                        },
                        {
                            "name": "work",
                            "active": true
                        },
                        {
                            "name": "additionalWork",
                            "active": true
                        },
                        {
                            "name": "skills",
                            "active": true
                        },
                        {
                            "name": "languages",
                            "active": true
                        },
                        {
                            "name": "interests",
                            "active": true
                        },
                        {
                            "name": "awards",
                            "active": false
                        },
                        {
                            "name": "references",
                            "active": false
                        },
                        {
                            "name": "publications",
                            "active": false
                        }
                    ]
                }
            }
            await this._post(data);
        }

        if (this.isGet()) {
            let _id = this.get('id');
            if (!think.isEmpty(_id)) {
                // let resumeModel = this.model('resumes');
                let _resume = await _dao.where({id: _id}).find();

                _resume = await this._format(_resume);

                // for (let key of _resume){
                // console.log(JSON.stringify(key))
                // }

                // for (let key of Object.keys(_resume)) {
                // console.log(key)
                // let _meta_item = think._.find(_menu_metas, {meta_key: key});

                // }

                // 处理 JSON 字符数据为 Object 数据
                _resume['content'] = JSON.parse(_resume['content_json']);
                _resume['meta']['_resume_section'] = JSON.parse(_resume['meta']['_resume_section']);

                // console.log(JSON.stringify( _resume.meta._resume_section))
                if (!think.isEmpty(_resume)) {
                    this.assign("_id", _id);
                    this.assign("_title", _resume.title);
                    this.assign("resume", _resume.content.resume);
                    this.assign("_resume_section", _resume.meta._resume_section);

                } else {
                    this.assign("resume", [])

                }
                return this.display();


            } else {
                let _model = this.model('resume_template');

                let _template_id = this.get('template');
                let _resume = {};
                if (!think.isEmpty(_template_id)) {
                    _resume = await _model.where({"id": _template_id}).find();
                }
                else {
                    //TODO: 默认模板待考量
                    _resume = await _model.where({"id": 1}).find();

                }

                this.assign("_id", 0);
                this.assign("_title", '');
                this.assign("_type", '');
                this.assign("resume", JSON.parse(_resume.content).template);
                this.assign("_resume_section", JSON.parse(_resume.content).meta.sections);

                return this.display();

            }

        }

    }

    async _format(post) {
        if (post.metas.length > 0) {
            post.meta = {};

            for (let meta of post.metas) {

                // console.log(meta.meta_key + ":" + meta.meta_value);
                post.meta[meta.meta_key] = meta.meta_value;
            }
        }
        delete post.metas;

        return post;
    }


    async _post(data) {

        let _dao = this.model('posts', {aid: this.aid})
        let _id = data.id;
        data.author = this.userInfo.user_id;
        // console.log(_id + "-------")
        data.modified = !think.isEmpty(data.modified) ? new Date(data.modified).valueOf() : new Date().getTime();
        data.date = !think.isEmpty(data.date) ? new Date(data.date).valueOf() : new Date().getTime();
        // if (!think.isEmpty(data.content_json)){
        //     data.content_json = JSON.stringify(data.content_json);
        // }

        // Update
        if (!think.isEmpty(_id)) {
            let rows = await _dao.update(data);
            await this._resume_meta(data);
            return this.json({_id: _id});

        } else {

            let insertId = await this.dao.add(data);
            data.id = insertId;
            await this._resume_meta(data);

            return this.json({_id: insertId});
        }
    }

    async _get() {
    }

    async _resume_meta(data) {
        let _menu_metas = await this.model('postmeta').where({post_id: data.id}).select();
        let _meta_data = data.meta;

        if (!think.isEmpty(_meta_data)) {
            for (let key of Object.keys(_meta_data)) {

                let _meta_item = think._.find(_menu_metas, {meta_key: key});

                // if meta 存在
                if (!think.isEmpty(_meta_item)) {

                    // console.log(JSON.stringify(find_meta) + "*****");
                    // Update meta
                    _meta_item['meta_value'] = JSON.stringify(_meta_data[key]);

                    // console.log(JSON.stringify(find_meta) + "======")

                    let rows = await this.model('postmeta').where({
                        post_id: data.id,
                        meta_key: key
                    }).update(_meta_item);

                    if (rows > 0) {
                        // await this.infoMsg('菜单项更新成功')

                    } else {
                        await this.infoMsg('未能更新信息!')

                    }

                } else {
                    // Insert meta
                    let insert = await this.model('postmeta').add({
                        post_id: data.id,
                        meta_key: key,
                        meta_value: JSON.stringify(_meta_data[key])
                    });

                    if (insert > 0) {
                        // await this.infoMsg('成功添加菜单项')
                    }
                }
            }
        }
    }


    async menuAction() {
        // let type = this.get('type');
        // let ID = this.get('id');

        if (this.isPost()) {
            let data = this.post();
            data.type = 'nav_menu_item';
            if (think.isEmpty(data.status)) {
                data.status = 'publish';
            }
            let _id = data.id;

            data.author = this.userInfo.id;

            // Update
            if (!think.isEmpty(_id)) {
                delete data.date;
                data.modified = !think.isEmpty(data.modified) ? new Date(data.modified).valueOf() : new Date().getTime();

                let rows = await this.dao.update(data);

                if (rows > 0 && data.meta !== undefined) {
                    let _menu_metas = await this.model('postmeta').where({post_id: data.id}).select();
                    let _meta_data = data.meta;
                    await this.saveMenuMeta(data);

                }
                // if (data.status === 'publish' && rows > 0) {
                //     await this.successMsg("内容发布成功!")
                //
                // }
                await this.successMsg('菜单项更新成功')

                return this.json({_id: _id});

            } else {
                data.date = new Date().getTime();

                let insertId = await this.dao.add(data);
                let _taxonomy = this.model('taxonomy');

                await _taxonomy.relationships(insertId, data.term_taxonomy_id);

                if (insertId > 0) {
                    data.id = insertId;
                    await this.saveMenuMeta(data);

                }


                await this.successMsg("菜单添加成功!")

                return this.json({_id: insertId});
            }
        }

    }

    async saveMenuMeta(data) {
        let _menu_metas = await this.model('postmeta').where({post_id: data.id}).select();
        let _meta_data = data.meta;

        if (!think.isEmpty(_meta_data)) {
            for (let key of Object.keys(_meta_data)) {

                let _meta_item = think._.find(_menu_metas, {meta_key: key});

                // if meta 存在
                if (!think.isEmpty(_meta_item)) {

                    // console.log(JSON.stringify(find_meta) + "*****");
                    // Update meta
                    _meta_item['meta_value'] = _meta_data[key];

                    // console.log(JSON.stringify(find_meta) + "======")

                    let rows = await this.model('postmeta').where({
                        post_id: data.id,
                        meta_key: key
                    }).update(_meta_item);

                    if (rows > 0) {
                        // await this.infoMsg('菜单项更新成功')

                    } else {
                        await this.infoMsg('未能更新信息!')

                    }

                } else {
                    // Insert meta
                    let insert = await this.model('postmeta').add({
                        post_id: data.id,
                        meta_key: key,
                        meta_value: _meta_data[key]
                    });

                    if (insert > 0) {
                        // await this.infoMsg('成功添加菜单项')
                    }
                }
            }
        }
    }

    async pictureAction() {
        // console.log(this.options.upload)
        // let $upload = this.options.upload;

        let _dao = this.model('posts', {aid: this.aid});

        let file = think.extend({}, this.file('file'));

        // console.log(JSON.stringify(file))
        // console.log(this.options)
        let filepath = file.path;
        let basename = path.basename(filepath);

        let ret = {'status': 1, 'info': '上传成功', 'data': ""}
        let res;


        //加入七牛接口
        if (this.options.upload.type === "qiniu") {

            let qiniu = think.service("qiniu");
            let instance = new qiniu();
            let uppic = await instance.upload(filepath, basename,this.aid);

            if (!think.isEmpty(uppic)) {

                let data = {
                    author: this.userInfo.id,
                    title: file.originalFilename,
                    name: uppic.hash,
                    // path: '/upload/picture/' + dateformat(new Date().getTime(), "Y-m-d") + '/' + basename,
                    type: 'attachment',
                    mime_type: file.headers['content-type'],
                    guid: "http://" + this.options.upload.option.domain + "/" + uppic.key,
                    create_time: new Date().getTime(),
                    status: 1,

                };

                const _attachment_metadata = await sharp(file.path).metadata();
                delete _attachment_metadata.exif;

                let _post_id = await _dao.add(data);

                if (!think.isEmpty(_post_id)) {
                    await _dao.addPostMeta(_post_id, "_attachment_metadata", _attachment_metadata);
                    await _dao.addPostMeta(_post_id, "_attachment_file", uppic.key);
                }

                ret['data'] = data;

            }


        } else {
            let uploadPath = think.RESOURCE_PATH + '/upload/picture/' + dateformat(new Date().getTime(), "Y-m-d");

            think.mkdir(uploadPath);

            if (think.isFile(filepath)) {
                fs.renameSync(filepath, uploadPath + '/' + basename);

            } else {
                console.log("文件不存在！")

            }
            file.path = uploadPath + '/' + basename;


            if (think.isFile(file.path)) {
                let _path = '/upload/picture/' + dateformat(new Date().getTime(), "Y-m-d") + '/' + basename;

                let data = {
                    author: this.userInfo.id,
                    title: file.originalFilename,
                    name: basename,
                    // path: '/upload/picture/' + dateformat(new Date().getTime(), "Y-m-d") + '/' + basename,
                    type: 'attachment',
                    mime_type: file.headers['content-type'],
                    guid: this.options.site_url + _path,
                    create_time: new Date().getTime(),
                    status: 1,

                }
                const _attachment_metadata = await sharp(file.path).metadata();
                delete _attachment_metadata.exif;

                let _post_id = await _dao.add(data);
                this.dao.addPostMeta(_post_id, "_attachment_metadata", _attachment_metadata);
                await _dao.addPostMeta(_post_id, "_attachment_file", _path);


                ret['data'] = data;
            } else {
                console.log('not exist')
            }
        }
        return this.json(ret);
    }


    /**
     * 删除分类
     *
     * @returns {Promise.<*>}
     */
    async deletecategoryAction() {
        let cat_id = this.get('id');
        return this.dao.deleteTerm(cat_id, 'category');
    }

    async preDeleteTerm(term, taxonomy) {
        // Update children to point to new parent
        // if is_taxonomy_hierarchical(taxonomy)

    }

    /**
     * 修改分类数据
     *
     * @returns {Promise<PreventPromise>}
     */
    async updateAction() {
        if (this.isPost()) {

            let data = this.post();
            // let exists = await this.dao.termExists(Number.parseInt(data.id));

            // if (exists.length > 0) {

            let rows = await this.dao.update(data);

            if (rows > 0) {
                return this.success("操作成功!  ")

            }

            return this.fail('操作失败或未找到要更新的数据!');

            // }
            //
            // return this.fail('要修改的数据不存在!')

        }
        return this.fail('未提交数据!')

    }

    async deleteAction() {
        let _dao = this.model('posts', {aid: this.aid});

        if (this.isGet()) {
            let _id = this.get('id');

            let rows = await _dao.update({id: _id, status: 'trash'});
            if (rows > 0) {
                await this.successMsg('已删除至回收站')

                return this.success("操作成功!  ")

            }
        }

        if (this.isPost()) {
            let ids = this.get('ids');

            if (!think.isEmpty(ids)) {
                let id_arr = [];
                if (ids.search(/,/ig) > -1) {
                    id_arr = ids.split(",");
                } else {
                    id_arr = [ids]
                }

                for (let _id of id_arr) {
                    let rows = await _dao.update({id: _id, status: 'trash'});
                    if (rows > 0) {
                        // await this.successMsg(_id + ': 已删除至回收站')

                    } else {
                        await this.errorMsg(_id + ': 删除失败！')

                    }
                }

                return this.success("操作成功!  ")
            }
            return this.fail('操作失败或未找到要更新的数据!');
        }

        return this.fail('操作失败或未找到要更新的数据!');

    }

    /**
     * 修改内容
     *
     * @returns {Promise.<void>}
     */
    async editAction() {
        let post = await this.dao.find(id);

        this.assign("post", post);
        // console.log()
        return this.display();
    }

    /**
     * 添加 category 分类
     *
     * @returns {Promise<PreventPromise>}
     */
    async saveAction() {
        if (this.isPost()) {

            let data = this.post();
            let exists = await this.dao.categoryExists(data.name);

            if (exists.length > 0) {
                return this.fail('类别已存在!');
            }

            let insertId = await this.dao.save(data);

            if (insertId > 0) {
                return this.success("添加成功!");

            }

            return this.fail('添加失败!');
        }

        return this.fail('未提交数据!')
    }


    async pendingAction() {
        let query = {};
        query.type = "article";
        // query.status = ['NOT IN', 'trash']
        // query.status = ['IN', 'auto-draft,draft'];
        // query.status = ['IN', 'auto-draft,draft'];
        query.status = 'pending';
        // if (!think.isEmpty(type)) {
        //     query.type = type;
        // }

        let fields = [];
        // 文档模型列表始终要获取的数据字段 用于其他用途
        fields.push('id');
        fields.push('author');
        fields.push('status');
        fields.push('type');
        fields.push('title');
        fields.push('name');
        // fields.push('content');
        fields.push('excerpt');
        fields.push('date');
        fields.push('modified');
        fields.push('parent');
        // fields.push('uid');
        // fields.push('conter_id');
        // fields.push('type');
        // fields.push('cover_id');
        //过滤重复字段
        fields = unique(fields);

        let list = await this.dao.where(query).field(fields.join(",")).order('modified DESC').page(this.get("page"), 10).countSelect();

        let _taxonomy = this.model('taxonomy');

        for (let item of list.data) {
            item.terms = await _taxonomy.getTermsByObject(item.id);
        }
        let treeList = await arr_to_tree(list.data, 0);

        list.data = treeList;

        return this.json(list);
    }

    async publishAction() {
        let query = {};
        query.type = "article";
        // query.status = ['NOT IN', 'trash']
        // query.status = ['IN', 'auto-draft,draft'];
        // query.status = ['IN', 'auto-draft,draft'];
        query.status = 'publish';
        // if (!think.isEmpty(type)) {
        //     query.type = type;
        // }

        let fields = [];
        // 文档模型列表始终要获取的数据字段 用于其他用途
        fields.push('id');
        fields.push('author');
        fields.push('status');
        fields.push('type');
        fields.push('title');
        fields.push('name');
        // fields.push('content');
        fields.push('excerpt');
        fields.push('date');
        fields.push('modified');
        fields.push('parent');
        // fields.push('uid');
        // fields.push('conter_id');
        // fields.push('type');
        // fields.push('cover_id');
        //过滤重复字段
        fields = unique(fields);

        let list = await this.dao.where(query).field(fields.join(",")).order('modified DESC').page(this.get("page"), 10).countSelect();

        let _taxonomy = this.model('taxonomy');

        for (let item of list.data) {
            item.terms = await _taxonomy.getTermsByObject(item.id);
        }
        let treeList = await arr_to_tree(list.data, 0);

        list.data = treeList;

        return this.json(list);
    }


    async draftsAction() {
        let query = {};
        query.type = "article";
        // query.status = ['NOT IN', 'trash']
        // query.status = ['IN', 'auto-draft,draft'];
        query.status = ['IN', 'auto-draft,draft'];

        // if (!think.isEmpty(type)) {
        //     query.type = type;
        // }

        let fields = [];
        // 文档模型列表始终要获取的数据字段 用于其他用途
        fields.push('id');
        fields.push('author');
        fields.push('status');
        fields.push('type');
        fields.push('title');
        fields.push('name');
        // fields.push('content');
        fields.push('excerpt');
        fields.push('date');
        fields.push('modified');
        fields.push('parent');
        // fields.push('uid');
        // fields.push('conter_id');
        // fields.push('type');
        // fields.push('cover_id');
        //过滤重复字段
        fields = unique(fields);

        let list = await this.dao.where(query).field(fields.join(",")).order('modified DESC').page(this.get("page"), 10).countSelect();

        let _taxonomy = this.model('taxonomy');

        for (let item of list.data) {
            item.terms = await _taxonomy.getTermsByObject(item.id);
        }
        let treeList = await arr_to_tree(list.data, 0);

        list.data = treeList;

        return this.json(list);
    }

    async trashedAction() {

        let query = {};
        query.type = "article";
        // query.status = ['NOT IN', 'trash']
        query.status = "trash";

        // if (!think.isEmpty(type)) {
        //     query.type = type;
        // }

        let fields = [];
        // 文档模型列表始终要获取的数据字段 用于其他用途
        fields.push('id');
        fields.push('author');
        fields.push('status');
        fields.push('type');
        fields.push('title');
        fields.push('name');
        // fields.push('content');
        fields.push('excerpt');
        fields.push('date');
        fields.push('modified');
        fields.push('parent');
        // fields.push('uid');
        // fields.push('conter_id');
        // fields.push('type');
        // fields.push('cover_id');
        //过滤重复字段
        fields = unique(fields);

        let list = await this.dao.where(query).field(fields.join(",")).order('modified DESC').page(this.get("page"), 10).countSelect();

        let _taxonomy = this.model('taxonomy');

        for (let item of list.data) {
            item.terms = await _taxonomy.getTermsByObject(item.id);
        }
        let treeList = await arr_to_tree(list.data, 0);

        list.data = treeList;

        return this.json(list);
    }


    async pagesAction() {

        return this.display();
    }

    /**
     * 检查 term 是否存在，如果存在返回错误
     *
     * @returns {Promise.<void>}
     */
    async existsAction() {
        let term = this.get('term');
        let taxonomy = 'category';
        if (!think.isEmpty(this.get('taxonomy'))) {
            taxonomy = this.get('taxonomy');
        }
        let result = await this.dao.termExists(term, taxonomy);

        if (result.length > 0) {
            return this.fail('类别已存在');
        }
        return this.success("添加成功!");

    }

    /**
     * 根据分类类别，查询全部分类
     *
     * @param string taxonomy 传入分类类别名称, 如果没有值默认值为 category.
     * @returns {Promise.<void>}
     */
    async listAction() {

        let type = this.get('type');
        let query = {};
        query.type = "article";
        query.status = ['NOT IN', 'trash']

        let fields = [];
        fields.push('id');
        fields.push('author');
        fields.push('status');
        fields.push('type');
        fields.push('title');
        fields.push('name');
        // fields.push('content');
        fields.push('excerpt');
        fields.push('date');
        fields.push('modified');
        fields.push('parent');
        fields = unique(fields);

        if (!think.isEmpty(type)) {
            query.type = type;
        }

        let dao = this.model('posts', {aid: this.aid});

        switch (query.type) {
            case "article":
                break;
            case "resume":
                fields.push('content_json')
                // fields.push('content')

                break;
            case "snippets":
                break;
            case "pages":
                break;
        }


        let list = await dao.where(query).field(fields.join(",")).order('modified DESC').page(this.get("page"), 10).countSelect();

        let _taxonomy = this.model('taxonomy');

        // 获取内容分类
        for (let item of list.data) {
            item.terms = await _taxonomy.getTermsByObject(item.id);
        }

        if (query.type === 'resume') {
            for (let resume of list.data) {
                resume.content_json = JSON.parse(resume.content_json)
                // console.log(JSON.stringify(resume.content_json.work[0].company));

            }
        }

        // list.data['content_json'] = JSON.parse(list.data['content_json']);
        /**
         * 处理内容为　JSON 对象
         */
        let treeList = await arr_to_tree(list.data, 0);

        list.data = treeList;

        // console.log(JSON.stringify(list.data))

        return this.json(list);
    }

}
