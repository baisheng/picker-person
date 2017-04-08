'use strict';

import Base from './base.js';

export default class extends Base {

    init(http){
        super.init(http);
        let theme = "material";
        // "/resume_themes/material"

        this.RESUME_THEME_VIEW_PATH = `${think.ROOT_PATH}${think.sep}www${think.sep}resume_themes${think.sep}${theme}${think.sep}`;
    }
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {

        // this.assign('theme_path', theme_path)
        let default_index = this.options.default_index;

        let resumeModel = this.model('resumes');

        if (!think.isEmpty(default_index)){
            let data = await resumeModel.find({id: default_index});
            let jsonResume = JSON.parse(data.content);
            this.assign('resume', jsonResume);

        }
        return this.display(this.RESUME_THEME_VIEW_PATH + 'index' + '.html');

        // return this.displayView('index');
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