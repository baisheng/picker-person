'use strict';

import fs from 'fs';
import path from 'path';

const stats = think.promisify(fs.stat);

/**
 * error controller
 */
export default class extends think.controller.base {
    /**
     * display error page
     * @param  {Number} status []
     * @return {Promise}        []
     */
    async displayError(status) {

        //hide error message on production env

        if (think.env === 'production') {
            if (!in_array(status, [700, 701, 702])) {
                this.http.error = null;
            }
        }

        let errorConfig = this.config('error');
        let message = this.http.error && this.http.error.message || '';
        if (this.isJsonp()) {
            return this.jsonp({
                [errorConfig.key]: status,
                [errorConfig.msg]: message
            })
        } else if (this.isAjax()) {
            return this.fail(status, message);
        }

        let module = 'common';
        if (think.mode !== think.mode_module) {
            module = this.config('default_module');
        }
        let file = `${module}/error/${status}.html`;

/*
        let {theme} = await this.model('options').getOptions();
        let themeErrorFilePath = path.join(think.RESOURCE_PATH, 'themes', theme, 'error', `${status}.html`);
        try {
            await stats(themeErrorFilePath);
            file = themeErrorFilePath;
        } catch (e) {
            console.log(e);
        }
*/


        let options = this.config('tpl');
        options = think.extend({}, options, {type: 'base', file_depr: '_'});
        // return this.display(file, options);
        // this.fetch(file, {}, options).then(content => {
        //     content = content.replace('ERROR_MESSAGE', message);
        //     this.type(options.content_type);
        //     this.end(content);
        // });

        this.fetch(file, {}, options).then(content => {
            content = content.replace('ERROR_MESSAGE', message);
            this.type(options.content_type);
            this.end(content);
        });

    }

    /**
     * Bad Request
     * @return {Promise} []
     */
    async _400Action() {
        return this.displayError(400);
    }

    /**
     * Forbidden
     * @return {Promise} []
     */
    async _403Action() {
        return this.displayError(403);
    }

    /**
     * Not Found
     * @return {Promise}      []
     */
    async _404Action() {
        //管理端
        if(this.http.module === 'admin' && !this.isAjax()){
            let controller = this.controller('admin/base');
            this.status(200);
            return controller.invoke('__call');
        }
        return await this.displayError(404);
    }

    /**
     * Internal Server Error
     * @return {Promise}      []
     */
    async _500Action() {
        return this.displayError(500);
    }

    /**
     * Service Unavailable
     * @return {Promise}      []
     */
    async _503Action() {
        return this.displayError(503);
    }

    //未登录
    async _700Action() {
        return this.displayError(700);
    }

    // 正确跳转对应的模板文件
    async _701Action() {
        return this.displayError(701);
    }

    // 错误跳转对应的模板文件
    async _702Action() {
        return this.displayError(702);
    }
}