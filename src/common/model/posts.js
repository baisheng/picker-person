'use strict';

import Base from './base';
/**
 * model
 */
export default class extends Base {

    /**
     * init
     *
     * @param args
     */
    init(...args) {
        super.init(...args);

        this.relation = {
            metas: {
                type: think.model.HAS_MANY,
                model: 'postmeta',
                fKey: 'post_id',
                field: "post_id,meta_key,meta_value",
            }
        }


    }

    async getList(id) {
        return this.select();
        // return this.table('picker_'+`${id}`+'_posts', true).select();
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
        // 1 添加内容数据
        let _contents = this.model("posts");
        let _contentId = await _contents.add({
            author: data.author,
            type: data.type,
            status: data.status,
            password: data.password,
            title: data.title,
            slug: data.slug,
            excerpt: data.excerpt,
            markdown_content: data.markdown,
            content: data.content,
            allow_comment: data.allow_comment,
            create_time: data.create_time,
            update_time: data.update_time,
            options: data.options
        });
        // 2 添加内容与 term 分类之间的关联

        // let _terms = this.model("terms");
        // let _term_taxonomy = this.model("term_taxonomy");
        //
        // let _termId = await _terms.add({
        //     name: data.name,
        //     slug: data.slug,
        //     group: data.group
        // });
        //
        // if (!think.isEmpty(_termId)) {
        //     let _taxonomyId = await _term_taxonomy.add({
        //         term_id: _termId,
        //         taxonomy: data.taxonomy,
        //         parent: data.parent
        //     });
        //
        //     return _taxonomyId;
        // }

        return 0;
    }

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
        let where = {};
        where['tt.taxonomy'] = taxonomy;
        let _terms = this.model("terms");

        let result = await _terms.join({
            table: "term_taxonomy",
            join: "inner",
            as: "tt",
            on: ["id", "term_id"]

        }).where(where).select();

