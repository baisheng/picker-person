'use strict';

import Base from './base.js';

export default class extends Base {

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
        let type = this.get('type');
        let ID = this.get('id');
        // if (!think.isEmpty(type)) {
        if (!think.isEmpty(ID)) {
            let article = await this.dao.find(ID);
            this.assign("post", article);
        }

        return this.displayView('article');
    }

}