'use strict';

import Base from './base.js';
// import * as fs from 'fs';
// import * as path from 'path';
// import sharp from 'sharp';
// import exif from 'exif';

// const _return = [];

export default class extends Base {
// export default class extends think.controller.base {

    /**
     * index action
     * @return {Promise} []
     */

    init(http) {
        super.init(http);
        // this._terms = this.model('terms');
        this.dao = this.model('posts');
        this.tactive = "article";
    }

    async indexAction() {


        return this.display();
    }

    async messagesAction(){
        let data = this.post();
        //是ajax 且请求类型是 POST
        if (this.isAjax()){
            if (data['method'] === 'getMessages'){
                // await this.successMsg("操作成功");
               let messages = await this.session('messages');
                // let messages = ["操作成功！", "删除成功"];
                // console.log(this.getMessage(messages, 'success'))
                //
                // let _msg = this.getMessage(messages, 'success');
                // console.log(_msg);
               if (think.isArray(messages) && messages.length > 0){
                   // let result = await Promise.all(pushes);

                    // think._.lastIndexOf(messages, )

                   // for(let i = 0; i < messages.length; i++){

                   // }
                   let self = this;

                   for (let [index, value] of messages.entries()) {

                        let html = await this.formatMessage(value.message, value.class);
                       // console.log(JSON.stringify(self.formatMessage(value.message, value.class)));
                       return this.json({
                           'html': html,
                           'index': index
                       });

                   }
                  // let msg = await Promise.all( [
                  //     messages.forEach((v, index, arr) => {
                  //      let _msg = {
                  //          'html': this.formatMessage(v.message, v.class),
                  //          'index': index
                  //      }
                  //
                  //      return _msg;
                       // return this.json({
                       //     'html': this.formatMessage(v.message, v.class),
                       //     'index': index
                       // });
                   // })
               // ])


                   // return this.json(msg);
               //
               }
            }

            if (data['method'] === 'deleteMessage'){
                Array.prototype.remove = function(from, to) {
                    var rest = this.slice((to || from) + 1 || this.length);
                    this.length = from < 0 ? this.length + from : from;
                    return this.push.apply(this, rest);
                };


                Array.prototype.remove=function(obj){
                    for(var i =0;i <this.length;i++){
                        var temp = this[i];
                        if(!isNaN(obj)){
                            temp=i;
                        }
                        if(temp == obj){
                            for(var j = i;j <this.length;j++){
                                this[j]=this[j+1];
                            }
                            this.length = this.length-1;
                        }
                    }
                }
                let messages = await this.session('messages');
                let index = data['index'];
                if (think.isArray(messages)) {
                    if (messages.length > 0) {
                        await this.session('messages', messages.remove(index))
                    }
                }
                return this.success();
            }
            return this.json();
        }

        if (this.isAjax('setMessage')){

            return this.json();
        }
    }

    async formatMessage(message, style) {
        let html = `<div class="message ${ style }">`;

        if (think.isArray(message)) {
            if (message.length > 1) {
                html += '<ol>';
                message.forEach((value, index, array) => {
                    html += `<li>${value}</li>`;
                });
                html += '</ol>'

            } else {
                html += message[0];
            }

        } else {
            html += message;
        }

        html += '</div>';

        return html;
    }
}
