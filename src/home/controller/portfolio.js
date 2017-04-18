'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {

        return this.displayView('portfolio');
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