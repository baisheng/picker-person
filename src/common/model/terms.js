'use strict';

import Base from './base';
/**
 * model
 */
export default class extends Base {

    init(...args) {
        super.init(...args);

        this.relation = {
            metas: {
                type: think.model.HAS_MANY,
                model: 'termmeta',
                fKey: 'term_id',
                field: "term_id,meta_key,meta_value",
            }
        }
    }


    async allTerms(flag) {
        if (flag) {
            let ret = await think.cache("all_terms", async() => {
                let data = await this.model('terms').select();
                // let result = {};
                // data.forEach(item => {
                //     result[item.key] = item.value;
                // });
                // return result;
                return data;
            }, this.cacheOptions);

            return ret;
        } else {
            return await this.model('terms').select();

        }
    }

    async allTaxonomies(flag) {
        if (flag) {
            let ret = await think.cache("all_term_taxonomy", async() => {
                return await this.model('term_taxonomy').select();
                // let result = {};
                // data.forEach(item => {
                //     result[item.key] = item.value;
                // });
                // return result;
            }, this.cacheOptions);

            return ret;

        } else {
            return await this.model('terms').select();

        }
    }


    /**
     * 根据类别的分类方法，获取类别
     * @param taxonomy
     * @returns {Promise.<*>}
     */
    async findByTaxonomy(taxonomy) {

        let all_terms = await this.allTerms(true);
        let taxonomies = await this.allTaxonomies(true);

        let _taxonomy = await think._.filter(taxonomies, {"taxonomy": taxonomy});

        let _terms = [];
        _taxonomy.forEach((item) => {
            _terms.push(think._.filter(all_terms, {id: item.term_id}))
        })


        _terms = await this._formatMeta(think._.flattenDeep(_terms)) ;


        return _terms;
    }

    /**
     * 获取分类下的所有内容
     *
     * @param term_ids
     * @param taxonomies
     * @returns {Promise.<void>}
     */
    async getObjectsInTerm(term_ids, taxonomies, page) {


        // let ret = await think.cache("_objects_in_term", async() => {
        // 遍例 taxonomy 查询是否存在
        let _term_relationships = this.model("term_relationships");
        let objects;

        if (!page || page === null) {
            // console.log('page is null')
            objects = await _term_relationships.join({
                table: "term_taxonomy",
                join: "inner",
                as: "tt",
                on: ["term_taxonomy_id", "term_id"]

            }).field("object_id").where("tt.taxonomy IN ('" + taxonomies + "') AND tt.term_id IN (" + term_ids + ")").select();
            let ids = [];
            for (let obj of objects) {
                ids.push(obj.object_id);
            }
            return ids;
        }

        objects = await _term_relationships.join({
            table: "term_taxonomy",
            join: "inner",
            as: "tt",
            on: ["term_taxonomy_id", "term_id"]

        }).field("object_id").where("tt.taxonomy IN ('" + taxonomies + "') AND tt.term_id IN (" + term_ids + ")").order('object_id DESC').page(page, 10).countSelect();

        let ids = [];
        for (let obj of objects.data) {
            ids.push(obj.object_id);
        }
        delete objects.data;
        objects.ids = ids;

        return objects;

        // }, this.cacheOptions);

        // return objects;
        // return ret;
    }

}