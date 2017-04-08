'use strict';
/**
 * base controller
 */
export default class extends think.controller.base {
    /**
     * before magic method
     * @return {} []
     */
    async __before(){
        let _sites = await this.model('site').get()
        this._site_id = _sites[this.http.host];
        // console.log("common __before")

        //get website options
        let model = this.model('options');
        let options = await model.getOptions();
        this.options = options;

        if(!this.isAjax()){
            this.assign('options', options);
            this.assign('lalala', "lalalalal-----")
        }
        // console.log(JSON.stringify(this.options))
    }
}