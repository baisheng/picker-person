'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {

        let _option = await this.model('option');

        let data = await _option.getOptions();

        let $option = await think.cache("$option");
        let $upload = JSON.parse($option.upload);

        // let $upload = data.upload;

        // console.log($upload.option.ak)
        // let $upload = await _option.getKey('upload')
        // if ($upload.type === "qiniu"){
        //     let qiniu = think.service("qiniu");
        //     let instance = new qiniu();

            // let upload = await instance.upload(filepath, basename);
            // instance.echo();
            // let uppic = await instance.uploadpic(filepath, basename);
        // }
        // console.log($upload.option.ak)
        return this.json($upload);


    }



}