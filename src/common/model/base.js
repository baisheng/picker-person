'use strict';
/**
 * relation model
 */
export default class extends think.model.relation {
    init(...args){
        super.init(...args);

        // 初始化用户数据表
        if (this.config.aid === undefined || think.isEmpty(this.config.aid)) {
            this._aid = "";

        } else {

            this._aid = this.config.aid + "_";
        }

        this.name = this._aid + this.name;
    }

    cacheOptions = {
        timeout: 30 * 24 * 3600 * 1000,
        type: !think.isMaster ? 'file' : 'memory'
    };


    /**
     * 处理 metas
     *
     * @param post
     * @returns {Promise.<*>}
     */
    async _formatMeta(list) {
        let _items = [];

        for (let item of list) {
            item.meta = {};
            if (item.metas.length > 0) {
                for (let meta of item.metas) {
                    // console.log(meta.meta_key + ":" + meta.meta_value);
                    item.meta[meta.meta_key] = meta.meta_value;
                }
            }
            delete item.metas;
            _items.push(item);
        }
        return _items;
    }
}