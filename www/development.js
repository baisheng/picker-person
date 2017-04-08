var thinkjs = require('thinkjs');
var path = require('path');
var lodash = require('lodash');

var rootPath = path.dirname(__dirname);

var instance = new thinkjs({
    APP_PATH: rootPath + path.sep + 'app',
    RUNTIME_PATH: rootPath + path.sep + 'runtime',
    ROOT_PATH: rootPath,
    RESOURCE_PATH: __dirname,
    UPLOAD_PATH: __dirname + "/static/upload", // 定义文件上传的目录
    THEME_PATH: __dirname + path.sep + "static" + path.sep + "theme",
    _: lodash,
    env: 'development'
});

// Build code from src to app directory.
instance.compile({
    retainLines: false,
    log: true
});


instance.run();
