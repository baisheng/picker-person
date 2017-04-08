'use strict';
/**
 * model
 */
export default class extends think.model.base {
    /**
     * 用户登录认证
     * @param  string  $username 用户名
     * @param  string  $password 用户密码
     * @param  integer $type     用户名类型 （1-用户名，2-邮箱，3-手机，4-UID）
     * @param  {int} login 登陆方式 0-前台登陆 ， 1-后台登陆
     * @return integer           登录成功-用户ID，登录失败-错误编号
     */
    async signin(username, password, ip, type=2,login=0) {
        let map = {};
        switch (type) {
            case 1:
                map.username = username;
                break;
            case 2:
                map.email = username;
                break;
            case 3:
                map.mobile = username;
                break;
            case 4:
                map.id = username;
                break;
            case 5:
                map={
                    username:username,
                    email:username,
                    mobile:username,
                    _logic: "OR"
                }
                break;
            default:
                return 0; //参数错误
        }
        let user = await this.where(map).find();
        if (!think.isEmpty(user) && 1 == user.status) {
            //验证是否是管理用户
            if(login==1){
                if (0 == user.is_admin) {
                    return -3;//不是管理用户，不能登陆后台
                }
            }
            /* 验证用户密码 */
            if (password === user.password) {
                await this.autoLogin(user, ip);//更新用户登录信息，自动登陆
                /* 记录登录SESSION和COOKIES */
                let userInfo = {
                    'uid': user.id,
                    'username': user.username,
                    'last_login_time': user.last_login_time,
                };

                return userInfo; //登录成功，返回用户信息
            } else {
                return -2; //密码错误
            }


        } else {
            return -1; //用户不存在或被禁用
        }
    }

    /**
     * 自动登录用户
     * @param  integer $user 用户信息数组
     */
    async autoLogin(user, ip) {
        /* 更新登录信息 */
        let data = {
            'last_login_time': new Date().valueOf(),
            'last_login_ip': _ip2int(ip),
        };
        let use = await this.where({id: user.id}).update(data);
        await this.where({id: user.id}).increment('login');

    }

    /**
     * 根据用户ID获取用户昵称
     * @param  integer $uid 用户ID
     * @return string       用户昵称
     */

    async get_nickname(uid) {
        uid = uid || 0;
        //TODO 缓存处理后续
        let name;
        let info = await this.field("username").find(uid);
        name = info.username;
        return name;
    }
}