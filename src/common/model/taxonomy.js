'use strict';

import {PasswordHash} from 'phpass';
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

    /**
     * Check whether a category exists.
     *
     * @param int|string    cate_name   Category name.
     * @param int           parent      Optional. ID of parent term.
     * @returns {Promise.<void>}
     */
    async categoryExists(cate_name, parent = null) {
        let res = await this.termExists(cate_name, 'category');
        return res;
    }


    /**
     * 添加数据
     *
     * @param data
     * @returns {Promise.<*>}
     */
    async save(data) {
        // 1 插入 terms 表，增加类别信息数据
        // 2 插入 term_taxonomy 表, 增加类别信息的分类关联
        let _terms = this.model("terms");
        let _term_taxonomy = this.model("term_taxonomy");

        let _termId = await _terms.add({
            name: data.name,
            slug: data.slug,
            group: data.group
        });

        if (!think.isEmpty(_termId)) {
            let _taxonomyId = await _term_taxonomy.add({
                term_id: _termId,
                taxonomy: data.taxonomy,
                parent: data.parent
            });

            return _taxonomyId;
        }

        return 0;
    }

    async update(data) {
        let _terms = this.model('terms');
        let rows = await _terms.update({
            id: data.id,
            name: data.name,
            slug: data.slug,
            group: data.group
        });
        return rows;
    }

    /**
     * 添加对象关联
     *
     * @param object_id
     * @param term_taxonomy_id
     * @returns {Promise.<void>}
     */
    async relationships(object_id, term_taxonomy_id ){
        let _term_relationships = this.model('term_relationships');
        return await _term_relationships.add({
            object_id: object_id,
            term_taxonomy_id: term_taxonomy_id
        })
    }

    /**
     * 保存或删除关联
     * @param object_id
     * @param term_taxonomy_id
     * @returns {Promise.<*>}
     */
    async saveOrDelRelation(object_id, term_taxonomy_id){
        let _dao = this.model('term_relationships');
        let result = await _dao.thenAdd({object_id: object_id, term_taxonomy_id: term_taxonomy_id}, {object_id: object_id, term_taxonomy_id: term_taxonomy_id});

        // console.log(JSON.stringify(result))
        if (result.type === "add"){
            return result;

        }else {
            let relation = await _dao.where({object_id: object_id, term_taxonomy_id: term_taxonomy_id}).delete();
            return relation;
        }

    }
    async delete_relationships(object_id, taxonomies){
        let _term_relationships = this.model('term_relationships');
        for (let taxonomy in taxonomies){
            await _term_relationships.where({object_id: object_id, term_taxonomy_id: taxonomy}).delete();
        }
    }

    // async unlinkTerm(){}
    // set_object_terms
    // async setObjectTerms(object_id, terms, taxonomy){
    //
    //     let termIds = await this.getTermsByObject(object_id);
    // }
    /**
     * 删除 Term
     *
     * @param term
     * @param taxonomy
     * @returns {Promise.<boolean>}
     */
    async deleteTerm(term, taxonomy) {
        // let id = this.get('id');
        // 1 删除 分类前，先做更新内容操作，将与分类关联的内容更新
        // await preDeleteTerm();
        // 2 删除分类的 meta 数据
        let _termmeta = this.model('termmeta');
        let _terms = this.model('terms');
        let _taxonomy = this.model('term_taxonomy');
        let _term_relationships = this.model('term_relationships');

        _termmeta.delete({
            where: {term_id: term}
        });

        _term_relationships.delete({
            where: {object_id: term}
        });

        _terms.delete({
            where: {id: term}
        });

        _taxonomy.delete({
            where: {term_id: term}
        });

        return true;
        // 3 删除 分类的类别方法数据
        // 4 解除与类别关联的内容关系
    }

    /**
     * Check if Term exists.
     *
     * @param int|string term The term to check. Accepts term ID, slug, or name.
     * @param string taxonomy The taxonomy name to use
     * @param int parent Optional. ID of parent term under which to confine the exists search.
     * @returns {Promise.<void>}
     */
    async termExists(term, taxonomy = '', parent = null) {
        let _terms = this.model("terms");

        // let terms_model = this.model('terms');
        // let res = await terms_model.where({"name": term}).select();
        // return res;
        if (think.isNumber(term)) {
            if (0 == term) {
                return term;
            }

            let map = {};
            map.id = term;

            if (!think.isEmpty(taxonomy)) {
                map.taxonomy = taxonomy;

                return await _terms.alias("t").join({
                    table: "term_taxonomy",
                    join: "inner",
                    on: ["id", "term_id"]

                }).where(map).select();
            }

            return await _terms.field("id").where(map).select();
        }


        let where = {};
        where['t.name'] = term;
        where['tt.taxonomy'] = taxonomy;

        let result = await _terms.alias('t').join({
            table: "term_taxonomy",
            join: "inner",
            as: "tt",
            on: ["id", "term_id"]

        }).where(where).select();

        return result;
        /*
         if (think.isNumber(term)) {
         if (0 == term) {
         return term;
         }

         let map = {};
         map.term_id = term;

         if (!think.isEmpty(taxonomy)) {
         map.taxonomy = taxonomy;

         return await this.alias("t").join({
         table: "term_taxonomy",
         join: "inner",
         on: ["term_id", "term_id"]

         }).where(map).select();
         }

         return await this.field("term_id").where(map).select();
         }
         */

        // return await

    }


    /**
     * 根据类别的分类方法，获取类别
     * @param taxonomy
     * @returns {Promise.<*>}
     */
    async getTerms(taxonomy) {

        let all_terms = await this.allTerms(true);
        let taxonomies = await this.allTaxonomies(true);

        let snippets = await think._.filter(taxonomies, {"taxonomy": taxonomy});

        let _terms = [];
        snippets.forEach((item) => {
            _terms.push(think._.filter(all_terms, {id: item.term_id}))
        })

        let _term_meta = this.model('termmeta');


        // console.log(JSON.stringify(_terms))
        return think._.flattenDeep(_terms);

        // return _terms;
        // let ret = await think.cache(this.cacheKey, async() => {
        //     let data = await this.select();
        //     let result = {};
        //     data.forEach(item => {
        //         result[item.key] = item.value;
        //     });
        //     return result;
        // }, this.cacheOptions);
        // let ret = await think.cache("_taxonomy_terms", async() => {

        // let where = {};
        // where['tt.taxonomy'] = taxonomy;
        // let _terms = this.model("terms");
        //
        //
        // 查询出指定的类别
        // let result = await _terms.join({
        //     table: "term_taxonomy",
        //     join: "inner",
        //     as: "tt",
        //     on: ["id", "term_id"]
        //
        // }).where(where).select();
        //
        // 查询类别的元数据

        // think._.filter(result, {id: item.term_id})

        // let _term_meta = this.model('termmeta');
        // let metas = await _term_meta.where("term_id IN ('" + + "')").select();

        // return result;

        // }, this.cacheOptions);
        //
        // return ret;
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
     * 根据内容获取分类, 这里查询出来的分类未查询它所归属的分类法，仅类别的信息
     * @returns {Promise.<void>}
     */
    async getTermsByObject(object_id) {

        // 从缓存中提取到所有 term
        let all_terms = await this.allTerms(true);

        let _term_relationships = this.model("term_relationships");

        // 查询内容关联的分类法 id == term_id
        let taxonomies = await _term_relationships.field('term_taxonomy_id as term_id').where({"object_id": object_id}).select();

        /**
         * 按 term_id 查询 term
         * @type {Array}
         * @private
         */
        let _terms = [];
        taxonomies.forEach((item) => {
            _terms.push(think._.filter(all_terms, {id: item.term_id}));
        });

        return think._.flattenDeep(_terms);
    }

    async getAllMenu() {
        let all_terms = await this.allTerms(true);

        let taxonomies = await this.allTaxonomies(true);


        let nav_menus = think._.filter(taxonomies, {taxonomy: 'nav_menu'});


        let _terms = [];
        nav_menus.forEach((item) => {
            _terms.push(think._.filter(all_terms, {id: item.term_id}))
        })

        return think._.flattenDeep(_terms);

    }

    async getNavMenuItems(menu_id) {

        console.log(menu_id + "xxxxxx")
        let _taxonomy = this.model('taxonomy');

        let item_ids = await _taxonomy.getObjectsInTerm(menu_id, 'nav_menu');

        let posts = this.model('posts');

        let navitems = [];

        const itemType = {
            taxonomy: "taxonomy",
            post_type: "post_type"
        };

        const objectType = {
            page: "page",
            custom: "custom"
        };

        if (!think.isEmpty(item_ids)) {
            // 根据 id 查询 navitem 与　meta 信息
            let nav_items = await posts.getNavItems(item_ids);

            for (let item of nav_items) {
                if (!think.isEmpty(item.meta)) {
                    item.path = '';
                    let _meta = item.meta;

                    if (!think.isEmpty(_meta['_menu_item_type'])) {

                        switch(_meta['_menu_item_type']) {
                            case itemType.taxonomy:
                                //
                                item.path = _meta['_menu_item_object'] + "/" + _meta['_menu_item_object_slug'];
                                break;
                            case itemType.post_type:
                                //
                                switch(_meta['_menu_item_object']){
                                    case objectType.page:
                                        if (!think.isEmpty(_meta['_menu_item_url'])) {
                                            item.path = _meta['_menu_item_url'];

                                        } else {
                                            item.path = _meta['_menu_item_object'] + "/" + _meta['_menu_item_object_id'];

                                        }

                                        break;
                                }
                                break;

                            default:
                                //
                                item.path = _meta['_menu_item_url'];
                                break;
                        }

                    }
                }

                // }
                navitems.push(item)
            }
        }


        return navitems;
    }
}