var gulp = require('gulp');
var path = require('path');
var util = require('util');

var less = require('gulp-less'),
    sass = require('gulp-sass'), //scss;
    uglify = require('gulp-uglify'),  //js压缩
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'), //重命名
    zip = require('gulp-zip'), //打包
    browserSync = require('browser-sync'), //浏览器自动刷新
    concat = require('gulp-concat'), //合并文件
    plumber = require('gulp-plumber'),  //plumber可以阻止 gulp 插件发生错误导致进程退出并输出错误日志
    cssnano = require('gulp-cssnano'),
    cache = require('gulp-cache'),
    reload = browserSync.reload,
    sourcemaps = require('gulp-sourcemaps'),
    runSequence = require('run-sequence'),
    awspublish = require('gulp-awspublish'),   //亚马逊cdn
    autoprefixer = require('gulp-autoprefixer'),
    //  htmlmin = require('gulp-htmlmin'),
    clean = require('gulp-clean'),
    imagemin = require('gulp-imagemin'),
    open = require('gulp-open'),
    pngquant = require('imagemin-pngquant'),
    del = require('del'),
    stripDebug = require('gulp-strip-debug'),//删除console.log
    spritesmith = require('gulp.spritesmith');
webpack = require('webpack');

// var cleanWebpackPlugin = require('clean-webpack-plugin');
// var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i
}
var d = new Date();
var year = d.getFullYear();
var month = checkTime(d.getMonth() + 1);
var day = checkTime(d.getDate());
var hour = checkTime(d.getHours());
var minute = checkTime(d.getMinutes());
var config = {
    imgPath: ['./components/img/**/*.*'],
    imgOutput: ['./www/static/components/img'],
    sassPath: ['./components/css/**/*.scss'],


    //修改图片位置
    spritesSource: './components/sprite/*.*',
    spritesMithConfig: {
        imgName: 'sprite' + month + day + hour + minute + '.png',
        cssName: 'sprite' + month + day + hour + minute + '.scss',
        cssFormat: 'scss',
        padding: 5

    },
    spritesImgOutputPath: './www/static/sprite/output',
    spritesCssOutputPath: './www/static/sprite/output',

};


//css 压缩图片  先压缩，在清理，最后复制压缩后的图片回原路径，此操作最好执行几次以便达到最好的效果，都完成之后请自行执行'gulp imgMini:clean' 以便不会每次新项目都压缩一遍图片
gulp.task('imgMini', function (callback) {
    runSequence(
        'imgMini:minify',
        'imgMini:clean',
        'imgMini:move',
        callback
    )
});

//清理图片
gulp.task('imgMini:clean', function () {
    return gulp.src('./components/img/*', {read: false})
        .pipe(clean());
});
//复制图片到原路径
gulp.task('imgMini:move', function () {
    gulp.src('./www/static/components/img/*/*.*', {base: 'static'})
        .pipe(rename(function (path) {
            var prefix = path.dirname.split('static/components/img');
            path.dirname = prefix[1]
        }))
        .pipe(gulp.dest('./components/img'));
});
//图片压缩
gulp.task('imgMini:minify', () => {
    return gulp.src(config.imgPath)
        .pipe(imagemin({
            progressive: true,
            use: [pngquant({quality: '65-80'})]
        }))
        .pipe(gulp.dest('./www/static/components/img'));
});


//删除所有的console
gulp.task('strip', function () {
    return gulp.src('./www/static/components/entry/**/*.js')
        .pipe(stripDebug({debugger: true, console: true, alert: false}))
        .pipe(gulp.dest('./www/static/components/entry/'));
});


// Sass任务
// Sass任务会编译scss/目录下的scss文件，并把编译完成的css文件保存到/css目录中。
gulp.task('sass', function () {
    gulp.src(config.sassPath, {base: 'static'})
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove: true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('./www/static/css'))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))  //====>加后缀.min
        .pipe(reload({stream: true}))
        .pipe(gulp.dest('./www/static/css'));
});


/*
 精灵图使用实例
 在sprite.scss同级别的scss文件中,
 @import './sprite/sprite.scss'
 引用scss,然后直接使用
 .baby{
 @include sprite($arrow-bottom);
 }
 .icon{
 display: inline-block;
 }
 如果想改变大小，请设置一个基数x，去scss中修改
 @mixin sprite-width($sprite) {
 width: nth($sprite, 5)/x;
 }
 @mixin sprite-height($sprite) {
 height: nth($sprite, 6)/x;
 }
 @mixin sprite-position($sprite) {
 $sprite-offset-x: nth($sprite, 3)/x;
 $sprite-offset-y: nth($sprite, 4)/x;
 }
 @mixin sprite($sprite) {
 background-size: $gender-female-total-width/x auto;
 }
 */

