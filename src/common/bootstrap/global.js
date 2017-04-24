/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 *
 * global.fn1 = function(){
 *
 * }
 */

/**
 * ip转数字
 * @param ip
 * @returns {number}
 * @private
 */
/* global _ip2int(ip)*/
global._ip2int = function (ip) {
    var num = 0;
    ip = ip.split(".");
    num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3]);
    num = num >>> 0;
    return num;
}
/**
 * 数字转ip
 * @param num
 * @returns {string|*}
 * @private
 */
/*global _int2ip(num: number) */
global._int2iP = function (num) {
    var str;
    var tt = new Array();
    tt[0] = (num >>> 24) >>> 0;
    tt[1] = ((num << 8) >>> 24) >>> 0;
    tt[2] = (num << 16) >>> 24;
    tt[3] = (num << 24) >>> 24;
    str = String(tt[0]) + "." + String(tt[1]) + "." + String(tt[2]) + "." + String(tt[3]);
    return str;
}


/**
 * 密码加密
 * @param password 加密的密码
 * @param md5encoded true-密码不加密，默认加密
 * @returns {*}
 */
/*global encryptPassword */
global.encryptPassword = function (password, md5encoded) {
    md5encoded = md5encoded || false;
    password = md5encoded ? password : think.md5(password);
    return think.md5(think.md5('picker.cc') + password + think.md5('Caixie'));
}


global.isURL = function (str_url) {
    var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
        + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
        + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
        + "|" // 允许IP和DOMAIN（域名）
        + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
        + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
        + "[a-z]{2,6})" // first level domain- .com or .museum
        + "(:[0-9]{1,4})?" // 端口- :80
        + "((/?)|" // a slash isn't required if there is no file name
        + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
    var re = new RegExp(strRegex);
    //re.test()
    if (re.test(str_url)) {
        return (true);
    } else {
        return (false);
    }
}
/**
 * 返回一个自定义用户函数给出的第一个参数
 *  call_user_func（回调 函数名， [参数]）
 * @param cb  函数名
 * @param params 数组格式传入参数
 */
/* global call_user_func */
global.call_user_func = function (cb, params) {
    let func = eval(cb);
    if (!think.isArray(params)) {
        params = [params];
    }
    return func.apply(cb, params);
}


/**
 *根据uid获取用户昵称
 * @param uid 用户id
 * @returns Promise {*}
 */
/* global get_nickname */
global.get_nickname = async(uid) => {
    //console.log(uid);
    let data = await think.model('member', think.config("db")).cache({
        timeout: 1000,
        type: "file" //使用文件方式缓存
    }).get_nickname(uid)
    return data;
}

global.display_name = async(uid) => {
    let data = await think.model('users', think.config("db")).cache({
        timeout: 1000,
        type: "file" //使用文件方式缓存
    }).displayName(uid)

    return data;
}
//时间格式
/* global time_format */
global.time_format = (time) => {
    return dateformat('Y-m-d H:i:s', time);
}
/* global str_replace()
 * str_replace(条件[]，替换内容[],被替换的内容)
 * @param search
 * @param replace
 * @param subject
 * @param count
 * @returns {*}
 */
/* global str_replace */
global.str_replace = function (search, replace, subject, count) {
    var i = 0, j = 0, temp = '', repl = '', sl = 0, fl = 0,
        f = [].concat(search),
        r = [].concat(replace),
        s = subject,
        ra = r instanceof Array, sa = s instanceof Array;
    s = [].concat(s);
    if (count) {
        this.window[count] = 0;
    }

    for (i = 0, sl = s.length; i < sl; i++) {
        if (s[i] === '') {
            continue;
        }
        for (j = 0, fl = f.length; j < fl; j++) {
            temp = s[i] + '';
            repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
            s[i] = (temp).split(f[j]).join(repl);
            if (count && s[i] !== temp) {
                this.window[count] += (temp.length - s[i].length) / f[j].length;
            }
        }
    }
    return sa ? s : s[0];
}
/**
 * 时间戳格式化 dateformat()
 * @param extra 'Y-m-d H:i:s'
 * @param date  时间戳
 * @return  '2015-12-17 15:39:44'
 */
// /* global dateformat */
// global.dateformat = function (date, extra) {
//     let D = new Date(date);
//     let time = {
//         "Y": D.getFullYear(),
//         'm': D.getMonth() + 1,
//         'd': D.getDate(),
//         'H': D.getHours(),
//         'i': D.getMinutes(),
//         's': D.getSeconds()
//     }
//     let key = extra.split(/\W/);
//     let _date;
//     for (let k of key) {
//         time[k] = time[k] < 10 ? "0" + time[k] : time[k]
//         _date = extra.replace(k, time[k])
//         extra = _date;
//     }
//     return _date;
// }
/**
 * 时间戳格式化 dateformat()
 * @param extra 'Y-m-d H:i:s'
 * @param date  时间戳
 * @return  '2015-12-17 15:39:44'
 */
