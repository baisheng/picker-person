'use strict';
import fs from 'fs';
import path from 'path';
import Base from './base.js';
import consolidate from 'consolidate';
import cms from 'cms';
const Pages = path.join(think.RESOURCE_PATH, 'pages');
import marked from 'marked';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {

        return this.display();
    }

    async buildAction() {

        // 根据 json 数据进行改变静态页面
        // 监控 content 文件夹，如果有内容进来自动编译
        let status = await cms({
            permalink: (permalink) => `${permalink}/`,
            base: Pages,
            template: consolidate.pug,
            paths: {
                content: Pages + "/content",
                templates: Pages + "/templates",
                output: Pages + "/output"
            },
            extensions: {
                templates: [
                    'pug'
                ]
            },
            shortcodes: {
                youtube: (attrs, content) => {
                    return `<div class="youtube" style="padding-top:${(100 / attrs.width * attrs.height)}%">
                            <iframe src="https://www.youtube.com/embed/${attrs.id}" frameborder="0"></iframe>
                            </div>`;
                }
            },
            addons: {
                markdown: (input) => marked(input)
            },
            globals: {
                site: 'CMS Demo'
            }
        })


        return this.json(status);
    }

}