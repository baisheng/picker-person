'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {

        // Default main-menu
        // let menus = await this.model('taxonomy').getNavMenuItems();

        // let menus = await this.mode('taxonomy').getAllMenu();
        // console.log(JSON.stringify(menus));
        // this.assign('menus', menus);

        // console.log(JSON.stringify(menus));

        let default_app = this.options.site['default_app'];
        let default_index = this.options.site['default_index'];

        if (default_app) {
            //获取 admin 模块下 user controller 的实例
            let controllerInstance = this.controller(default_app, 'admin');
            //调用 controller 里的 test action，会自动调用 __before 和 __after 魔术方法
            await this.action(controllerInstance, 'index')

            //获取 admin 模块下 user controller 的实例
            // let controllerInstance = this.controller('admin', default_app);
            // controllerInstance.index();
            //获取 controller 的实例下就可以调用下面的方法了
            // let bar = controllerInstance.foo();

            // let controllerInstance = this.controller('admin/user');
            // let bar = controllerInstance.foo();

            // console.log(dashboard)
            // this.THEME_VIEW_PATH = `${think.ROOT_PATH}${think.sep}www${think.sep}themes${think.sep}${theme}${think.sep}`;

            // return this.display(this.THEME_VIEW_PATH + name + '.html');
            // return this.display(dashboard + '_index.html');

        }
        return this.display();
    }
}