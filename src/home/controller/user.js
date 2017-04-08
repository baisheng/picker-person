'use strict';

import Base from './base.js';
import speakeasy from 'speakeasy';
// export default class extends think.controller.base {
//
export default class extends Base {

    async activationAction() {
        let key = this.get('key');
        let uid = this.get('uid');
        let user = await this.model('users').where({id: uid}).find();
        if (user.user_activation_key === key) {
            await this.model('users').active(user);
        }
    }

    async echoAction(){
        // let config = think.config("db");
        // let config = think.model('mysql', think.config("db")).config;
        let sites = await this.model('site').getSites();

        // return this.json(config);
        return this.success(sites);
    }
    async createAction() {
        if (this.isPost()) {
            let data = this.post();
            let res = await this.model('users').addUser(data);

            if (res.id > 0) {
                // let res = await think.model('mysql', think.config("db"));
                let config = think.model('mysql', think.config("db")).config;
                config.prefix = `picker_${res.id}_`;

                data.username = "root";
                data.password = "abcd1234";

                let account = {
                    username: data.username,
                    password: data.password
                }


                let InstallService = this.service('init');
                let instance = new InstallService(config, account, this.ip());
                let message = 'success';
                await instance.run().catch(err => {
                    message = err;
                });

                // 1 用户未激活时的应用信息存储在这里。
                let _signups = this.model('signups');

                // 2 用户注册的默认应用
                let _apps = this.model('apps');

                let domain = data.user_login + ".picker.cc";
                let app_id = await _apps.add({
                    domain: domain,
                    registered: new Date().getTime()

                });

                // 3 站点信息
                let _site = this.model('site');
                let site_id = await _site.add({
                    id: app_id,
                    domain: domain
                });


                let _sitemeta = this.model('sitemeta');

                return this.success();

            }
            // console.log(JSON.stringify(insertId));
            // if (insertId > 0){
            //     return this.success();
            // }

            return this.fail('CREATE_ERROR');

        }

        // let data = {
        //     user_login: 'master',
        //     user_pass : 'deadline-123',
        //     user_email: 'master@caixie.org',
        //     display_name: '佰晟',
        //     user_status: 0
        //
        // }

        // console.log(new Date().getTime())
        // console.log(think.datetime())
        // let user = await this.model('users').addUser(data);

        // return this.json(user);

        return this.display();
    }

    /**
     * login
     * @return {} []
     */
    async loginAction() {
        // console.log("user_login");
        let is_login = await this.islogin();

        //二步验证
        // let model = this.model('options');
        // let options = await model.getOptions();
        if (this.isPost()) {

            // if (this.options.two_factor_auth) {
            //     let two_factor_auth = this.post('two_factor_auth');
            //     let verified = speakeasy.totp.verify({
            //         secret: options.two_factor_auth,
            //         encoding: 'base32',
            //         token: two_factor_auth,
            //         window: 2
            //     });
            //     if (!verified) {
            //         return this.fail('TWO_FACTOR_AUTH_ERROR');
            //     }
            // }

            //校验帐号和密码
            let user_login = this.post('user_login');
            let userModel = this.model('users');
            let userInfo = await userModel.where({user_login: user_login}).find();

            if (think.isEmpty(userInfo)) {
                return this.fail('ACCOUNT_ERROR');
            }


            //帐号是否被禁用，且投稿者不允许登录
            if ((userInfo.user_status | 0) !== 1 || userInfo.deleted === 1) {
                return this.fail('ACCOUNT_FORBIDDEN');
            }

            //校验密码
            let password = this.post('user_pass');

            if (!userModel.checkPassword(userInfo, password)) {
                return this.fail('ACCOUNT_ERROR');
            }

            await this.session('userInfo', userInfo);

            return this.success();
        }


        /*

         let data = {
         password : 'deadline-123',
         username: 'baisheng',
         email: 'baisheng@outlook.com',
         display_name: '佰晟',
         type: 1,
         status: 1
         }
         await this.model('users').addUser(data)
         */
        else {
            if (is_login) {
                return this.redirect('/admin');

            } else {
                return this.display();
            }
        }
    }

    /**
     * logout
     * @return {}
     */
    async logoutAction() {
        await this.session('userInfo', '');
        return this.redirect('/admin');
    }

    /**
     * update user password
     */
    async passwordAction() {
        let userInfo = await this.session('userInfo') || {};
        if (think.isEmpty(userInfo)) {
            return this.fail('USER_NOT_LOGIN');
        }

        let rows = await this.model('users').saveUser({
            password: this.post('password'),
            id: userInfo.id
        }, this.ip());

        return this.success(rows);
    }

    async islogin() {
        let user = await this.session('userInfo');
        let res = think.isEmpty(user) ? false : true;
        return res;
    }
}