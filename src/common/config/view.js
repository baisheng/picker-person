'use strict';
/**
 * template config
 */
export default {
    type: 'nunjucks',
    content_type: 'text/html',
    file_ext: '.html',
    file_depr: '/',
    root_path: think.ROOT_PATH + '/view',
    adapter: {
        nunjucks: {
            tags:{
                // blockStart: '<%',
                // blockEnd: '%>',
                variableStart: '<$',
                variableEnd: '$>',
                // variableStart: '<?',
                // variableEnd: '?>'
                // commentStart: '<#',
                // commentEnd: '#>'
            },
            prerender: (nunjucks, env) => {
                /**
                 *分析枚举类型配置值 格式 a:名称1,b:名称2
                 */
                env.addFilter("parse_config_attr", function (str) {
                    return parse_config_attr(str)
                })
                /**
                 * 时间戳格式化 dateformat('Y-m-d H:i:s')
                 * @param extra 'Y-m-d H:i:s'
                 * @param date  时间戳
                 * @return  '2015-12-17 15:39:44'
                 */
                env.addFilter("dateformat", function (date, extra) {
                    let _extra = extra;
                    if (think.isEmpty(_extra)){
                        _extra = 'Y-m-d H:i:s';
                    }
                    return dateformat(date, _extra);
                })

                /**
                 * moment
                 * YYYY-MM-DD HH:mm:ss
                 * lll
                 */
                env.addFilter("moment", function (time, format) {
                    let moment = require('moment');
                    // moment.locale('zh-cn');
                    // if (think.isEmpty(config)) {
                    //     return moment(time).fromNow();
                    // } else {
                    //     return moment(time).format(config);
                    // }
                    moment.locale('zh-cn');
                    if (format === "default") {
                        format = 'YYYY-MM-DD HH:mm:ss';
                        return moment(time).format(format);
                    }

                    return moment(time).fromNow();
                })


                /**
                 * {{id|get_pic("m=1,w=200,h=200")}}
                 */
                env.addFilter('get_pic', async(id, type, callback) => {
                    let m, w, h;
                    //console.log(type);
                    let obj = {};
                    for (let v of type.split(",")) {
                        v = v.split("=");
                        obj[v[0]] = v[1];
                    }
                    m = obj.m;
                    w = obj.w;
                    h = obj.h;
                    let data = await get_pic(id, m, w, h);
                    callback(null, data);
                }, true)
                /**
                 * 获取用户名称
                 */
                env.addFilter("get_nickname", async(uid, callback) => {
                    let data = await get_nickname(uid);
                    callback(null, data);
                }, true)

                env.addFilter("display_name", async(uid, callback) => {
                    let data = await display_name(uid);
                    callback(null, data);
                }, true)
                /**
                 * 根据栏目id获取栏目信息
                 *
                 */
                env.addFilter('get_cate', async(id, callback) => {
                    let data = await get_cate(id);
                    callback(null, data);
                }, true)

                env.addFilter('get_team', async(id, callback) => {
                    let data = await get_team(id);
                    callback(null, data);

                }, true)

                env.addFilter("strToArray", function (str, sn = ",") {
                    if (!think.isEmpty(str)) {
                        let ss = str.split(sn);// 在每个逗号(,)处进行分解。
                        return ss;
                    } else {
                        return str;
                    }
                })

                env.addFilter("in_Array", function (str, arr) {
                    arr = arr || 0;
                    if (!think.isArray(arr)) {
                        if (think.isNumber(arr)) {
                            arr = "'" + arr + "'";
                        }
                        arr = arr.split(",");
                    }
                    //console.log(arr);
                    return in_array(str, arr);
                })

                env.addFilter("get_nav_menu", async(option, callback) => {
                    // let data = await
                    let data = await get_nav_menu(option);
                    callback(null, data);

                }, true)

                env.addFilter("get_thumbnail", async(id, callback) => {
                    // let data = await
                }, true)

                env.addFilter("language", async(name, callback) => {

                    // let lang = await language(name);
                    let lang = require("./locale/" + name).default;

                    callback(null, lang);

                }, true)
                // env.addFilter("get_category", async() => {
                env.addExtension('menus', new menus(), true);

                env.addExtension('stickys', new stickys(), true);
                // })
                // env.addExtension('menus',new menus());
                // env.addExtension('menus',new menus());
            }
        }
    }
};