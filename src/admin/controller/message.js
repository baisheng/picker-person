'use strict';

import Base from './base.js';
import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';
// import exif from 'exif';

export default class extends Base {
// export default class extends think.controller.base {

    /**
     * index action
     * @return {Promise} []
     */

    init(http) {
        super.init(http);
        // this._terms = this.model('terms');
        this.dao = this.model('posts');
        this.tactive = "article";
    }

    async indexAction() {


        return this.display();
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

    async pictureAction() {
        let file = think.extend({}, this.file('file'));
        console.log(JSON.stringify(file));

        let filepath = file.path;
        let basename = path.basename(filepath);

        console.log(basename);
        let ret = {'status': 1, 'info': '上传成功', 'data': ""}
        let res;

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

            // let meta = {
            //     "_attachment_file": data.path,
            //     "_attachment_metadata": ''
            // }
            const _attachment_metadata = await sharp(file.path).metadata();
            delete _attachment_metadata.exif;

            let _post_id = await this.dao.add(data);
            this.dao.addPostMeta(_post_id, "_attachment_metadata", _attachment_metadata);
            await this.dao.addPostMeta(_post_id, "_attachment_file", _path);


            ret['data'] = data;
            // await this.model('posts');
            // res = await this.model("picture").data(data).add();
        } else {
            console.log('not exist')
        }

        return this.json(ret);
    }

    //上传图片
    async uploadpicAction() {
        let file = think.extend({}, this.file('file'));
        /**/
        let filepath = file.path;
        let basename = path.basename(filepath);
        let ret = {'status': 1, 'info': '上传成功', 'data': ""}
        let res;
        //加入七牛接口
        if (this.setup.IS_QINIU == 1) {
            let qiniu = think.service("qiniu");
            let instance = new qiniu();
            let uppic = await instance.uploadpic(filepath, basename);
            if (!think.isEmpty(uppic)) {
                let data = {
                    create_time: new Date().getTime(),
                    status: 1,
                    type: 2,
                    sha1: uppic.hash,
                    path: uppic.key

                };
                res = await this.model("picture").data(data).add();
            }
        } else {
            let uploadPath = think.RESOURCE_PATH + '/upload/picture/' + dateformat("Y-m-d", new Date().getTime());
            think.mkdir(uploadPath);
            if (think.isFile(filepath)) {
                fs.renameSync(filepath, uploadPath + '/' + basename);
            } else {
                console.log("文件不存在！")
            }
            file.path = uploadPath + '/' + basename;
            if (think.isFile(file.path)) {
                let data = {
                    path: '/upload/picture/' + dateformat("Y-m-d", new Date().getTime()) + '/' + basename,
                    create_time: new Date().getTime(),
                    status: 1,

                }
                res = await this.model("picture").data(data).add();
            } else {
                console.log('not exist')
            }
        }

        this.json(res);
    }


    /**
     * 添加页面
     * @returns {Promise.<void>}
     */
    async savePage() {
    }

    /**
     * 添加文章
     * @returns {Promise.<void>}
     */
    async saveArticle() {
    }

    /**
     * 添加作品
     * @returns {Promise.<void>}
     */
    async savePorfolio() {
    }

    /**
     * 添加商品
     *
     * @returns {Promise.<void>}
     */
    async saveGoods() {
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
        if (this.isGet()) {
            let _id = this.get('id');

            let rows = await this.dao.update({id: _id, status: 'trash'});
            if (rows > 0) {
                return this.success("操作成功!  ")

            }
        }

        if (this.isPost()) {
            let ids = this.get('ids');

            if (!think.isEmpty(ids)){
                let id_arr = [];
                if (ids.search(/,/ig) > -1) {
                    id_arr = ids.split(",");
                }else {
                    id_arr = [ids]
                }

                for(let _id of id_arr){
                    await this.dao.update({id: _id, status: 'trash'});
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

    /**
     * 根据分类类别，查询全部分类
     *
     * @param string taxonomy 传入分类类别名称, 如果没有值默认值为 category.
     * @returns {Promise.<void>}
     */
    async listAction() {


        // let taxonomy = "category";
        // if (!think.isEmpty(this.get('taxonomy'))) {
        //     taxonomy = this.get('taxonomy');
        // }
        // let res = await this.dao.getTerms(taxonomy);
        //
        // return this.json(res);

        let type = this.get('type');

        // page article portfolio

        // let list = await Document.alias('DOCUMENT').where(map).order('level DESC,DOCUMENT.id DESC').field(fields.join(",")).page(this.get("page"), 12).countSelect();
        // let map = {};
        // map.status = ['IN', '0,1,2'];
        // map.category_id = ['IN', subcate];
        // map.model_id = ['in', '2'];

        let query = {};
        query.type = "article";
        query.status = ['NOT IN','trash']
        if (!think.isEmpty(type)) {
            query.type = type;
        }

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
        // fields.push('uid');
        // fields.push('conter_id');
        // fields.push('type');
        // fields.push('cover_id');
        //过滤重复字段
        fields = unique(fields);

        let list = await this.dao.where(query).field(fields.join(",")).page(this.get("page"), 10).countSelect();
        // this.assign('list', list.data)

        console.log(JSON.stringify(list))
        let Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter
        let pages = new Pages(this.http); //实例化 Adapter
        let page = pages.pages(list);
        // this.assign('pagerData', page); //分页展示使用

        return this.json(list);
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
}
