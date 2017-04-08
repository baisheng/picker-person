'use strict';
export default class extends think.controller.base {

    init(http) {
        super.init(http);
    }

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


    async initSnippet() {

        let _terms = this.model('terms');

        let snippet_terms = await _terms.findByTaxonomy('snippet');

        let _items = [];
        snippet_terms.forEach((item) => {
            let _item = {};
            // _item.id = item.id;
            _item.text = item.name;
            _item.slug = think._.replace(item.slug, 'snippet-format-', '');

            if (!think.isEmpty(item.meta['_snippet_icon'])) {
                _item.icon = item.meta['_snippet_icon'];
            }
            if (!think.isEmpty(item.meta['_status']) && item.meta['_status'] === 'active') {
                _items.push(_item);
            }
        });

        // console.log(JSON.stringify(_items))
        this.assign("snippet_terms", JSON.stringify(_items));
    }

    async addMessage(message, style) {
        let index = 0, message_arr = [];

        let messages = await this.session('messages');

        if (!think.isEmpty(messages) && think.isArray(messages)) {
            // index = messages.length + 1;
            message_arr = messages;

        }

        message_arr.push({
            'message': message,
            'class': style
        });

        await this.session('messages', message_arr);
        // let msg = await this.session('messages');

        // console.log(JSON.stringify(msg) + '=======');
        // console.log(JSON.stringify(messages.length) + '-------');
    }

    async infoMsg(message) {
        await this.addMessage(message, 'info');
    }

    async errorMsg(message) {
        await this.addMessage(message, 'error');
    }

    async successMsg(message) {

        await this.addMessage(message, 'success');
    }

    /**
     * call magic method
     * @return {} []
     */
    async __call() {
        if (this.isAjax()) {
            return this.fail('ACTION_NOT_FOUND');
        } else {
            return this.redirect('/admin/login');

        }
        let model = this.model('options');
        let options = await model.getOptions();
        //不显示具体的密钥
        options.two_factor_auth = !!options.two_factor_auth;
        options.analyze_code = escape(options.analyze_code);
        options.comment.name = escape(options.comment.name);
        try {
            options.navigation = JSON.parse(options.navigation);
        } catch (e) {
            options.navigation = [];
        }
        delete options.push_sites; //不显示推送的配置，会有安全问题
        this.assign('options', options);
        return this.display('index/index');
    }

    //跨域设置
    setCorsHeader() {
        this.header("Access-Control-Allow-Origin", this.header("origin") || "*");
        this.header("Access-Control-Allow-Headers", "x-requested-with");
        this.header("Access-Control-Request-Method", "GET,POST,PUT,DELETE");
        this.header("Access-Control-Allow-Credentials", "true");
    }

}