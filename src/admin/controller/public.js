// +----------------------------------------------------------------------
// | CmsWing [ 网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2015 http://www.cmswing.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: arterli <arterli@qq.com>
// +----------------------------------------------------------------------
'use strict';

export default class extends think.controller.base {
    async  __before() {
        this.setup = await this.model("setup").getset();
    }

    /**
     * public action
     * @return {Promise} []
     */
    async signinAction() {
        //用户登录
        let is_login = await this.islogin();
        if (this.isPost()) {
            //验证码
            if (1 == this.setup.GEETEST_IS_ADMLOGIN) {
                let Geetest = think.service("geetest"); //加载 commoon 模块下的 geetset service
                let geetest = new Geetest();
                let res = await geetest.validate(this.post());
                if ("success" != res.status) {
                    this.http.error = new Error("验证码不正确");
                    return think.statusAction(702, this.http);
                }
            }


            let username = this.post('username');
            let password = this.post('password');
            password = encryptPassword(password);
            let res = await this.model("member").signin(username, password, this.ip(), 2, 1);
            if (0 < res.uid) {
                //记录用户登录行为
                await this.model("action").log("user_login", "member", res.uid, res.uid, this.ip(), this.http.url);
                await this.session('userInfo', res);
                return this.redirect('/admin/dashboard');
            } else { //登录失败
                let fail;
                switch (res) {
                    case -1:
                        fail = '用户不存在或被禁用';
                        break; //系统级别禁用
                    case -2:
                        fail = '密码错误';
                        break;
                    case -3:
                        fail = '您无权登陆后台！';
                        break;
                    default:
                        fail = '未知错误';  // 0-接口参数错误（调试阶段使用）
                }
                this.http.error = new Error(fail);
                return think.statusAction(702, this.http);
            }

        } else {
            if (is_login) {
                return this.redirect('/admin/dashboard');
            } else {
                return this.display();
            }
        }
    }
    /**
     * 注册页面
     */
    async signupAction() {
        if(this.isPost()){
            let data = this.post();
            console.log(data);

            //验证
            let res;

            if (think.isEmpty(data.invite)){
                return this.fail("邀请码不存在")
            }
            if(think.isEmpty(data.email)){
                return this.fail("电子邮箱不能为空字符！")
            }else{
                res = await this.model("member").where({email:data.email}).find();
                if(!think.isEmpty(res)){
                    return this.fail("电子邮箱已存在，请重新填写！")
                }
                data.username = data.email.split("@")[0];
            }

            if(think.isEmpty(data.password)){
                return this.fail("密码不能为空字符！")
            }

            // if(data.clause != "on"){
            //     return this.fail("必须要同意,网站服务条款")
            // }

            data.status = 1;
            data.is_admin = 1;
            data.reg_time = new Date().valueOf();
            data.reg_ip = _ip2int(this.ip());
            data.password = encryptPassword(data.password);

            let reg = await this.model("member").add(data);
            await this.model("member").autoLogin({id:reg}, this.ip());//更新用户登录信息，自动登陆

            let userInfo = {
                'uid':reg,
                'username': data.username,
                'last_login_time': data.reg_time,
            };

            await this.session('userInfo', userInfo);
            return this.success({name:"注册成功,登录中!",url:"/admin/dashboard"});
        }else {
            this.meta_title = "用户注册";
            return this.display();
        }

    }

    async logoutAction() {
        //退出登录
        let is_login = await this.islogin();
        if (is_login) {
            await this.session('userInfo', null);
            return this.redirect('/admin/public/signin');
        } else {
            return this.redirect('/admin/public/signin');
        }
    }

    async islogin() {
        let user = await this.session('userInfo');
        let res = think.isEmpty(user) ? false : true;
        return res;
    }

    verAction() {
        this.end("df11df")
    }

    //验证菜单标示是否重复
    async categorynameAction() {
        let name = this.get('name');
        let pid = this.get('pid');
        let res = await this.model("category").where({name: name, pid: pid}).find();
        if (!think.isEmpty(res)) {
            return this.json({"message": "your custom message"});
        } else {
            return this.json(1);
        }

    }

    //选择分类
    async selectcateAction() {
        this.meta_title = "专栏选择"
        return this.display();
    }

    //获取分类
    async getmenuAction() {
        let cate = await this.model("category").get_all_category();
        //console.log(cate);
        //生成菜单

        for (let val of cate) {
            let id = think.isEmpty(val.title) ? val.id : val.title;
            val.url = `/${id}`
        }
        //think.log(cate);
        return this.json(arr_to_tree(cate, 0))
    }

//验证码
    async geetestAction() {
        let Geetest = think.service("geetest"); //加载 commoon 模块下的 geetset service
        let geetest = new Geetest();
        if (this.isPost()) {
            let post = this.post();
            //console.log(post);
            let res = await geetest.validate(post);
            return this.json(res);
        } else {
            let res = await geetest.register(this.get('type'));
            //console.log(res);
            return this.json(res);
        }


    }

    async validate(data) {
        let deferred = think.defer();
        geetest.validate({

            challenge: data.geetest_challenge,
            validate: data.geetest_validate,
            seccode: data.geetest_seccode

        }, function (err, result) {
            console.log(result);
            var data = {status: "success"};

            if (err || !result) {
                console.log(err);
                data.status = "fail";
            }

            deferred.resolve(data);
        });
        return deferred.promise;
    }

    /**
     * 关键词自动完成
     */
    async getkeywordAction() {
        let term = this.get("term");
        let data = await this.model("keyword").where({keyname: ["LIKE", `%${term}%`]}).field("id,keyname as label,keyname as value").select()
        return this.json(data);
    }
}