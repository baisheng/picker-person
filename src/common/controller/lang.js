'use strict';

import Base from './base.js';
import * as fs from 'fs';
import * as path from 'path';
export default class extends Base {


    //加载配置
    async loadsetup(){
        const fs = require('fs');
        let setup = await this.model("setup").lists();
        let path1 = think.getPath("common", "config");
        if(think.isDir(think.ROOT_PATH+'/src')){
            let data = "export default"+JSON.stringify(setup);
            fs.writeFileSync(think.ROOT_PATH+'/src/common/config/setup.js', data);
        }
        let data1 = "exports.__esModule = true;exports.default ="+JSON.stringify(setup);
        fs.writeFileSync(path1+'/setup.js', data1);
    }


    async setLang(lang){


        // if(file_exists(dir::language($lang.'.json'))) {
        //     self::$lang = $lang;
        //     self::loadLang(dir::language($lang.'.json'));
        // }


        let uploadPath = think.RESOURCE_PATH + '/upload/download/'+dateformat("Y-m-d",new Date().getTime());
        think.mkdir(uploadPath);
        fs.renameSync(filepath, uploadPath + '/' + basename);
        file.path = uploadPath + '/' + basename;
        if(think.isFile(file.path)) {
            data = {
                savepath: '/upload/download/' + dateformat("Y-m-d", new Date().getTime()) + '/',
                create_time: new Date().getTime(),
                name: file.originalFilename,
                savename: basename,
                mime: file.headers["content-type"],
                size: file.size,
                md5: think.md5(basename)
            }
        }
    }
    async getTemplate(){

    }

    async getThemeRoots(){}


    /**
     * Retrieve all theme modifications
     *
     * @returns {Promise.<void>}
     */
    async getThemeMods(){

        // let theme_slug = await
    }
}
