'use strict';
import jwt from 'jsonwebtoken';

export default class extends think.service.base {
  /**
   * init
   * @return {}         []
   */
  init(...args) {
    super.init(...args);
    this.secret = think.config("jwt.secret");
    //this.expiresIn = think.config("jwt.expiresIn");

  }

  /**
   * 创建 token
   * @param userinfo 用户信息
   * @returns { 返回 token}
   */
  createToken(userInfo) {
    let result = jwt.sign(userInfo, this.secret);
    return result;
  }

  /**
   * 验证票据
   * @param token 用户请求 token
   * @returns string 错误或者解密过的 token
   */
  verifyToken(token) {
    if (token) {
      try {
        let result = jwt.verify(token, secret);
        return result;

      } catch (err) {
        // 票据验证失败,需要提示重新登录
        return "fail";
      }
    }

    return "fail";
  }
}