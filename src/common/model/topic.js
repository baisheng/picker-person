'use strict';
/**
 * model
 */
export default class extends think.model.base {

    /**
     * 获取分类详细信息
     * @param  {milit} id 分类ID或者标识
     * @param  {string} field 查询字段
     * @return {array} 分类信息
     */
    async info(id, field) {
        field = think.isEmpty(field) || '';
        let map = {};
        if (think.isNumberString(id)) {
            map.id = id;
        } else {
            map.name = id;
        }
        return await this.field(field).where(map).find();
    }

    /**
     * 获取分类树，指定分类则返回指定分类及其子分类，不指定则返回所有分类树
     *
     */
    async gettree(id, field, where = {}) {
        id = id || 0, field = field || true;
        /*获取当前分类信息*/

        // let info;
        // if(id){
        // console.log(id);
        // let ids = id;
        // info = await this.info(Number.parseInt(id));
        // console.log(info);
        // let id   = info.id;
        // }

        //获取所有分类
        let map = think.extend({"status": {">": -1}}, where)
        let list = await this.field(field).where(map).order('sort ASC').select();

        for (let v of list) {
            if (!think.isEmpty(v.name)) {
                v.url = `/${v.name}`
            } else {
                v.url = `/${v.id}`
            }
        }

        //console.log(list);
        list = get_children(list, id);
        let info = list;

        return info;
    }

    /**
     * 根据号ID获取分类话题
     * @param conter_id
     */
    async getByTeamId(team_id, map={}) {

        let list = await think.cache("topic" + team_id, () => {
            return this.getColumnByTeamId(team_id);
        }, {timeout: 365 * 24 * 3600});

        if (think.isEmpty(map)) {
            return list;

        } else {
            return think._.filter(list, map);
        }
        // TODO: 获取子话题分类 @baisheng 20170105
        // list = get_children(list, conter_id);
        // return list
    }

    async getColumnByTeamId(team_id) {
        let lists = await this.where({team_id: team_id, status: 1}).order('pid,sort').select();
        for (let v of lists) {
            if (!think.isEmpty(v.title)) {
                v.url = `/${v.title}`
            } else {
                v.url = `/${v.id}`
            }
        }
        return lists;
    }

    /**
     * 获取专辑信息并缓存分类
     * @param  integer id    分类ID
     * @param  string  field 要获取的字段名
     * @return string         分类信息
     */
    async get_topic(id, field) {
        field = field || null;

        let list = await think.cache("sys_topic_list", () => {
            return this.getallcate();
        }, {timeout: 365 * 24 * 3600});
        /* 非法分类ID */
        if (think.isEmpty(id) || !think.isNumberString(id)) {
            return list;
        } else {
            if (think.isEmpty(list) || 1 != list[id].status) {//不存在分类，或分类被禁用
                return '';
            }
            //// console.log(list);
            // console.log(list[id]);
            //console.log(think.isNumber(field));
            return think.isEmpty(field) ? list[id] : list[id][field];
        }
    }

    async getallcate() {
        let lists = {}
        let cate = await this.select()
        for (let v of cate) {
            if (!think.isEmpty(v.name)) {
                v.url = `/${v.name}`
            } else {
                v.url = `/${v.id}`
            }
            lists[v.id] = v
        }
        return lists;
    }

    /**
     * 获取参数的所有父级分类
     * @param int id 分类id
     * @param true true 带url
     * @return array 参数分类和父类的信息集合
     * @author
     */
    async get_parent_category(id, url) {
        let breadcrumb = []
        while (id != 0) {
            let nav = await this.where({'id': id, 'status': 1}).field("id,title,pid,allow_publish,name,mold").find();
            if (url) {
                if (!think.isEmpty(nav.name)) {
                    nav.url = `/${nav.name}`
                } else {
                    nav.url = `/${nav.id}`
                }

            }
            breadcrumb.push(nav);
            id = nav.pid;

        }
        return breadcrumb.reverse()
    }

    async get_sub_category(id) {
        let cat = await this.select();
        let data = sub_cate(cat, id);
        let arr = [];
        for (let v of data) {
            if (think.isString(v)) {
                for (let val of v.split(",")) {
                    arr.push(Number(val));
                }
            } else {
                arr.push(v);
            }
        }

        return arr;
    }

    /**
     * 验证分类是否允许发布内容
     * @param id 分类id
     * @returns {boolean} true-允许发布内容，false-不允许发布内容
     */
    async check_category(id) {
        if (think.isObject(id)) {
            id.type = !think.isEmpty(id.type) ? id.type : 2;
            let type = await this.get_category(id.category_id, 'type');
            type = type.split(",");
            return in_array(id.type, type);
        } else {
            let publish = await this.get_category(id, 'allow_publish');
            return publish ? true : false;
        }
    }

    /**
     * 获取当前分类的文档类型
     * @param id
     * @returns {*}文档类型对象
     */
    async get_type_bycate(id) {
        id = id || null;
        if (think.isEmpty(id)) {
            return false
        }
        let type_list = think.config("document_model_type");
        let model_type = await this.where({id: id}).getField("type", 1);

        model_type = model_type[0].split(",");

        for (let key in type_list) {
            if (!in_array(key, model_type)) {
                delete type_list[key];
            }
        }
        return type_list;
    }

