const path = require('path');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
let distConfig = require('./webpack.config');

distConfig.output.path = path.resolve(__dirname, 'public/cdn');
distConfig.output.publicPath = '//url.cn/';
distConfig.output.filename = '[chunkhash].js';
distConfig.resolve.alias = {
    'moment': 'moment/min/moment.min.js',
    'react': 'react/dist/react.min.js',
    'react-dom': 'react-dom/dist/react-dom.min.js'
};
distConfig.plugins.push(...[
    new DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new UglifyJsPlugin({
        // 最紧凑的输出
        beautify: false,
        // 删除所有的注释
        comments: false,
        compress: {
            // 在UglifyJs删除没有用到的代码时不输出警告
            warnings: false,
            // 删除所有的 `console` 语句，可以兼容ie浏览器
            drop_console: true,
            // 内嵌定义了但是只用到一次的变量
            collapse_vars: true,
            // 提取出出现多次但是没有定义成变量去引用的静态值
            reduce_vars: true,
        }
    }),
])
module.exports = distConfig;