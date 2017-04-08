'use strict';

import Base from './base.js';
import * as fs from 'fs';
import * as path from 'path';


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
    }

    async indexAction() {

/*        let _terms = this.model('terms');

        let snippet_terms = await _terms.findByTaxonomy('snippet');

        let _items = [];
        snippet_terms.forEach((item) => {
            let _item = {};
            // _item.id = item.id;
            _item.text = item.name;
            _item.slug = think._.replace(item.slug, 'snippet-format-', '');

            if (!think.isEmpty(item.meta['_snippet_icon'])) {
                _item.icon = item.meta['_snippet_icon'];
            }
            if (!think.isEmpty(item.meta['_status']) && item.meta['_status'] === 'active') {
                _items.push(_item);
            }
        });

        // console.log(JSON.stringify(_items))
        this.assign("snippet_terms", JSON.stringify(_items));*/

        return this.display();
    }

    formatStrings(){
        // 81	图像	snippet-format-image	0
        // 82	音频	snippet-format-audio	0
        // 83	引语	snippet-format-quote	0
        // 84	链接	snippet-format-link	0
        // 85	聊天	snippet-format-chat	0
        // 86	文本	snippet-format-text	0
        // 87	状态	snippet-format-status	0
        // 88	进程	snippet-format-feed	0
        // 89	笔记	snippet-format-note	0
        // 90	人物	snippet-format-person	0
        // 91	想法	snippet-format-idea	0
        let strings = {
            'standard': '默认',
            'image': '图像',
            'audio': '音频',
            'quote': '引语',
            'link': '链接',
            'chat': '聊天',
            'text': '文本',
            'status': '状态',
            'feed': '进程',
            'note': '笔记',
            'person': '人物',
            'idea': '想法',
        }
        // function get_post_format_strings() {
        //     $strings = array(
        //         'standard' => _x( 'Standard', 'Post format' ), // Special case. any value that evals to false will be considered standard
        //         'aside'    => _x( 'Aside',    'Post format' ),
        //         'chat'     => _x( 'Chat',     'Post format' ),
        //         'gallery'  => _x( 'Gallery',  'Post format' ),
        //         'link'     => _x( 'Link',     'Post format' ),
        //         'image'    => _x( 'Image',    'Post format' ),
        //         'quote'    => _x( 'Quote',    'Post format' ),
        //         'status'   => _x( 'Status',   'Post format' ),
        //         'video'    => _x( 'Video',    'Post format' ),
        //         'audio'    => _x( 'Audio',    'Post format' ),
        // );
        //     return $strings;
        // }
    }

    // function get_post_format_string( $slug ) {
    //     $strings = get_post_format_strings();
    //     if ( !$slug )
    //         return $strings['standard'];
    //     else
    //         return ( isset( $strings[$slug] ) ) ? $strings[$slug] : '';
    // }

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
                    let rows = await this.dao.update({id: _id, status: 'trash'});
                    if (rows > 0) {
                        await this.successMsg(_id + ': 已删除至回收站')

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

    /**
     * 根据分类类别，查询全部分类
     *
     * @param string taxonomy 传入分类类别名称, 如果没有值默认值为 category.
     * @returns {Promise.<void>}
     */
    async listAction() {
        // page article portfolio
        let meta_type = this.get('meta_type');

        let list =  await this.dao.snippets(this.get('page'), meta_type);


        let _taxonomy = this.model('taxonomy');

        for (let item of list.data) {
            item.terms = await _taxonomy.getTermsByObject(item.id);
        }

        // let Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter
        // let pages = new Pages(this.http); //实例化 Adapter
        // let page = pages.pages(list);
        // this.assign('pagerData', page); //分页展示使用
        let treeList = await arr_to_tree(list.data, 0);

        list.data = treeList;
        // console.log(JSON.stringify(list));

        return this.json(list);
    }


    async pageAction() {
        console.log("page action")
        return this.display();
    }

    async getAction(){
        if (this.isGet()) {
            let id = this.get('id');
            if (!think.isEmpty(id)) {

                let snippet = await this.dao.get(id);

                // console.log(JSON.stringify(snippet))
                return this.json(snippet)
            }
        }
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
