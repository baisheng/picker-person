let webpack = require('webpack');
let path = require('path');
let glob = require('glob');
let HappyPack = require('happypack');
let os = require('os');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});
let CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

// var chmod = require('chmod');
// chmod("outputFile", 500);

module.exports = {
    entry: getEntry(),
    output: {
        path: path.resolve(__dirname, "www/static"),
        publicPath: '/static',
        filename: '[name].js'
    },
    externals: {
        "window": "window"
    },

    module: {
        // 各种加载器，即让各种文件格式可用require引用
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.less$/,
                loader: 'style!css!autoprefixer!less'
            },
            {
                test: /.less$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: "css-loader!less-loader",
                }),
            },

            {
                test: /\.css$/, // Only .css files
                loader: ['style-loader!css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: '/components/img/cssInsideImg/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: '/components/fonts/fontInsideCss/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            },
            { test: require.resolve("jquery"), loader: "expose-loader?$!expose-loader?jQuery" },
            // { test: require.resolve('jquery'), loader: 'expose-loader?jQuery!expose-loader?$' }
            // {
            //     test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
            //     loader: "imports-loader?this=>window"
            // }
        ]
    },
    resolve: {
        //配置别名，在项目中可缩减引用路径
        modules: [path.resolve(__dirname, "./components/js/"), "node_modules"],
        extensions: ['.js', '.vue'],
        alias: {
            vuePath: path.join(__dirname, "./node_modules/vue/dist/vue.min.js"),
            imgloadingPath: path.join(__dirname, "./components/js/imgLoading.js"),
            apiPath: path.join(__dirname, "./components/js/utils/api.js"),
            // 'jquery': path.resolve(__dirname, './components/js/jquery-3.1.0.min.js'),
        }
    },
    // debug: true,
    plugins: [
        // new CommonsChunkPlugin('static/js/common.js', getCommonArray()),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": "jquery"

        }),
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // })
        /*
         new HappyPack({
         id:'jsx',
         loaders: ['babel-loader'],
         options: {
         presets:[['es2015', {modules: false}]]
         },
         plugins: [
         ['transform-runtime', {
         polyfill: false,
         regenerator: false
         }],
         ]
         // loaders: [ 'babel?presets[]=es2015,cacheDirectory=true' ],
         // threadPool: happyThreadPool,
         // verbose: false , debug: false
         }),
         new HappyPack({
         id:'cssx',
         threadPool: happyThreadPool,
         loaders: [ 'style-loader!css-loader' ],
         options:[]
         }),
         */


    ],
    cache: true
};
function getEntry() {
    let entry = {};
    glob.sync('./components/**/*.js').forEach(function (name) {
        // console.log(name);
        let n = 'components/' + name.slice(name.lastIndexOf('components/') + 11, name.length - 3);
        if (n !== 'js/util') {
            entry[n] = [path.resolve(__dirname, name.split('.js')[0])]
        }
        // console.log('key: ' + n + ' val: ' + entry[n])
    });

    return entry;
}
function getCommonArray() {
    let commonArr = [];
    for (let props in getEntry()) {
        commonArr.push(props);
    }
    return commonArr;
}