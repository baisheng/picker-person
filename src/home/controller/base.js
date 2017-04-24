'use strict';

import fs from 'fs';
import pack from '../../../package.json';

export default class extends think.controller.base {
    /**
     * init
     * @param  {[type]} http [description]
     * @return {[type]}      [description]
     */
    init(http) {
        super.init(http);
        //home view path
        this.HOME_VIEW_PATH = `${think.ROOT_PATH}${think.sep}view${think.sep}home${think.sep}`;
    }

    async __before() {
        //get website options
        let model = this.model('options');
        // loading options
        let options = await model.getOptions();

        this.options = options;

        //TODO: 要解决 json 转义问题先 hack

        if (options.site.profile_cover !== 'undefined') {
            options.site.profile_cover = JSON.parse(options.site.profile_cover)
        }
        if (!this.isAjax()) {
            this.assign('options', options);
        }

        // console.log(await model.getThemeMods());

        // console.log(model.getThemeMods())
        // let all_menus = await this.
        // Default main-menu
        // let menus = await this.model('taxonomy').getNavMenuItems();

        // console.log(JSON.stringify(menus));
        // this.assign('menus', menus);

        /**
         * 77 是从访问的分类中获得的 查询此分类下的内容 id
         */
            // let postIds =  await this.model('taxonomy').getObjectsInTerm(77, 'category');

            // console.log(JSON.stringify(postIds));

            // let posts = await this.model('posts').list(postIds);

            // console.log(JSON.stringify(posts));

            // console.log(JSON.stringify(this.options.current_theme));
            // let theem = this.options.
        let theme = this.options.site.current_theme;
        // let theme = 'self';
        this.THEME_VIEW_PATH = `${think.ROOT_PATH}${think.sep}www${think.sep}themes${think.sep}${theme}${think.sep}`;
    }

    /**
     * display view page
     * @param  {} name []
     * @return {}      []
     */
    async displayView(name) {
        return this.display(this.THEME_VIEW_PATH + name + '.html');
    }

    async getNavMenus() {
        let _taxonomy = this.model('taxonomy');
        let nav_menus = await _taxonomy.getTerms('nav_menu');

        let items = await _taxonomy.getObjectsInTerm('54', 'nav_menu');
        let posts = this.model('posts');

        console.log(JSON.stringify(items));
        let navitems = [];
        for (let item of items) {
            console.log(item.object_id)
            let menu_item = await posts.where({'id': item.object_id}).find();
            console.log(JSON.stringify(menu_item));
            navitems.push(menu_item)
        }

        console.log(JSON.stringify(navitems));
        /*
         let posts = [];
         let terms = [];
         for (let item of items) {
         let object_id = getPostMeta(item.id, '_menu_item_object_id');
         let object = getPostMeta(item.id, '_menu_item_object');
         let type = getPostMeta(item.id, '_menu_item_type');

         if ('post_type' == type) {
         posts.push(object_id);

         } else if ('taxonomy' == type) {
         terms.push(object_id);

         }
         }

         if (!think.isEmpty(posts)){}

         if (!think.isEmpty(terms)){}
         // console.log(JSON.stringify(result)) ;
         */
        return result;
    }

    async getPostMeta() {
    }
}
