'use strict';

import Base from './base.js';

export default class extends Base {

    init(http){
        super.init(http);
        let theme = "material";
        // "/resume_themes/material"

        this.RESUME_THEME_VIEW_PATH = `${think.ROOT_PATH}${think.sep}www${think.sep}resume_themes${think.sep}${theme}${think.sep}`;
    }
    /**
     * index action
     * @return {Promise} []
     */
    async _indexAction() {
        let default_index = this.options.site.default_index;

        let resumeModel = this.model('posts');

        if (!think.isEmpty(default_index)){
            let data = await resumeModel.where({id: default_index}).find();
            // 处理 meta 信息
            data = await this._format(data);


            if (!think.isEmpty(data)) {

                let jsonResume = JSON.parse(data.content_json).resume;
                this.assign('resume', jsonResume);

                // console.log(JSON.stringify(data.meta))
                this.assign('_section', JSON.parse(data.meta._resume_section));
            }

        }
        return this.display(this.RESUME_THEME_VIEW_PATH + 'index' + '.html');

    }

    async _format(post){
        if (post.metas.length > 0) {
            post.meta = {};

            for (let meta of post.metas) {

                // console.log(meta.meta_key + ":" + meta.meta_value);
                post.meta[meta.meta_key] = meta.meta_value;
            }
        }
        delete post.metas;

        return post;
    }

    async testAction(){

        let id = this.get('id');
        // module.exports = think.model({
        //     tablePrefix: '', //直接通过属性来设置表前缀和表名
        //     tableName: 'picker_22_posts,',
        //     init: function(){
        //         this.super('init', arguments);
        //     }
        // })

        // let resume = think.model({
        //     tablePrefix: 'picker_22_', //直接通过属性来设置表前缀和表名
        //     tableName: 'posts',
        //     init: function(){
        //         this.super('init', arguments);
        //     }
        // })
        // let resumeModel = this.model('22_posts');
        // let data = await resumeModel.where({id: 1}).find();

        let data = await this.model('posts',{uid:id}).getList(id);
        return this.json(data);

    }


    /**
     * install
     * @return {[type]} [description]
     */
    async newAction(){

        let errors = this.assign('errors');
        if(!think.isEmpty(errors)){
            this.assign('message', errors[Object.keys(errors)[0]]);
            return this.display();
        }
    let data = {};
        data.db_host = "127.0.0.1";
        data.db_port = "3308"
        data.db_name = 'picker_resume';
        data.db_account = 'root';
        data.db_password = 'abcd1234';
        data.db_table_prefix = 'picker_1_'
        // let data = this.post();
        let dbInfo = {
            host: data.db_host,
            port: data.db_port,
            database: data.db_name,
            user: data.db_account,
            password: data.db_password,
            prefix: data.db_table_prefix
        }
        data.username = "root";
        data.password = "abcd1234";

        let account = {
            username: data.username,
            password: data.password
        }
        let InstallService = this.service('init');

        let instance = new InstallService(dbInfo, account, this.ip());
        let message = 'success';
        await instance.run().catch(err => {
            message = err;
        });


        return this.json(message);

        // this.assign('message', message);
        // this.assign('data', data);
        // this.display();
    }

    /**
     * install
     * @return {[type]} [description]
     */
    async installAction(){
        if(this.isGet()){
            if(firekylin.isInstalled){
                return this.redirect('/');
            }
            return this.display();
        }
        if(firekylin.isInstalled){
            return this.fail('SYSTERM_INSTALLED');
        }

        let errors = this.assign('errors');
        if(!think.isEmpty(errors)){
            this.assign('message', errors[Object.keys(errors)[0]]);
            return this.display();
        }

        let data = this.post();
        let dbInfo = {
            host: data.db_host,
            port: data.db_port,
            database: data.db_name,
            user: data.db_account,
            password: data.db_password,
            prefix: data.db_table_prefix
        }
        let account = {
            username: data.username,
            password: data.password
        }
        let InstallService = this.service('install');
        let instance = new InstallService(dbInfo, account, this.ip());
        let message = 'success';
        await instance.run().catch(err => {
            message = err;
        });
        this.assign('message', message);
        this.assign('data', data);
        this.display();
    }
}