const { resolve } = require('path')
let webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkgInfo = require('./package.json')
const url = require('url')
const UglifyJsPlugin = require('uglify-js-plugin');

let path = require('path');
let glob = require('glob');
// let HappyPack = require('happypack');
let os = require('os');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
// let happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});
let CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

// var chmod = require('chmod');
// chmod("outputFile", 500);

module.exports = {
    entry: getEntry(),
    output: {
        path: path.resolve(__dirname, "./js"),
        publicPath: './',
        filename: '[name].js'
    },
    // externals: {
    //     jquery: 'jQuery'
    // },
    externals: /^(jquery|\$)$/i,
    module: {
        // 各种加载器，即让各种文件格式可用require引用
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this nessessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                        'less': 'vue-style-loader!css-loader!less-loader',
                        // 'css': ExtractTextPlugin.extract({
                        //     use: 'css-loader',
                        //     fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        // })
                        // 'css': ExtractTextPlugin.extract({
                        //     loader: 'css-loader',
                        //     fallbackLoader: 'style-loader'
                        // })
                        // 'css': ExtractTextPlugin.extract({
                        //     loader: 'css-loader',
                        //     fallbackLoader: 'vue-style-loader!css-loader!less-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        // })

                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            // {
            //     test: /\.html$/,
            //     use: [
            //         {
            //             loader: 'html-loader',
            //             options: {
            //                 root: resolve(__dirname, 'src'),
            //                 attrs: ['img:src', 'link:href']
            //             }
            //         }
            //     ]
            // },
            // {
            //     test: /\.less$/,
            //     loader: 'style!css!autoprefixer!less'
            // },
            // {
            //     test: /.less$/,
            //     loader: ExtractTextPlugin.extract({
            //         fallbackLoader: 'style-loader',
            //         loader: "css-loader!less-loader",
            //     }),
            // },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

/*            {
                test: /\.(scss|css)$/,
                // include: [
                //     path.resolve(__dirname, './src/styles'),
                // ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 3,
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                // outputStyle: 'expanded',
                                sourceMap: true,
                                // sourceMapContents: true,
                            },
                        },
                    ],
                }),
            },*/
            // { test: require.resolve("./components/js/jquery-3.1.0.min.js"), use: "expose-loader?$!expose-loader?jQuery" }
            // {
            //     test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
            //     exclude: /favicon\.png$/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 10000
            //             }
            //         }
            //     ]
            // },
            // {
            //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            //     loader: 'url-loader',
            //     query: {
            //         limit: 10000,
            //         name: '/components/img/cssInsideImg/[name].[hash:7].[ext]'
            //     }
            // },
            // {
            //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            //     loader: 'url-loader',
            //     query: {
            //         limit: 10000,
            //         name: '/components/fonts/fontInsideCss/[name].[hash:7].[ext]'
            //     }
            // },
            // {
            //     test: /\.(html|tpl)$/,
            //     loader: 'html-loader'
            // },

        ]
    },
    resolve: {
        //配置别名，在项目中可缩减引用路径
        modules: [path.resolve(__dirname, "./components/js/"), "node_modules"],
        extensions: ['.js', '.vue'],
        alias: {
            '~': resolve(__dirname, 'src'),
            vuePath: path.join(__dirname, "./node_modules/vue/dist/vue.min.js"),
            // imgloadingPath: path.join(__dirname, "./components/js/imgLoading.js"),
            // apiPath: path.join(__dirname, "./components/js/utils/api.js"),
            // 'jquery': path.resolve(__dirname, './components/js/jquery-3.1.0.min.js'),
        }
    },
    // debug: true,
    plugins: [
        // new ExtractTextPlugin("style.css"),
        // extractCSS,
        // new CommonsChunkPlugin('static/js/common.js', getCommonArray()),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jquery: 'jquery',
        //     'window.jQuery': 'jquery',
        //     jQuery: 'jquery'
        // }),

        // new HtmlWebpackPlugin({
        //     template: 'src/index.html'
        // }),

        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor', 'manifest']
        // }),
        /*new UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        })*/
        // new webpack.DefinePlugin({
        //     DEBUG: Boolean(options.dev),
        //     VERSION: JSON.stringify(pkgInfo.version),
        //     CONFIG: JSON.stringify(config.runtimeConfig)
        // })
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