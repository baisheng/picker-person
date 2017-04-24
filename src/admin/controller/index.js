'use strict';

import Base from './base.js';
const fetch = require('node-fetch');
const urllib = require('url');
const path = require('path');
const fs = require('fs');
import sharp from 'sharp';

export default class extends Base {
    exists = (filename) => {
        try {
            return fs.statSync(filename);
        } catch (e) {
            if (e.code === 'ENOENT') return null;
            throw e;
        }
    }

    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {

        /*
         let default_app = this.options.site['default_app'];
         let default_index = this.options.site['default_index'];

         if (default_app) {
         let controllerInstance = this.controller(default_app, 'admin');
         await this.action(controllerInstance, 'index')

         }
         */
        // let _dao = this.model('posts', {aid: this.aid});
        // let _taxonomy = this.model('taxonomy', {aid: this.aid});
        let _terms = this.model('terms', {aid: this.aid});
//
        let snippet_terms = await _terms.findByTaxonomy('snippet');

        // console.log(JSON.stringify(snippet_terms))
        let _items = [];
        snippet_terms.forEach((item) => {
            let _item = {};
            // _item.id = item.id;
            _item.text = item.name;
            _item.slug = think._.replace(item.slug, 'snippet-format-', '');

            if (!think.isEmpty(item.meta['_snippet_icon'])) {
                _item.icon = item.meta['_snippet_icon'];
            }
            if (!think.isEmpty(item.meta['_status']) && item.meta['_status'] === 'active') {
                _items.push(_item);
            }
        });

        // console.log(JSON.stringify(_items))
        this.assign("snippet_terms", JSON.stringify(_items));

        return this.display();
    }

    async coverAction() {
        let category = this.get('category');
        let id = this.get('id')
        await this.unsplash(category, id);
    }

    async unsplash(category, id) {
        let _dao = this.model('posts', {aid: this.aid});


        const res1600 = '1600x900';
        const res2560 = '2560x1440';
        let ret = {'status': 1, 'info': '上传成功', 'data': ""}

        // ['food', 'nature', 'objects', 'people'].forEach(category => {
        //get(`https://source.unsplash.com/category/${category}/${res}/daily`);
        // get(`https://source.unsplash.com/category/${category}/featured/${res}`);
        // });

        let res = await fetch(`https://source.unsplash.com/category/${category}/featured/${res1600}`, {redirect: 'manual'})
            .then(res => {
                if (res.status !== 302) {
                    throw Error('No redirect - not sure what the image ID is. Bug seph');
                }

                const location = urllib.resolve('https://source.unsplash.com/', res.headers.get('location'));
                if (!location) throw Error('No location header');

                const filename = path.parse(urllib.parse(location).pathname).base;

                // TODO: 当前要下载的文件名
                if (this.exists(`${filename}.jpeg`) || this.exists(`${filename}.png`)) {
                    console.log(`Already downloaded ${filename}`);
                    return false;
                }

                return {"location": location, "filename": filename};

            })

        let data = await res;

        if (!data) {
            return this.error()
        }

        let filepath = think.RESOURCE_PATH + '/upload/cover/' + dateformat("Y-m-d", new Date().getTime());
        think.mkdir(filepath);

        let deferred = think.defer();
        let promises = await fetch(data.location).then(res => {
            const contenttype = res.headers.get('content-type');
            const ext = contenttype.indexOf('jpeg') !== -1 ? 'jpeg' : 'png'; // bleh.

            const p = path.resolve(filepath, `${data.filename}.${ext}`);
            res.body.pipe(fs.createWriteStream(p));
            // res.body.once('end', () => console.log('wrote', p));
            res.body.once('end', () => {
                deferred.resolve(p);

            });
            return deferred.promise;
        });

        if (think.isFile(promises)) {
            // if (this.setup.IS_QINIU == 1) {
            if (this.options.upload.type === "qiniu") {

                let qiniu = think.service("qiniu");

                let instance = new qiniu();
                let uppic = await instance.upload(promises, data.filename, this.aid);
                // let uppic = await instance.upload(filepath, basename, this.aid);


                if (!think.isEmpty(uppic)) {
                    let post_data = {
                        author: this.userInfo.id,

                        // id: id,
                        title: data.filename,
                        name: uppic.hash,
                        // path: '/upload/picture/' + dateformat(new Date().getTime(), "Y-m-d") + '/' + basename,
                        // mime_type: file.headers['content-type'],
                        guid: "http://" + this.options.upload.option.domain + "/" + uppic.key,
                        create_time: new Date().getTime(),
                        status: 1,
                        type: 'attachment',
                        sha1: uppic.hash,
                        path: uppic.key

                    };

                    const _attachment_metadata = await sharp(promises).metadata();
                    delete _attachment_metadata.exif;

                    let _post_id = await _dao.add(post_data);

                    // profile_cover option site
                    if (!think.isEmpty(_post_id)) {
                        await _dao.addPostMeta(_post_id, "_attachment_metadata", _attachment_metadata);
                        await _dao.addPostMeta(_post_id, "_attachment_file", uppic.key);
                    }

                    let _options = this.model('options', {aid: this.aid});
                    let _option_value = {
                        "key": "profile_cover",
                        "value": JSON.stringify({
                            id: _post_id,
                            guid: post_data.guid
                        })
                    }
                    let options = await _options.updateOptions('site', _option_value);

                    // console.log(JSON.stringify(options.site.profile_cover))

                    // "name": "site",
                    //     "value": {"key": "current_theme", "value": theme_name}
                    // ret['data'] = post_data;
                    ret['data'] = JSON.parse(options.site.profile_cover);

                    return this.json(ret)

                }


            }
        } else {
            return this.fail("获取文件失败,请重试!")

        }
        /*
         Categories
         buildings
         food
         nature
         people
         technology
         objects
         */
    }


}