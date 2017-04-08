'use strict';

import Base from './base.js';
//
export default class extends Base {
    // export default class extends think.controller.base {

    init(http){
        super.init(http);
        this.dao = this.model('posts');

    }
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction(){
        // page article portfolio
        let type = this.get('type');


        // let list = await Document.alias('DOCUMENT').where(map).order('level DESC,DOCUMENT.id DESC').field(fields.join(",")).page(this.get("page"), 12).countSelect();
        // let map = {};
        // map.status = ['IN', '0,1,2'];
        // map.category_id = ['IN', subcate];
        // map.model_id = ['in', '2'];

        let query = {};
        query.type = "page";
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
        fields.push('parent');
        // fields.push('uid');
        // fields.push('conter_id');
        // fields.push('type');
        // fields.push('cover_id');
        //过滤重复字段
        fields = unique(fields);

        let list = await this.dao.where(query).field(fields.join(",")).order('modified DESC').page(this.get("page"), 10).countSelect();

        let _taxonomy = this.model('taxonomy');

        for (let item of list.data){
            item.terms = await _taxonomy.getTermsByObject(item.id);
        }

        // let Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter
        // let pages = new Pages(this.http); //实例化 Adapter
        // let page = pages.pages(list);
        // this.assign('pagerData', page); //分页展示使用
        let treeList = await arr_to_tree(list.data, 0);

        list.data = treeList;
        // console.log(JSON.stringify(list));

        this.assign("pages", list);

        return this.display();
    }

    async listAction(){


    }
}