'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        let posts = this.model('posts');
        // let top5 = await posts.limit(5).where({"type":"portfolio"}).select();
        // let portfolios = await posts.top(5, {"type": "portfolio"});

        // console.log(JSON.stringify(portfolios));
        // this.assign("list", portfolios);

        let _terms = this.model('terms');

        let categorys = await _terms.findByTaxonomy('category');

        // console.log(JSON.stringify(categorys))
        // 从分类中获取到分类下面的内容
        let term_slug = "blog";
        let _term = await think._.find(categorys, {slug: term_slug});

        let page = 1;
        if (!think.isEmpty(this.get('page'))){
            page = this.get('page');
        }

        if (!think.isEmpty(_term)){
            // console.log(page + "----")
            let post_id_page = await _terms.getObjectsInTerm(_term.id, 'category', page);

            let Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter
            let pages = new Pages(this.http); //实例化 Adapter
            let pager_data = pages.pages(post_id_page);
            this.assign('pagerData', pager_data); //分页展示使用

            if (post_id_page.ids.length > 0){
                let posts = await this.model('posts').list(post_id_page.ids);

                this.assign("posts", posts);
            }
        }
        let meta_type = this.get('meta_type');
        return this.displayView('blog');
    }

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
}