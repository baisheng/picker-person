'use strict';

import Base from './base.js';

export default class extends Base {
// export default class extends think.controller.base {

    /**
     * index action
     * @return {Promise} []
     */

    init(http) {
        super.init(http);
        // this._terms = this.model('terms');
        this.dao = this.model('taxonomy');
        this.tactive = "article";
    }
    async indexAction() {
        let where = {};
        if (this.get("mold")) {
            where.mold = this.get("mold");
        }
        // console.log(where);
        //auto render template file index_index.html
        let tree = await this.db.gettree(0, "id,name,title,sort,pid,allow_publish,status,model,mold,isapp", where);
        //console.log(tree)
        this.assign("active", this.get("mold") || null);
        this.assign("list", tree);
        this.meta_title = "栏目管理";
        return this.display();

    }

    /**
     * 删除分类
     *
     * @returns {Promise.<*>}
     */
    async deletecategoryAction() {
        let cat_id = this.get('id');
        return this.dao.deleteTerm(cat_id, 'category');
    }

    async preDeleteTerm(term, taxonomy) {
        // Update children to point to new parent
        // if is_taxonomy_hierarchical(taxonomy)

    }

    /**
     * 修改分类数据
     *
     * @returns {Promise<PreventPromise>}
     */
    async updateAction() {
        if (this.isPost()) {

            let data = this.post();
            // let exists = await this.dao.termExists(Number.parseInt(data.id));

            // if (exists.length > 0) {

            let rows = await this.dao.update(data);

            if (rows > 0) {
                return this.success("操作成功!  ")

            }

            return this.fail('操作失败或未找到要更新的数据!');

            // }
            //
            // return this.fail('要修改的数据不存在!')

        }
        return this.fail('未提交数据!')

    }

    /**
     * 添加 category 分类
     *
     * @returns {Promise<PreventPromise>}
     */
    async saveAction() {
        if (this.isPost()) {

            let data = this.post();
            let exists = await this.dao.categoryExists(data.name);

            if (exists.length > 0) {
                return this.fail('类别已存在!');
            }

            let insertId = await this.dao.save(data);

            if (insertId > 0) {
                return this.success("添加成功!");

            }

            return this.fail('添加失败!');
        }

        return this.fail('未提交数据!')
    }


    /**
     * 根据分类类别，查询全部分类
     *
     * @param string taxonomy 传入分类类别名称, 如果没有值默认值为 category.
     * @returns {Promise.<void>}
     */
    async listAction() {

        let taxonomy = "category";
        if (!think.isEmpty(this.get('taxonomy'))) {
            taxonomy = this.get('taxonomy');
        }
        let res = await this.dao.getTerms(taxonomy);

        return this.json(res);
    }

    /**
     * 获取分类树
     *
     * @returns {Promise.<void>}
     */
    async treelistAction(){
        let taxonomy = "category";
        if (!think.isEmpty(this.get('taxonomy'))) {
            taxonomy = this.get('taxonomy');
        }
        let res = await this.dao.getTerms(taxonomy);

        res.forEach((item) => {
           item.title = item.name;
           item.key = item.id;
        });

        return this.json(arr_to_tree(res, 0))
    }

    /**
     * 检查 term 是否存在，如果存在返回错误
     *
     * @returns {Promise.<void>}
     */
    async existsAction() {
        let term = this.get('term');
        let taxonomy = 'category';
        if (!think.isEmpty(this.get('taxonomy'))) {
            taxonomy = this.get('taxonomy');
        }
        let result = await this.dao.termExists(term, taxonomy);

        if (result.length > 0) {
            return this.fail('类别已存在');
        }
        return this.success("添加成功!");
    }


}