        return result;
    }


    /**
     * 获取导航菜单内容
     * @returns {Promise.<void>}
     */
    async getNavs() {
        let where = {
            type: 'nav_menu_item'
        }

        let result = await this.where(where).select();

        for (let item of result) {
            item.meta = {};
            if (item.metas.length > 0) {
                for (let meta of item.metas) {
                    // console.log(meta.meta_key + ":" + meta.meta_value);
                    item.meta[meta.meta_key] = meta.meta_value;
                }
            }
            delete item.metas;
            // console.log(JSON.stringify(item));

        }

        return result;
    }

    async getNavItems(ids) {
        // let ret = await think.cache("_nav_items", async() => {
        let _fields = [];
        _fields.push('id');
        // _fields.push('author');
        _fields.push('status');
        // _fields.push('type');
        _fields.push('title');
        _fields.push('name');
        // _fields.push('content');
        // fields.push('excerpt');
        // _fields.push('date');
        // _fields.push('modified');
        // _fields.push('parent');
        let query = {
            id: ["IN", ids],
            status: ["NOT IN", 'trash']
        }
        let items = await this.where(query).field(_fields.join(",")).select();
        let nav_items = [];

        for (let item of items) {

            item.meta = {};
            if (item.metas.length > 0) {
                for (let meta of item.metas) {
                    // console.log(meta.meta_key + ":" + meta.meta_value);
                    item.meta[meta.meta_key] = meta.meta_value;
                }
            }
            delete item.metas;

            nav_items.push(item);
        }

        // console.log(JSON.stringify(nav_items) + "___333")
        return nav_items;

        // }, this.cacheOptions);

        // return ret;
    }

    async list(ids) {
        let result = await this.where({id: ["IN", ids]}).order('id DESC, modified DESC').select();

        // let _items = [];
        return await this._format_Meta(result);
        // for (let item of result) {

        // let post = await this.formatMeta(item);
        // item.meta = {};
        // if (item.metas.length > 0) {
        //     for (let meta of item.metas) {
        //         console.log(meta.meta_key + ":" + meta.meta_value);
        // item.meta[meta.meta_key] = meta.meta_value;
        // }
        // }
        // delete item.metas;

        // _items.push(post);
        // }

        // return _items;
    }

    async snippets(page_index, meta_type, _query) {
        let _meta_type = meta_type;
        let query = {};
        if (!think.isEmpty(_query)) {
            query = _query;

        } else {
            query.status = ['NOT IN', 'trash'];
        }
        query.type = "snippet";

        let _fields = [];
        _fields.push('id');
        _fields.push('author');
        _fields.push('status');
        _fields.push('type');
        _fields.push('title');
        _fields.push('name');
        _fields.push('content');
        // fields.push('excerpt');
        _fields.push('date');
        _fields.push('modified');
        _fields.push('parent');


        let _meta = this.model('postmeta');

        if (!think.isEmpty(_meta_type)) {

            let type_posts = await _meta.where({
                "meta_key": '_snippet_type',
                'meta_value': _meta_type

            }).field('post_id').page(page_index, 10).countSelect();

            if (!think.isEmpty(type_posts.data) && type_posts.data.length > 0) {

                let ids = [];
                for (let obj of type_posts.data) {
                    ids.push(obj.post_id);
                }
                delete type_posts.data;
                // post_ids.ids = ids;
                query.id = ['IN', ids];

                type_posts.data = await this.where(query).field(_fields.join(",")).order('date DESC').select();

                type_posts.data = await this._formatMeta(type_posts.data);
            }

            return type_posts;

        }

        let posts = await this.where(query).field(_fields.join(",")).order('date DESC').page(page_index, 10).countSelect();

        posts.data = await this._format_snippet_meta(posts.data);

        return posts;
    }


    async saveSnippet(data) {
        let rows = await this.where({id: data.id}).update(data);
        if (rows > 0) {
            let _meta = this.model('postmeta');
            let _snippet_metas = await _meta.where({post_id: data.id, meta_key: data['_snippet_type']}).select();


            // let _terms = [];
            // taxonomies.forEach((item) => {
            //     _terms.push(think._.filter(all_terms, {id: item.term_id}));
            // });
            //
            // return think._.flattenDeep(_terms);

            // let meta_key = think._.find(_snippet_metas, {""})
            // let inser_id = await _meta.add({
            //     post_id: post_id,
            //     meta_key: meta_key,
            //     meta_value: JSON.stringify(meta_value)
            // });
        }
    }

    async findPostSnippets(post_id){
        let query = {};
        // if (!think.isEmpty(_query)) {
        //     query = _query;
        //
        // } else {
            query.status = ['NOT IN', 'trash'];
        // }
        query.type = "snippet";
        query.parent = post_id;

        let _fields = [];
        _fields.push('id');
        // _fields.push('author');
        // _fields.push('status');
        // _fields.push('type');
        _fields.push('title');
        // _fields.push('name');
        _fields.push('content');
        // fields.push('excerpt');
        // _fields.push('date');
        // _fields.push('modified');
        _fields.push('parent');

        let _meta = this.model('postmeta');

        // if (!think.isEmpty(_meta_type)) {

            // let type_posts = await _meta.where({
            //     "meta_key": '_snippet_type',
            //     'meta_value': _meta_type
            //
            // }).field('post_id').page(page_index, 10).countSelect();

            // if (!think.isEmpty(type_posts.data) && type_posts.data.length > 0) {
            //
            //     let ids = [];
            //     for (let obj of type_posts.data) {
            //         ids.push(obj.post_id);
            //     }
            //     delete type_posts.data;
            //     post_ids.ids = ids;
                // query.id = ['IN', ids];
                //
                // type_posts.data = await this.where(query).field(_fields.join(",")).order('date DESC').select();
                //
                // type_posts.data = await this._formatMeta(type_posts.data);
            // }
            //
            // return type_posts;

        // }

        let posts = await this.where(query).field(_fields.join(",")).order('date DESC').select();

        posts = await this._formatMeta(posts);

        for (let snippet of posts) {
            if (!think.isEmpty(snippet.meta) && snippet.meta['_snippet_link']) {

                snippet.meta['_snippet_link'] = JSON.parse(snippet.meta['_snippet_link']);
            }
        }

        return posts;
    }

    /**
     * 处理 metas
     *
     * @param post
     * @returns {Promise.<*>}
     */
    async _format_snippet_meta(posts) {
        let _items = [];

        for (let post of posts) {
            post.meta = {};
            if (post.metas.length > 0) {
                for (let meta of post.metas) {
                    // console.log(meta.meta_key + ":" + meta.meta_value);
                    post.meta[meta.meta_key] = JSON.parse(meta.meta_value);
                }
            }
            delete post.metas;
            _items.push(post);
        }
        return _items;
    }

    async _format_Meta(posts) {
        let _items = [];

        for (let post of posts) {
            post.meta = {};
            if (post.metas.length > 0) {
                for (let meta of post.metas) {
                    // console.log(meta.meta_key + ":" + meta.meta_value);
                    post.meta[meta.meta_key] = meta.meta_value;
                }
            }
            delete post.metas;
            _items.push(post);
        }
        return _items;
    }

    async top(size, where = {}) {
        let posts = await this.limit(size).where(where).select();
        return await this._formatMeta(posts);
    }

    async getSnippet(id){
        let post = await this.where({id: id}).find();

        // let _items = [];

        post.meta = {};
        if (post.metas.length > 0) {
            for (let meta of post.metas) {
                // console.log(meta.meta_key + ":" + meta.meta_value);
                post.meta[meta.meta_key] = JSON.parse(meta.meta_value);
            }
        }
        delete post.metas;
        return post;
    }

    async get(id) {
        let post = await this.where({id: id}).find();

        // let _items = [];

        post.meta = {};
        if (post.metas.length > 0) {
            for (let meta of post.metas) {
                // console.log(meta.meta_key + ":" + meta.meta_value);
                post.meta[meta.meta_key] = meta.meta_value;
            }
        }
        delete post.metas;
        // _items.push(post);

        // return _items;

        // return await this._formatMeta(post);

        return post;
    }

    async addPostMeta(post_id, meta_key, meta_value, unique = false) {
        // Make sure meta is added to the post, not a revision.
        // if ( $the_post = wp_is_post_revision($post_id) )
        //     $post_id = $the_post;
        // return add_metadata('post', $post_id, $meta_key, $meta_value, $unique);

        // console.log(JSON.stringify(meta_value));

        let _meta = this.model('postmeta');
        let inser_id = await _meta.add({
            post_id: post_id,
            meta_key: meta_key,
            meta_value: JSON.stringify(meta_value)
        });

    }

    async addMetadata(meta_type, object_id, meta_key, meta_value, unique = false) {
        // if ( ! $meta_type || ! $meta_key || ! is_numeric( $object_id ) ) {
        //     return false;
        // }

        // if (! meta_type || !meta_key || !Number.parseInt(object_id)){ return false; }
        // let meta_model = this.model(meta_type + `meta`);
        //
        // if (!meta_model) return false;


    }

    async deletePostMeta() {
    }

    async updatePostMeta() {
    }

    async getPostMeta() {
    }

    async deletePostMetaByKey() {
    }


    async getPosts(where = {}) {

        let result = await this.where().select();
    }

    /**
     * get where condition
     * @param  {[type]} where [description]
     * @return {[type]}       [description]
     */
    getWhereCondition(where) {
        where = think.extend({}, where, {
            status: 'publish', //公开
            type: 'article', //文章
            // status: 3 //已经发布
        });
        if (!where.date) {
            where.date = {
                '<=': think.datetime()
            };
        }
        return where;
    }

    /**
     * get post archive
     * @return {[type]} [description]
     */
    async getPostArchive() {
        let where = this.getWhereCondition();
        let data = await this.field('id,title,date').order('date DESC').setRelation(false).where(where).select();
        let result = {};
        data.forEach(item => {
            let yearMonth = think.datetime(item.date, 'YYYY-MM');
            if (!(yearMonth in result)) {
                result[yearMonth] = [];
            }
            result[yearMonth].push(item);
        });
        return result;
    }
}