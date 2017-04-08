'use strict';

import {PasswordHash} from 'phpass';
import Base from './base';
/**
 * model
 */
export default class extends Base {

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

    async getMetadata(meta_type, object_id, meta_key = '') {

        if (think.isEmpty(meta_type) || !think.isNumber(object_id)) {
            return false;
        }
        // meta_cache
        let where = {
            [meta_type+'_id']:object_id
        }


        if (!think.isEmpty(meta_key)){
            where.meta_key = meta_key;
        }
        // console.log(JSON.stringify(where))
        let dao = this.model(meta_type + 'meta');
        let result = await dao.where(where).select();
        // console.log(JSON.parse(result).meta_id);
    }

    async addPostMeta() {
    }

    async deletePostMeta() {
    }

    async updatePostMeta() {
    }

    async getPostMeta() {
    }

    async deletePostMetaByKey() {
    }

}