/* global dateformat */
global.dateformat = function (extra, date) {
    let D = new Date(date);
    let time = {
        "Y": D.getFullYear(),
        'm': D.getMonth() + 1,
        'd': D.getDate(),
        'H': D.getHours(),
        'i': D.getMinutes(),
        's': D.getSeconds()
    }
    let key = extra.split(/\W/);
    let _date;
    for (let k of key) {
        time[k] = time[k] < 10 ? "0" + time[k] : time[k]
        _date = extra.replace(k, time[k])
        extra = _date;
    }
    return _date;
}
/**
 * 数组去重
 * @param arr
 * @returns {Array}
 */
/* global unique */
global.unique = function (arr) {
    // var result = [], hash = {};
    // for (var i = 0, elem; (elem = arr[i]) != null; i++) {
    //     if (!hash[elem]) {
    //         result.push(elem);
    //         hash[elem] = true;
    //     }
    // }
    // return result;
    return Array.from(new Set(arr));
}

global.sub_cate = function (data, pid) {
    var result = [],
        temp;
    var length = data.length;
    for (var i = 0; i < length; i++) {
        if (data[i].pid == pid) {
            //console.log(data[i]);
            result.push(data[i].id);
            temp = sub_cate(data, data[i].id);
            if (temp.length > 0) {
                result.push(temp.join(','));
            }
        }
    }
    return result;
};

/**
 *
 * @param id
 * @param m
 * /0/w/<LongEdge>/h/<ShortEdge>    限定缩略图的长边最多为<LongEdge>，短边最多为<ShortEdge>，进行等比缩放，不裁剪。如果只指定 w 参数则表示限定长边（短边自适应），只指定 h 参数则表示限定短边（长边自适应）。
 * /1/w/<Width>/h/<Height>    限定缩略图的宽最少为<Width>，高最少为<Height>，进行等比缩放，居中裁剪。转后的缩略图通常恰好是 <Width>x<Height> 的大小（有一个边缩放的时候会因为超出矩形框而被裁剪掉多余部分）。如果只指定 w 参数或只指定 h 参数，代表限定为长宽相等的正方图。
 * /2/w/<Width>/h/<Height>    限定缩略图的宽最多为<Width>，高最多为<Height>，进行等比缩放，不裁剪。如果只指定 w 参数则表示限定宽（长自适应），只指定 h 参数则表示限定长（宽自适应）。它和模式0类似，区别只是限定宽和高，不是限定长边和短边。从应用场景来说，模式0适合移动设备上做缩略图，模式2适合PC上做缩略图。
 * /3/w/<Width>/h/<Height>    限定缩略图的宽最少为<Width>，高最少为<Height>，进行等比缩放，不裁剪。如果只指定 w 参数或只指定 h 参数，代表长宽限定为同样的值。你可以理解为模式1是模式3的结果再做居中裁剪得到的。
 * /4/w/<LongEdge>/h/<ShortEdge>    限定缩略图的长边最少为<LongEdge>，短边最少为<ShortEdge>，进行等比缩放，不裁剪。如果只指定 w 参数或只指定 h 参数，表示长边短边限定为同样的值。这个模式很适合在手持设备做图片的全屏查看（把这里的长边短边分别设为手机屏幕的分辨率即可），生成的图片尺寸刚好充满整个屏幕（某一个边可能会超出屏幕）。
 * /5/w/<LongEdge>/h/<ShortEdge>    限定缩略图的长边最少为<LongEdge>，短边最少为<ShortEdge>，进行等比缩放，居中裁剪。如果只指定 w 参数或只指定 h 参数，表示长边短边限定为同样的值。同上模式4，但超出限定的矩形部分会被裁剪。
 * @param w 宽
 * @param h 高
 */
global.get_pic = async(id, m = null, w = null, h = null) => {
    if (think.isEmpty(id)) {
        return "/static/noimg.jpg";
    }
    let map = {};
    map.status = 1;
    if (think.isNumberString(id)) {
        map.id = id;
    } else {
        map.path = id;
    }
    let picture = await think.model('picture', think.config("db")).where(map).find();
    let q = "";
    if (picture.type > 0) {
        if (m != null) {
            m = "/" + m
        } else {
            m = ""
        }
        if (w != null) {
            w = "/w/" + w
        } else {
            w = ""
        }
        if (h != null) {
            h = "/h/" + h
        } else {
            h = ""
        }
        if (m != "" || w != "" || h != "") {
            q = `?imageView2${m}${w}${h}`
        }
        let name = await think.cache("setup");
        return `//${name.QINIU_DOMAIN_NAME}/${picture.path}${q}`;
    } else {
        return picture.path
    }
}


