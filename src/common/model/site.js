'use strict';
/**
 * model
 */
export default class extends think.model.base {

    async getSites(){

        let _sites = await think.cache("sites");

        return _sites;

    }

    // async get(domain){
    //     let _sites = await this.sites();
    //
    // }
    /**
     * 缓存网站配置
     * @returns {*}
     */
    async get(){
        // let value = await think.cache("sites", () => {
            return await this.lists();
        // }, {timeout: 365 * 24 * 3600});

        // return value;
    }

    /**
     * 获取网站配置
     * @returns {{}}
     */
    async lists (){
        let map = {
        }
        // map.status = 1;
        let list = await this.where(map).field(["id", "domain"]).select();
        let obj = {};
        list.forEach(v => {
            obj[v.domain] = v.id;
        });

        // console.log(JSON.stringify(obj))
        // let obj = {}
        // list.forEach(v =>{
            // if(v.value.search(/\r\n/ig)>-1 && v.type !=2){
            //     v.value=v.value.split("\r\n");
            //     let obj ={}
            //     v.value.forEach(n =>{
            //         n=n.split(":");
            //         obj[n[0]]=n[1];
            //     })
            //
            //     v.value = obj;
            // }
            // obj[v.name]=v.value;
        // });

        return obj;
    }
}
