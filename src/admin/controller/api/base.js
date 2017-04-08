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
/*    async __before(){
        let userInfo = await this.session('userInfo') || {};
        if(think.isEmpty(userInfo)){
            return this.fail('USER_NOT_LOGIN');
        }
        this.userInfo = userInfo;
        let type = userInfo.type | 0;
        //not admin
        if(type !== 1){
            let action = this.http.action;
            if(action === 'get'){
                return;
            }
            let name = this.http.controller + '/' + this.http.action;
            if(this.allowList.indexOf(name) > -1){
                return;
            }
            return this.fail('USER_NO_PERMISSION');
        }
    }*/


    async __before() {
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

    }

}