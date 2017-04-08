'use strict';

import Base from './base.js';

export default class extends Base {
    // export default class extends think.controller.base {

    /**
     * index action
     * @return {Promise} []
     */
    async indexAction(){
        // let menus = await this.model('taxonomy').getNavMenuItems();
        // this.assign('menus', menus);
        let nav_menus = await this.model('taxonomy').getAllMenu();
        this.assign('nav_menus', nav_menus)
        // let path1 = think.getPath("common", "config");
        //     console.log(path1  + "--------")

        // let _lang = await language();

        let mods = await this.model('options').getThemeMods();
        // console.log(JSON.parse(mods)['nav_menu_locations'])
        this.assign('menu_locations', JSON.parse(mods)['nav_menu_locations']);
        // console.log(JSON.stringify());

        // console.log(JSON.stringify(nav_menus));
        return this.display();
    }

    async listAction(){

        // let menuId = this.get('id');

        // let menus = await this.model('taxonomy').getNavMenuItems();
        // // this.assign('menus', menus);
        // menus.forEach((item) => {
        //     // item.title = item.name;
        //     item.key = item.id;
        // })

        // console.log(JSON.stringify(menus))
        let nav_menus = await this.model('taxonomy').getAllMenu();

        console.log(JSON.stringify(nav_menus));
        this.assign('nav_menus', nav_menus)

        return this.json(arr_to_tree(nav_menus, 0))
        // return this.json(menus);
    }

    async itemsAction(){

        if (this.isPost()) {
            let data = await this.post();

            console.log(JSON.stringify(data));

            if (!think.isEmpty(data.id)) {
                let menus = await this.model('taxonomy').getNavMenuItems(data.id);

                menus.forEach((item) => {
                    // item.title = item.name;
                    item.key = item.id;
                })
                // let list = await this._to_tree(menus, 0);
                // console.log(JSON.stringify(menu_tree(menus, 0)));

                return this.json(menu_tree(menus, 0))
            }
        }
       return this.json([]);
    }

/*    async _to_tree(data, parent){
        let result = [], temp;
        let length = data.length;

        // console.log(length + "======")

        for (let i = 0; i < length; i++) {
            if (!think.isEmpty(data[i].meta) && data[i].meta['_menu_item_menu_item_parent'] != null){
                // console.log("menu_item meta")
                if (data[i].meta['_menu_item_menu_item_parent'] == parent) {

                    temp = await this._to_tree(data, data[i].id);
                    if (temp.length > 0) {
                        data[i].expanded = true;
                        data[i].children = temp;
                        data[i].chnum = data[i].children.length
                    }
                }
            }
        }
        return result;
    }*/

}