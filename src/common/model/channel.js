'use strict';
/**
 * model
 */
export default class extends think.model.base {
    /**
     * 获取参数的所有父级导航
     * @param int id 导航id
     * @return array 参数导航和导航的信息集合
     * @author
     */
    async get_parent_channel(id){
        let breadcrumb = []
        while (id!=0)
        {
            let nav = await this.where({'id':id,'status':1}).find();
            breadcrumb.push(nav);
            id = nav.pid;

        }
        return breadcrumb.reverse()
    }
    /**
     * 缓存频道信息
     * @returns {Promise}
     */
    async get_channel_cache(){
        let channel=await think.cache('get_channel_cache',()=>{
            return this.get_channel(0);
        }, {timeout: 365 * 24 * 3600});
        return channel;
    }

    // async get_application_channel
    /**
     * 获取分类树，指定分类则返回指定分类及其子分类，不指定则返回所有分类树
     *
     */
    async get_channel(id){
        id = id||0;
        /*获取当前分类信息*/

        //if(id){
        //    console.log(id);
        //    let ids = id;
        //    let info = await this.info(ids);
        //    console.log(info);
        //    let id   = info.id;
        //}

        //获取所有分类

        let map = {"status":{">":-1}}
        let list = await this.where(map).order('sort ASC').select();
        //console.log(list);
        //list = get_children(list,id);
        for (let v of list){
            let name =0;
            if(v.url.indexOf("http://")==-1 || v.url.indexOf("https://")==-1){
                if(!think.isEmpty(v.url)&& think.isString(v.url)){
                    name = v.url.split("/")[1];
                    if(!think.isNumberString(name)&& !think.isEmpty(name)){
                        name = await think.model('category',think.config("db")).where({name:name}).getField("id",true);
                    }
                }
            }
            if(name != 0 && !think.isEmpty(name)){
                let subcate = await think.model('category',think.config("db")).get_sub_category(name);
                subcate.push(name);
                v.on = subcate;
            }


        }
        list = get_children(list,id);
        let info = list;

        return info;
    }

    /**
     * 更新或者编辑信息
     * @param data
     * @returns {*}
     */
    async updates(data){
        if(think.isEmpty(data)){
            return false;
        }
        let res;
        let obj;
        /* 添加或更新数据 */
        if(think.isEmpty(data.id)){
            data.create_time=new Date().getTime();
            res = this.add(data);
            if(res){
                obj={id:res,err:1};//添加成功
            }else {
                obj={err:2};//新增失败
            }
        }else{
            data.update_time=new Date().getTime();
            res = this.update(data);
            if(res){
                obj={id:res,err:3};//更新成功
            }else {
                obj = {err:4};//更新失败
            }
        }
        think.cache("get_channel_cache",null);//更新频道缓存信息
        return obj;

    }
}