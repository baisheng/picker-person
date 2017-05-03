/**
 * base rest controller
 */
export default class extends think.controller.rest {
    init(...args){
        super.init(...args);
        this.user = {};
    }
    /**
     * allow list for user
     * @type {Array}
     */
    allowList = ['api/post/put', 'api/post/post', 'api/post/delete', 'api/file/post'];
    /**
     * [constructor description]
     * @param  {[type]} http [description]
     * @return {[type]}      [description]
     */
    constructor(http){
        super(http);
        this._method = 'method';
    }
    /**
     * before
     * @return {} []
     */
    // async __before(){
    //     let userInfo = await this.session('userInfo') || {};
    //     if(think.isEmpty(userInfo)){
    //         return this.fail('USER_NOT_LOGIN');
    //     }
    //     this.userInfo = userInfo;
    //     let type = userInfo.type | 0;
    //     //not admin
    //     if(type !== 1){
    //         let action = this.http.action;
    //         if(action === 'get'){
    //             return;
    //         }
    //         let name = this.http.controller + '/' + this.http.action;
    //         if(this.allowList.indexOf(name) > -1){
    //             return;
    //         }
    //         return this.fail('USER_NO_PERMISSION');
    //     }
    // }


    // async __before() {
        // 登录、注册不验证 token
        // if (this.http.action === 'auth' || this.http.action === 'login'|| this.http.action === 'register') {
        //     return;
        // }
        // // 获取 http-header token
        // let userToken = this.http.header("Authorization");
        //
        // // 调用 tokenservice 中间件
        // let tokenService = think.service("token");
        // let tokenServiceInstance = new tokenService();
        // // 验证 token
        // let verifyTokenResult = await tokenServiceInstance.verifyToken(userToken);
        //
        // // 错误
        // if (verifyTokenResult === "fail"){
        //     this.fail("TOKEN_INVALTD");
        // }
        //
        // // 获取用户信息
        // this.user = verifyTokenResult.userInfo;
        //
        // let newToken = await tokenServiceInstance.createToken({
        //     userInfo: verifyTokenResult.userInfo
        // });

    // }

    /**
     * before
     */
    async __before() {
        // let _sites = await this.model('site').get()

        // this._site_id = _sites[this.http.host];

        // console.log(this.aid + "xxx")
        // this.aid = _sites[think.http.host];

        // this.options = await this.model('options').getOptions();

        // this.option = await this.model('option').getOptions();
        //
        // console.log(this.site.id + "xxxx")

        // let data = await _option.getOptions();
        // let $upload = data.upload;

        // console.log(JSON.stringify(this.options))
        // this.assign("options", this.options);

        // console.log(JSON.stringify(this.options))
        // this.lang = await this.lang();
        // console.log(this.lang )
        let _sites = await this.model('site').get();

        // this._site_id = _sites[this.http.host];
        this.aid = `${_sites[this.http.host] === 1 ? '' : _sites[this.http.host]}`;

        // await this.session("site_id", this._site_id)
        // console.log("common __before")

        //get website options
        let model = this.model('options', {aid: this.aid});
        let options = await model.getOptions();
        this.options = options;

        if (!this.isAjax()) {
            this.assign('options', options);
        }

        let http = this.http;

        // console.log(http.controller + ":" + http.action);

        if (http.controller === 'user' && http.action === 'login' || http.action === 'create') {
            return;
        }
        let userInfo = await this.session('userInfo') || {};

        if (think.isEmpty(userInfo)) {
            if (this.isAjax()) {
                return this.fail('NOT_LOGIN');
            }
            // console.log("NOT_LOGIN");
            return this.redirect('/admin/user/login');
            // return this.redirect("user/login")
        }
        this.userInfo = userInfo;

        this.assign('user_info', userInfo);

        if (!this.isAjax()) {
            this.assign('userInfo', {id: userInfo.id, name: userInfo.name, type: userInfo.type});
        }

        // 初始化 snippet 数据
        // await this.initSnippet();
    }


}