'use strict';

import fs from 'fs';
import path from 'path';
import Base from './base.js';
import {execSync} from 'child_process';

const cluster = require('cluster');
const stats = think.promisify(fs.stat);
const readdir = think.promisify(fs.readdir);
const writeFile = think.promisify(fs.writeFile);
const THEME_DIR = path.join(think.RESOURCE_PATH, 'resume_themes');

export default class extends Base {

    init(http) {
        super.init(http);
        // this.dao = this.model('resumes');
        this.dao = this.model('posts');

        let theme = "material";
        let theme_path = "http://picker.la/resume_themes/material";
        this.assign('theme_path', theme_path)
        this.RESUME_THEME_VIEW_PATH = `${think.ROOT_PATH}${think.sep}www${think.sep}resume_themes${think.sep}${theme}${think.sep}`;

    }


    async deleteAction() {
        // if (this.isGet()) {
        //     let _id = this.get('id');
        //
        //     let rows = await this.dao.update({id: _id, status: 'trash'});
        //     if (rows > 0) {
        //         await this.successMsg('已删除至回收站')
        //
        //         return this.success("操作成功!  ")
        //
        //     }
        // }

        if (this.isPost()) {
            let ids = this.get('ids');

            if (!think.isEmpty(ids)) {
                let id_arr = [];
                if (ids.search(/,/ig) > -1) {
                    id_arr = ids.split(",");
                } else {
                    id_arr = [ids]
                }

                for (let _id of id_arr) {
                    let rows = await this.dao.update({id: _id, status: 'trash'});
                    if (rows > 0) {
                        await this.successMsg(_id + ': 已删除至回收站')

                    } else {
                        await this.errorMsg(_id + ': 删除失败！')

                    }
                }

                return this.success("操作成功!  ")
            }
            return this.fail('操作失败或未找到要更新的数据!');
        }

        return this.fail('操作失败或未找到要更新的数据!');

    }

    async preview(name) {
        // console.log(this.RESUME_THEME_VIEW_PATH + name + '.html')
        return this.display(this.RESUME_THEME_VIEW_PATH + name + '.html');
    }

    async newAction() {
        let resumeTemplate = this.model('resume_template');

        let default_template = await resumeTemplate.where({"key": "person_default"}).find()

        this.assign('resume', JSON.parse(default_template.value));
        return this.display();
    }

    async getAction() {
        switch (this.get('type')) {
            case 'fileList':
                let {theme} = this.get();
                let files = await this.getFileList(path.join(THEME_DIR, theme));
                return this.success(files);

            case 'file':
                let {filePath} = this.get();
                let file = await think.promisify(fs.readFile)(path.join(THEME_DIR, filePath), {encoding: 'utf-8'});
                return this.success(file);

            case 'templateList':
                return await this.getPageTemplateList();

            case 'themeList':
            default:
                return await this.getThemeList();
        }
    }

    async themesAction() {
        return this.display();
    }

    /**
     * 获取主题列表
     */
    async getThemeList() {
        let themes = await readdir(THEME_DIR);

        let result = [];
        for (let theme of themes) {
            let infoFile = path.join(THEME_DIR, theme, 'package.json');
            try {
                let stat = await stats(infoFile);
                result.push(think.extend({id: theme}, think.require(infoFile)));

            } catch (e) {
                console.log(e);
            }
        }
        return this.success(result);
    }


    async indexAction() {

        return this.display();
    }



    async previewAction() {
        let resumeModel = this.model('resumes');
        let data = await resumeModel.find({id: 1});
        let jsonResume = JSON.parse(data.content);
        this.assign('resume', jsonResume);

        return this.preview("preview");
    }

    async getAction() {
        switch (this.get('type')) {
            case 'fileList':
                let {theme} = this.get();
                let files = await this.getFileList(path.join(THEME_DIR, theme));
                return this.success(files);

            case 'file':
                let {filePath} = this.get();
                let file = await think.promisify(fs.readFile)(path.join(THEME_DIR, filePath), {encoding: 'utf-8'});
                return this.success(file);

            case 'templateList':
                return await this.getPageTemplateList();

            case 'themeList':
            default:
                return await this.getThemeList();
        }
    }

    async updateAction() {
        let {filePath, content} = this.post();
        try {
            await writeFile(
                path.join(THEME_DIR, filePath),
                content,
                {encoding: 'utf-8'}
            );

            if (cluster.isWorker) {
                setTimeout(() => cluster.worker.kill(), 200);
            }
            this.success();
        } catch (e) {
            return this.fail(e);
        }
    }

    /**
     * Fork theme
     */
    async putAction() {
        let {theme, new_theme} = this.post();
        let themeDir = path.join(THEME_DIR, theme);
        let newThemeDir = path.join(THEME_DIR, new_theme);
        try {
            let stat = await stats(newThemeDir);
            return this.fail(`${new_theme} 已存在，请手动切换到该主题`);
        } catch (e) {
            execSync(`cp -r ${themeDir} ${newThemeDir}`);

            let configPath = path.join(newThemeDir, 'package.json');
            let config = think.require(configPath);
            config.name = new_theme;

            try {
                await writeFile(configPath, JSON.stringify(config, null, '\t'), {encoding: 'utf-8'});
                await this.model('options').updateOptions('theme', new_theme);
                return this.success();
            } catch (e) {
                return this.fail(e);
            }
        }
    }

    /**
     * 递归获取文件夹树
     */
    async getFileList(base) {
        let result = [];
        let files = await readdir(base);

        for (let file of files) {
            let pos = path.join(base, file);
            let stat = await stats(pos);
            if (stat.isDirectory()) {
                result.push({
                    name: file,
                    children: await this.getFileList(pos)
                });
            }

            if (stat.isFile()) {
                result.push({name: file});
            }
        }

        return result;
    }

    /**
     * 获取主题列表
     */
    async getThemeList() {
        let themes = await readdir(THEME_DIR);

        let result = [];
        for (let theme of themes) {
            let infoFile = path.join(THEME_DIR, theme, 'package.json');
            try {
                let stat = await stats(infoFile);
                result.push(think.extend({id: theme}, think.require(infoFile)));
            } catch (e) {
                console.log(e);
            }
        }
        return this.success(result);
        // console.log(JSON.stringify(result))
        // this.assign('themes', result);

        // return this.display();
    }

    /**
     * 获取主题的自定义模板
     */
    async getPageTemplateList() {
        let {theme} = this.get();
        let templatePath = path.join(THEME_DIR, theme, 'template');
        let templates = [];
        try {
            let stat = await stats(templatePath);
            if (!stat.isDirectory()) {
                throw Error();
            }
        } catch (e) {
            return this.success(templates);
        }
        templates = await readdir(templatePath);
        templates = templates.filter(t => /\.html$/.test(t));
        return this.success(templates);
    }
}