/**
 *
 * 根据栏目ID获取栏目信息
 * @param cid
 * @returns {*}
 */
global.get_cate = async(cid) => {
    let column = await think.model('category', think.config("db")).get_all_category();

    for (let v of column) {
        if (v.id == cid) {
            // console.log(v)
            return v;
        }
    }
}

/**
 * 根据 team id 获取内容号信息
 *
 * @param cid
 */
global.get_team = async(tid) => {
    let teams = await think.model('team', think.config("db")).get_all();

    for (let v of teams) {
        if (v.id == tid) {

            return v;
        }
    }
}

/**
 * 排序函数
 */
function sort_node(v, w) {
    return v["sort"] - w["sort"];
}
function sort_node1(v, w) {
    return w["sort"] - v["sort"];
}
/**
 * global get_children
 * 获取子集分类 （这里是获取所有子集）
 */
global.get_children = function (nodes, parent, sn = 0) {
    // console.log(11);
    var children = [];
    var last = [];
    /* 未访问的节点 */
    /*
     * 获取根分类列表。
     * 创建一个虚拟父级分类亦可
     **/
    var node = null;
    for (var i in nodes) {
        node = nodes[i];
        if (node["pid"] == parent) {
            node["deep"] = 0;
            children.push(node);
        } else {
            last.push(node);
        }
    }
    if (sn == 0) {
        children.sort(sort_node);
    } else {
        children.sort(sort_node1);
    }


    /* 同级排序 */
    var jumper = 0;
    var stack = children.slice(0);
    /* easy clone */

    while (stack.length > 0
    /* just in case */ && jumper++ < 1000) {
        var shift_node = stack.shift();
        var list = [];
        /* 当前子节点列表 */
        var last_static = last.slice(0);
        last = [];
        for (var i in last_static) {
            node = last_static[i];
            if (node["pid"] == shift_node["id"]) {
                node["deep"] = shift_node["deep"] + 1;
                list.push(node);
            } else {
                last.push(node);
            }
        }
        if (sn == 0) {
            list.sort(sort_node);
        } else {
            list.sort(sort_node1);
        }


        for (var i in list) {
            node = list[i];
            stack.push(node);
            children.push(node);
        }
    }
    /*
     * 有序树非递归前序遍历
     *
     * */
    var stack = [];
    /* 前序操作栈 - 分类编号 */
    var top = null;
    /* 操作栈顶 */
    var tree = children.slice(0);
    /* 未在前序操作栈内弹出的节点 */
    var has_child = false;
    /* 是否有子节点，如无子节点则弹出栈顶 */
    var children = [];
    /* 清空结果集 */
    var jumper = 0;
    last = [];
    /* 未遍历的节点 */
    var current = null;
    /* 当前节点 */
    stack.push(parent);
    /* 建立根节点 */

    while (stack.length > 0) {
        if (jumper++ > 1000) {
            break;
        }
        top = stack[stack.length - 1];
        has_child = false;
        last = [];

        for (var i in tree) {
            current = tree[i];
            if (current["pid"] == top) {
                top = current["id"];
                stack.push(top);
                children.push(current);
                has_child = true;
            } else {
                last.push(current);
            }
        }
        tree = last.slice(0);
        if (!has_child) {
            stack.pop();
            top = stack[stack.length - 1];
        }
    }
    return children;
}


/**
 * in_array
 * @param stringToSearch
 * @param arrayToSearch
 * @returns {boolean}
 */
/* global in_array */
global.in_array = function (stringToSearch, arrayToSearch) {
    for (let s = 0; s < arrayToSearch.length; s++) {
        let thisEntry = arrayToSearch[s].toString();
        if (thisEntry == stringToSearch) {
            return true;
        }
    }
    return false;
}

/**
 * 根据团队 id 获取团队成员
 * @param tid
 * @returns {Promise.<void>}
 */
global.$team_member = async(tid) => {
    //查询团队成员
    //TODO: 需要缓存
    let team_member = await think.model("team_member", think.config("db")).where({team_id: tid}).select();

    let member = [];

    for (let m of team_member) {
        let user = await think.model("member", think.config("db")).where({id: m.user_id}).find();
        if (m.is_owner == 1) {
            user.is_owner = true;
        }
        member.push(user);
    }
    return member;
}


