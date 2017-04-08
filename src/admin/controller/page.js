'use strict';

// import Base from './base.js';
//
// export default class extends Base {
    export default class extends think.controller.base {

    /**
     * index action
     * @return {Promise} []
     */
    async indexAction(){
        // console.log("page _ index")
        // Default main-menu
        // let menus = await this.model('taxonomy').getNavMenuItems();

        // console.log(JSON.stringify(menus));
        // this.assign('menus', menus);
        //
        // console.log(JSON.stringify(menus));

        //auto render template file index_index.html
        return this.display();
    }
}