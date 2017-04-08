'use strict';
import qiniu from 'qiniu';
export default class extends think.service.base {

    /**
     * init
     * @return {}         []
     */
    init() {
        super.init();
    }
    // cacheKey = 'picker_option';

    async echo(){
        // console.log("Qiniu service ready!");
        return "Qiniu service ready!"
    }
    /**
     * 七牛上传
     * @param filePath 要上传文件的本地路径
     * @param key 上传到七牛后保存的文件名
     * @returns {*}
     */
    async upload(filePath, key, istoken = false) {
        let $option = await think.cache("$option");
        let $upload = JSON.parse($option.upload);
        qiniu.conf.ACCESS_KEY = $upload.option['ak'];
        qiniu.conf.SECRET_KEY = $upload.option['sk'];
        let bucket = $upload.option['bucket'];

        //用于前端直传直接返回 token
        if (istoken && filePath == null) {
            let putPolicy = new qiniu.rs.PutPolicy(bucket);
            //let putPolicy = new qiniu.rs.PutPolicy2(new policy(bucket));
            return putPolicy.token();
        }

        //获取token
        function uptoken(bucket, key) {
            let putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);
            // let putPolicy = new qiniu.rs.PutPolicy2(new policy(bucket+":"+key));
            return putPolicy.token();
        }

        let token = uptoken(bucket, key);


        //构造上传函数
        //noinspection JSAnnotator
        function uploadFile(uptoken, key, localFile) {
            let deferred = think.defer();
            let extra = new qiniu.io.PutExtra();
            qiniu.io.putFile(uptoken, key, localFile, extra, function (err, ret) {
                if (!err) {
                    // 上传成功， 处理返回值
                    // console.log(ret.hash, ret.key, ret.persistentId);
                    deferred.resolve(ret);
                } else {
                    // 上传失败， 处理返回代码
                    // console.log(err);
                    deferred.resolve(false);
                }
            });
            return deferred.promise;
        }

        return await uploadFile(token, key, filePath);
    }

    //删除资源
    async remove(key) {


        let $option = await think.cache("$option");
        let $upload = JSON.parse($option.upload);
        qiniu.conf.ACCESS_KEY = $upload.option['ak'];
        qiniu.conf.SECRET_KEY = $upload.option['sk'];
        let bucket = $upload.option['bucket'];

        function delfile() {
            let deferred = think.defer();
            //构建bucketmanager对象
            let client = new qiniu.rs.Client();
            //删除资源
            client.remove(bucket, key, function (err, ret) {
                if (!err) {
                    // ok
                    deferred.resolve(true);
                } else {
                    // console.log(err);
                    deferred.resolve(false);
                }
            });
            return deferred.promise;
        }

        return await delfile();

    }

    //获取文件信息
    async stat(key) {

        let $option = await think.cache("$option");
        let $upload = JSON.parse($option.upload);
        qiniu.conf.ACCESS_KEY = $upload.option['ak'];
        qiniu.conf.SECRET_KEY = $upload.option['sk'];
        let bucket = $upload.option['bucket'];


        function stat() {
            let deferred = think.defer();
            //构建bucketmanager对象
            var client = new qiniu.rs.Client();
            //获取文件信息
            client.stat(bucket, key, function (err, ret) {
                if (!err) {
                    // console.log(ret.hash, ret.fsize, ret.putTime, ret.mimeType);
                    deferred.resolve(ret);
                } else {
                    // console.log(err);
                    deferred.resolve(err);
                }
            });
            return deferred.promise;
        }

        return await stat();
    }

    //音视频转码
    async pfop() {

        let $option = await think.cache("$option");
        let $upload = JSON.parse($option.upload);
        qiniu.conf.ACCESS_KEY = $upload.option['ak'];
        qiniu.conf.SECRET_KEY = $upload.option['sk'];
        let bucket = $upload.option['bucket'];


        //要转码的文件所在的空间和文件名
        let key = 'thinkjs-create-project.mp4';

        //转码所使用的队列名称。
        let pipeline = 'abc';

        //要进行转码的转码操作。
        let fops = "avthumb/mp4/s/640x360/vb/1.25m"

        //可以对转码后的文件进行使用saveas参数自定义命名，当然也可以不指定文件会默认命名并保存在当前空间
        let saveas_key = qiniu.util.urlsafeBase64Encode(saved_bucket + ':' + saved_key);
        fops = fops + '|saveas/' + saveas_key;
        // console.log(saveas_key);
        let opts = {
            pipeline: pipleline
        };

        let PFOP = qiniu.fop.pfop(bucket, key, fops, opts, function (err, ret) {
            if (!err) {
                console.log(ret);
                // 上传成功， 处理返回值
                // console.log('curl ' + 'http://api.qiniu.com/status/get/prefop?id=' + ret.persistentId);
            } else {
                // 上传失败， 处理返回代码
                // console.log(err);
            }
        });
    }

    async download(key) {
        let $option = await think.cache("$option");
        let $upload = JSON.parse($option.upload);
        qiniu.conf.ACCESS_KEY = $upload.option['ak'];
        qiniu.conf.SECRET_KEY = $upload.option['sk'];

        //构建私有空间的链接
        let url = `http://${$upload.option['domain']}/${key}`;
        let policy = new qiniu.rs.GetPolicy();

        //生成下载链接url
        let downloadUrl = policy.makeRequest(url);

        //打印下载的url
        console.log(downloadUrl);
        return downloadUrl;
    }
}