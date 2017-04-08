export let imgloading = {
    Imagess: function (url, imgid, callback) {
        //判断浏览器
        let Browser = new Object();
        Browser.userAgent = window.navigator.userAgent.toLowerCase();
        Browser.ie = /msie/.test(Browser.userAgent);
        Browser.Moz = /gecko/.test(Browser.userAgent);
        let val = url;
        let img = new Image();
        if (Browser.ie) {
            img.onreadystatechange = function () {
                if (img.readyState == "complete" || img.readyState == "loaded") {
                    callback(img, imgid);
                }
            }
        } else if (Browser.Moz) {
            img.onload = function () {
                if (img.complete == true) {
                    callback(img, imgid);
                }
            }
        }
        //如果因为网络或图片的原因发生异常，则显示该图片
        img.onerror = function () {
            img.src = '//meme-ap-cdn.meme.chat/web-project/static/img/viewer.svg'
        };
        img.src = val;
    },
    checkimg: function (obj, imgid) {
        document.getElementById(imgid).src = obj.src;
    }
};