/**
 * 分析枚举类型配置值 格式 a:名称1,b:名称2
 * @param str
 * @returns {*}
 */
/* global parse_config_attr */
global.parse_config_attr = function (str) {
    let strs;
    if (str.search(/\r\n/ig) > -1) {
        strs = str.split("\r\n");
    } else if (str.search(/,/ig) > -1) {
        strs = str.split(",");
    } else if (str.search(/\n/ig) > -1) {
        strs = str.split("\n");
    } else {
        strs = [str];
    }
    if (think.isArray(strs)) {
        let obj = {}
        strs.forEach(n => {
            n = n.split(":");
            obj[n[0]] = n[1];
        })
        return obj;
    }

}
/**
 * 把返回的数据集转换成Tree
 * @param array data 要转换的数据集
 * @param string pid parent标记字段
 * @return array
 */
/* global arr_to_tree */
global.arr_to_tree = function (data, parent) {
    var result = [], temp;
    var length = data.length;

    // console.log(length + "======")

    for (var i = 0; i < length; i++) {

        if (data[i].parent === parent) {
            result.push(data[i]);
            temp = arr_to_tree(data, data[i].id);
            if (temp.length > 0) {
                data[i].expanded = true;
                data[i].children = temp;
                data[i].chnum = data[i].children.length
            }
        }
    }
    return result;
}

global.menu_tree = function(data, parent){
    var result = [], temp;
    var length = data.length;

    for (var i = 0; i < length; i++) {
        if (!think.isEmpty(data[i].meta) && data[i].meta['_menu_item_menu_item_parent'] != null){
            if (data[i].meta['_menu_item_menu_item_parent'] == parent) {

                result.push(data[i]);
                temp = menu_tree(data, data[i].id);

                if (temp.length > 0) {
                    data[i].expanded = true;
                    data[i].children = temp;
                    data[i].chnum = data[i].children.length
                }
            }
        }
    }
    return result;
}

/*function transformToTree(arr){
    var nodes = {};
    return arr.filter(function(obj){
        var id = obj["name"],
            parentId = obj["parent"];

        nodes[id] = think._.defaults(obj, nodes[id], { children: [] });
        parentId && (nodes[parentId] = (nodes[parentId] || { children: [] }))["children"].push(obj);

        return !parentId;
    });
}*/


/* global arr_to_tree */
global.sub_cate = function (data, pid) {
    var result = [], temp;
    var length = data.length;
    for (var i = 0; i < length; i++) {
        if (data[i].pid == pid) {
            //console.log(data[i]);
            result.push(data[i].id);
            temp = sub_cate(data, data[i].id);
            if (temp.length > 0) {
                result.push(temp.join(','));
            }
        }
    }
    return result;
}

global.parse_type_attr = function (str) {
    let strs;
    if (str.search(/\r\n/ig) > -1) {
        strs = str.split("\r\n");
    } else if (str.search(/,/ig) > -1) {
        strs = str.split(",");
    } else if (str.search(/\n/ig) > -1) {
        strs = str.split("\n");
    } else {
        strs = [str];
    }
    if (think.isArray(strs)) {
        let arr = [];
        for (let v of strs) {
            let obj = {};
            v = v.split(":");
            if (!think.isEmpty(v[0]) && !think.isEmpty(v[1])) {
                obj.id = v[0];
                obj.name = v[1];
                if (obj.id.split(".").length == 1) {
                    obj.pid = 0
                } else {
                    obj.pid = obj.id.split(".").splice(0, obj.id.split(".").length - 1).join(".");
                }
                arr.push(obj);
            }
        }
        //console.log(arr);
        let tree = arr_to_tree(arr, 0)
        //think.log(tree);
        return tree;
    }

}


/**
 * 根据 team id 获取内容号信息
 *
 * @param cid
 */
global.get_nav_menu = async(option) => {
    // option['theme_location'] top-menu
    // option['menu_id'] main-menu
    await think.model('taxonomy', think.config('db')).getNavMenuItems(option['menu_name']);
    // let teams = await think.model('terms', think.config("db")).where().find();

    // for (let v of teams) {
    //     if (v.id == tid) {
    //
    //         return v;
    //     }
    // }
}

global.get_thumbnail = async(id) => {
    let post = await think.model('posts', think.config('db')).where({id: id}).find();
    return post;
}


// global.language = async(name) => {
//
//     if (think.isEmpty(name)){
//         name = 'zh-cn'
//     }
//     return require("../config/locale/" + name).default;
// }