    async _add(data) {
        let res;
        data.create_time = new Date().getTime();
        data.model = think.isArray(data.model) ? data.model.join(",") : data.model;
        // 内容辑的类型
        data.model_sub = think.isArray(data.model_sub) ? data.model_sub.join(",") : data.model_sub;
        // TODO: 内容辑可以添加的文档类别
        data.type = "1,2,3";
        data.type = think.isArray(data.type) ? data.type.join(",") : data.model;
        // data.member = think.isArray(data.member) ? data.member.join(",") : data.member;

        res = await this.add(data);
        // 如果添加返回正确，添加团队成员信息
        if (res){
            let topic_member = [];
            let members = data.member;
            if (!think.isEmpty(members)){
                for (let m of members){
                    let obj = {};
                    obj.team_id = data.team_id;
                    obj.topic_id = res;
                    obj.member_id = m;

                    topic_member.push(obj);
                }

                await this.model("topic_member").addMany(topic_member);
            }

        }

        return res;
    }

    async _update(data) {
        data.update_time = new Date().getTime();
        data.model = think.isArray(data.model) ? data.model.join(",") : data.model;
        data.model_sub = think.isArray(data.model_sub) ? data.model_sub.join(",") : data.model_sub;
        data.type = think.isArray(data.type) ? data.type.join(",") : "";
        let res = await this.update(data);
        if (res) {
            //构造权限
            let priv = []
            if (!think.isEmpty(data.priv_roleid)) {
                if (think.isArray(data.priv_roleid)) {
                    //构造 角色权限
                    for (let v of data.priv_roleid) {
                        let arr = v.split(",")
                        let obj = {};
                        obj.catid = data.id;
                        obj.siteid = 1;
                        obj.roleid = arr[1];
                        obj.action = arr[0];
                        obj.is_admin = 1;
                        priv.push(obj)
                    }
                } else {
                    let arr = (data.priv_roleid).split(",")
                    priv.push({catid: data.id, siteid: 1, roleid: arr[1], action: arr[0], is_admin: 1})
                }

            }
            if (!think.isEmpty(data.priv_groupid)) {
                //构造 用户组权限
                if (think.isArray(data.priv_groupid)) {
                    for (let v of data.priv_groupid) {
                        let arr = v.split(",")
                        let obj = {};
                        obj.catid = data.id;
                        obj.siteid = 1;
                        obj.roleid = arr[1];
                        obj.action = arr[0];
                        obj.is_admin = 0;
                        priv.push(obj)
                    }
                } else {
                    let arr = (data.priv_groupid).split(",")
                    priv.push({catid: data.id, siteid: 1, roleid: arr[1], action: arr[0], is_admin: 0})
                }

            }
            await this.model("category_priv").delete({where: {catid: data.id}});
            if (!think.isEmpty(priv)) {
                await this.model("category_priv").addMany(priv)
            }
        }

        return res;
    }

    /**
     *
     * @param data
     * @returns {*}
     */
    async save(data) {
        if (think.isEmpty(data)) {
            return false;
        }
        let res;

        /* 添加或更新数据 */
        if (think.isEmpty(data.id)) {
            res = await this._add(data);

        } else {
            res = await this._update(data);
        }
        //清除缓存
        // think.cache("sys_topic_list", null); //栏目缓存
        think.cache("all_topic", null); //栏目缓存
        // think.cache("all_priv", null);//栏目权限缓存
        return res;

    }

    /**
     * 获取全部内容辑
     */
    async get_all_topic(map = {}) {
        //let list ="22";

        let list = await think.cache("all_topic", () => {
            return this.get_colunm();
        }, {timeout: 365 * 24 * 3600});

        if (think.isEmpty(map)) {
            return list;

        } else {
            return think._.filter(list, map);
        }

    }

    async get_colunm() {
        let lists = await this.where({status: 1}).field('id,title as name,name as title, model, model_sub, pid,allow_publish,isapp,mold,description,display, cover').order('pid,sort').select();
        for (let v of lists) {
            if (!think.isEmpty(v.title)) {
                v.url = `/${v.title}`
            } else {
                v.url = `/${v.id}`
            }
        }
        // console.log(lists);
        return lists;
    }

    //获取栏目分组
    async get_groups(cid) {
        let group;
        let groups = await this.where({id: cid}).getField("groups", true);
        if (!think.isEmpty(groups)) {
            let cate = await get_cate(cid);
            if (groups.search(/\r\n/ig) > -1) {
                groups = groups.split("\r\n");
                let arr = []
                groups.forEach(n => {
                    let obj = {}
                    n = n.split(":");
                    obj.url = cate.url + "/" + n[0]
                    obj.name = n[1];
                    obj.id = Number(n[0]);
                    arr.push(obj);
                })

                group = arr;
            }
        }
        return group;
    }

}