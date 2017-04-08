'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {

        if (this.isPost()) {
            let data = this.post();
            let _options = this.model('options', {aid: this.aid});

            if (!think.isEmpty(data.name)) {
                let options = await _options.updateOptions(data.name, data.value);

                // console.log(JSON.stringify(options))
                if (options) {
                    await this.successMsg('配置更新成功');

                    return this.success();

                } else {
                   await this.errorMsg('配置更新失败');
                }
            }
            else {
                let options_data = await this.model('options').list();
                // this.assign("options_data", JSON.stringify(options_data))
                return this.json(options_data);
            }
        }

        if (this.isGet()) {

            let menus = await this.model('taxonomy').getAllMenu();
            this.assign('menus', menus);

            return this.display();
        }
    }

    async fetchAction() {

        // if (this.isPost()){
            let options_data = await this.model('options').list();

            return this.json(options_data)
        //     this.assign("options_data", JSON.stringify(options_data))
        // }

    }



}