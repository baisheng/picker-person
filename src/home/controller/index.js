'use strict';

import Base from './base.js';

export default class extends Base {

    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        //auto render template file index_index.html

        // 首页显示产品推荐
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
        // this.action = ""
        return this.displayView('index');
    }

    async routeAction() {
        let term = this.get('term');
        // 默认查询的是　category 分类方法下的分类
        let categorys = await this.model('taxonomy').getTerms('category');

        // console.log(JSON.stringify(categorys))
        // 过滤要访问的类别
        let _term = await think._.filter(categorys, {slug: term});

        if (_term.length > 0) {
            let postIds = await this.model('taxonomy').getObjectsInTerm(_term[0]['term_id'], 'category');

            if (postIds.length > 0) {
                let posts = await this.model('posts').list(postIds);
                this.assign("posts", posts);
            }
        }
        let posts = this.model('posts');

        let archives = await posts.getPostArchive();
        // console.log(JSON.stringify(archives));
        this.assign("list", archives);
        // term_meta 处理　分类的模板页, 默认分类展示页与类别相同
        // return this.displayView('timeline');
        // return this.displayView('portfolio');
        return this.displayView('blog');
    }

    async articleAction(){
        // let term = this.get('term');
        // 默认查询的是　category 分类方法下的分类
        let categorys = await this.model('taxonomy').getTerms('category');

        console.log(JSON.stringify(categorys) + "---------");

        // console.log(JSON.stringify(categorys))
        // 过滤要访问的类别
        /*        let _term = await think._.filter(categorys, {slug: term});

         if (_term.length > 0) {
         let postIds = await this.model('taxonomy').getObjectsInTerm(_term[0]['term_id'], 'category');

         if (postIds.length > 0) {
         let posts = await this.model('posts').list(postIds);
         this.assign("posts", posts);
         }
         }
         let posts = this.model('posts');

         let archives = await posts.getPostArchive();
         // console.log(JSON.stringify(archives));
         this.assign("list", archives);*/
        // term_meta 处理　分类的模板页, 默认分类展示页与类别相同
        // return this.displayView('timeline');
        // return this.displayView('portfolio');
        return this.displayView('blog');
    }


    async blogAction(){

    }
    // async picture()

    /**
     * 临时
     * @returns {Promise.<void>}
     */
    async caseAction(){
        let name = this.get('name');
        console.log("------" + name)
        if (!think.isEmpty(name)) {
            // let theme = 'slides';
            // this.THEME_VIEW_PATH = `${think.ROOT_PATH}${think.sep}www${think.sep}themes${think.sep}${theme}${think.sep}`;
            return this.display(this.THEME_VIEW_PATH + '/slides/' + name + '.html');
        }
    }
}