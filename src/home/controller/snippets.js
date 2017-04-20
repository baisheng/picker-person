'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */

    init(http) {
        super.init(http);
        // this._terms = this.model('terms');
        this.dao = this.model('posts');
    }

    /**
     * index action
     * @return {Promise} []
     */
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
            _items.push(_item);
        });

        // console.log(JSON.stringify(_items))
        this.assign("snippet_terms", JSON.stringify(_items));*/

        return this.displayView('snippets');
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

        let query = {status : 'publish'}
        let list =  await this.dao.snippets(this.get('page'), meta_type, query);


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

}