'use strict';
import Base from './base';

/**
 * model
 */
export default class extends Base {
    /**
     * options cache key
     * @type {String}
     */
        // cacheKey = 'picker_' + this.aid + '_option' + this.aid;
    cacheKey = '$options';
    /**
     * cache options
     * @type {Object}
     */
    cacheOptions = {
        timeout: 30 * 24 * 3600 * 1000,
        type: 'file'
        // type: !think.isMaster ? 'file' : 'memory'
    };
    //
    async getOption(name) {

        let options = await this.getOptions(true);

        return await think._.find(options, name);
    }

    async list() {
        let data = await this.select();
        for(let option of data){
            option.meta = JSON.parse(option.meta)
        }
        return data;
    }

    //
    /**
     * get options
     * @return {} []
     */
    async getOptions(flag) {
        if (flag === true) {
            await think.cache(this.cacheKey, null);
        }
        let ret = await think.cache(this.cacheKey, async () => {
            let data = await this.select();

            let result = {};
            // for (let option of data){
            //     r
            //     console.log(option.key)
            // }
            data.forEach(item => {
                result[item.key] = JSON.parse(item.value);
            });
            return result;
        }, this.cacheOptions);

        //comment type
        /*        if (ret) {
         if (ret.comment && think.isString(ret.comment)) {
         ret.comment = JSON.parse(ret.comment);
         }
         if (!ret.comment) {
         ret.comment = {type: 'disqus'};
         }
         // upload settings
         if (ret.upload && think.isString(ret.upload)) {
         ret.upload = JSON.parse(ret.upload);
         }
         if (!ret.upload) {
         ret.upload = {type: 'local'};
         }
         if (ret.push_sites && think.isString(ret.push_sites)) {
         ret.push_sites = JSON.parse(ret.push_sites);
         }
         if (!ret.push_sites) {
         ret.push_sites = {};
         }
         }*/

        return ret;
    }

    /**
     * update options
     * @return {} []
     */
    async updateOptions(key, value) {

        console.log(key + ": " + value);


        let data = think.isObject(key) ? think.extend({}, key) : {[key]: value};
        let cacheData = await think.cache(this.cacheKey, undefined, this.cacheOptions);

        // console.log(JSON.stringify(cacheData))
        // update picker_resume.picker_options set value = json_set(value,'$.current_theme', 'limitless') where `key` = 'site';
        if (think.isEmpty(cacheData)) {
            cacheData = await this.getOptions();
        }
        let changedData = {};
        for (let key in data) {
            if (data[key] !== cacheData[key]) {
                changedData[key] = data[key];
            }
        }

        console.log(JSON.stringify(changedData) + "-----")
        let json_sql = `update picker_resume.picker_options set value = json_set(value,'$.${value.key}', '${value.value}') where \`key\` = '${key}'`;

        console.log(json_sql)
        // console.log(JSON.stringify(changedData))
        //data is not changed
        if (think.isEmpty(changedData)) {
            return;
        }
        let p1 = think.cache(this.cacheKey, think.extend(cacheData, changedData), this.cacheOptions);

        let promises = [p1];
        for (let key in changedData) {
            let value = changedData[key];
            let exist = await this.where({key: key}).count('key');
            let p;
            this.execute(json_sql);
            // let json_sql = `update picker_resume.picker_options set value = json_set(value,'$.${key}', '${value}') where \`key\` = \`${key}\``;
            // if (exist) {
            // this.execute(update picker_resume.picker_options set value = json_set(value,'$.current_theme', 'limitless') where `key` = 'site';)
            // p = this.where({key: key}).update({value: value});
            // } else {
            //     p = this.add({key, value});
            // }
            promises.push(p);
        }
        await Promise.all(promises);
        // console.log(JSON.stringify(p1) +"======")

        let ret = await this.getOptions(true);

        return ret;
    }

    /**
     * 获取当前模板模块
     * @returns {Promise.<*>}
     */
    async getThemeMods() {

        // console.log('theme_mods');
        // let theme_slug = await this.getOption('stylesheet');
        let options = await this.getOptions(true);

        // let theme_slug = options['stylesheet'];
        //TODO: 临时 @baisheng 2017 0904
        let theme_slug = "caixie";

        // console.log(JSON.stringify(theme_slug))
        let mods = options['theme_mods_' + theme_slug];

        // console.log(JSON.stringify(mods));
        if (!think.isEmpty(mods)) {
            return mods;
        }
        else {
            return null;
        }
        // if (!think.isEmpty(mods)){
        //     let theme_name = options['current_theme'];
        //
        // }
        //  $mods = get_option( "theme_mods_$theme_slug" );
        //  if ( false === $mods ) {
        //      $theme_name = get_option( 'current_theme' );
        //      if ( false === $theme_name )
        //          $theme_name = wp_get_theme()->get('Name');
        //      $mods = get_option( "mods_$theme_name" ); // Deprecated location.
        //      if ( is_admin() && false !== $mods ) {
        //          update_option( "theme_mods_$theme_slug", $mods );
        //          delete_option( "mods_$theme_name" );
        //      }
        //  }
    }

    /**
     * 获取推荐配置
     *
     * @param location
     * @returns {Promise.<*>}
     */
    async getStickys(location) {
        let options = await this.getOptions(true);
        let stickys_ids = options['stickys'][location];

        return stickys_ids;
    }
}