/*
 如果嫌麻烦，复制下面的命令，并在使用时加上缩放基数$base
 @mixin sprite-width($sprite,$base) {
 width: nth($sprite, 5)/$base;
 }
 @mixin sprite-height($sprite,$base) {
 height: nth($sprite, 6)/$base;
 }
 @mixin sprite-position($sprite,$base) {
 $sprite-offset-x: nth($sprite, 3)/$base;
 $sprite-offset-y: nth($sprite, 4)/$base;
 background-position: $sprite-offset-x  $sprite-offset-y;
 }
 @mixin sprite-image($sprite) {
 $sprite-image: nth($sprite, 9);
 background-image: url(#{$sprite-image});
 }
 @mixin sprite($sprite,$base) {
 background-size: $gender-female-total-width/$base auto;
 @include sprite-image($sprite);
 @include sprite-position($sprite,$base);
 @include sprite-width($sprite,$base);
 @include sprite-height($sprite,$base);
 }
 @mixin sprites($sprites,$base) {
 @each $sprite in $sprites {
 $sprite-name: nth($sprite, 10);
 .#{$sprite-name} {
 @include sprite($sprite,$base);
 }
 }
 }
 */
//css sprite 总命令
gulp.task('sprite', function (callback) {
    runSequence(
        'sprite:build',
        'sprite:move',
        'sprite:minify',
        'sprite:open',
        'sprite:minify',
        callback
    )
});
//创建精灵图
gulp.task('sprite:build', function () {
    var spriteData = gulp.src(config.spritesSource)
        .pipe(spritesmith(config.spritesMithConfig));
    spriteData.img.pipe(gulp.dest(config.spritesCssOutputPath)); // output path for the sprite
    spriteData.css.pipe(gulp.dest(config.spritesImgOutputPath)); // output path for the CSS
});
//复制图片到新路径
gulp.task('sprite:move', function () {
    gulp.src('./components/sprite/*.*', {base: './components/sprite'})
        .pipe(rename(function (path) {
            // console.log(path);
        }))
        .pipe(gulp.dest('./www/static/sprite/' + month + day + hour + minute + '/'));
});
//清理图片
gulp.task('sprite:clean', function () {
    return gulp.src('./components/sprite/*', {read: false})
        .pipe(plumber())
        .pipe(clean());
});

//压缩
gulp.task('sprite:minify', function () {
    return gulp.src(config.spritesImgOutputPath + '/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
        .pipe(imagemin({
            progressive: true,
            use: [pngquant({quality: '65-80'})]
        }))
        .pipe(gulp.dest(config.spritesImgOutputPath))
});
//打开图片
gulp.task('sprite:open', function () {
    gulp.src('')
        .pipe(plumber())
        .pipe(open({app: 'Finder', uri: config.spritesImgOutputPath}));
});


//生产环境webpack打包构建,代码压缩
gulp.task('webpack:build', function (callback) {
    var myConfig = Object.create(webpackConfig);
    // myConfig.devtool = '#source-map';
    myConfig.output.publicPath = '<这里请自己更改为正式的cdn前缀地址，以便css中的图片可以以cdn形式读取>';
    myConfig.debug = false;
    myConfig.plugins = myConfig.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
    ]);

    webpack(myConfig, function (err, status) {
        if (err) throw new util.PluginError("webpack:build", err);
        util.log("[webpack:build]", status.toString({
            colors: true
        }));
        callback();
    });
});


gulp.task('publish', function () {

    //自己修改成cdn
});


// gulp.task('dev', ['imgMini']);
gulp.task('dev');


gulp.task('static:clean', function () {
    return gulp.src('./www/static/components/*', {read: false})
        .pipe(clean());
});

//proBuild 总命令
gulp.task('proBuild', function (callback) {
    runSequence(
        'static:clean',
        'webpack:build',
        'strip',
        'imgMini',
        callback
    )
});


//proUpload 总命令
gulp.task('proUpload', function (callback) {
    runSequence(
        'proBuild',
        'publish',
        callback
    )
});