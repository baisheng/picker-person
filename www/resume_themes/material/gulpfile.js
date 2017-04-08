/* ------------------------------------------------------------------------------
 *
 *  # Gulp file
 *
 *  Basic Gulp tasks for Limitless template
 *
 *  Version: 1.1
 *  Latest update: Aug 20, 2016
 *
 * ---------------------------------------------------------------------------- */


// Include gulp
var gulp = require('gulp');

// Include our plugins
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var minifyCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var fs   = require('fs');
var path = require('path');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
var Asset = {
    // js: 'src/*.js',
    // less: 'dev/*.less',
    static: [
        '*.html',
        // 'src/*.css',
        // 'src/*.png',
        // 'src/*.gif',
        // '*.json',
        'examples/*.json'
    ]
};
function getDataForFile(file) {
    return {
        example: 'data loaded for ' + file.relative
    };
}

// nunjucksRender({
//     tags: {
//         // blockStart: '<%',
//         // blockEnd: '%>',
//         variableStart: '<$',
//         variableEnd: '$>',
//         // commentStart: '<#',
//         // commentEnd: '#>'
//     }
// })
// var env = nunjucksRender.configure('', {
//     tags: {
//         // blockStart: '<%',
//         // blockEnd: '%>',
//         variableStart: '<$',
//         variableEnd: '$>',
//         // commentStart: '<#',
//         // commentEnd: '#>'
//     }
// });
gulp.task('static', function () {
    return gulp.src(Asset.static)
        // .pipe(data(getDataForFile))
        .pipe(data(function(file) {
            return {
                // 如果用于 watch 使用 fs 读取
                // resume: require('./examples/resume.json')
                resume: JSON.parse(fs.readFileSync('./examples/resume.json'))
            }
        }))
        .pipe(nunjucksRender({
            // path: '',
            envOptions:{
                tags: {
                    // blockStart: '<%',
                    // blockEnd: '%>',
                    variableStart: '<$',
                    variableEnd: '$>',
                    // commentStart: '<#',
                    // commentEnd: '#>'
                }
            }

        }))
        .pipe(gulp.dest('dist'));
});

// Lint task
gulp.task('lint', function() {
    return gulp
        .src('assets/js/core/app.js')                 // lint core JS file. Or specify another path
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


// Compile less files of a full version
gulp.task('less_full', function() {
    return gulp
        .src('assets/less/_main_full/*.less')         // locate /less/ folder root to grab 4 main files
        .pipe(less())                                 // compile
        .pipe(gulp.dest('assets/css'))                // destination path for normal CSS
        .pipe(minifyCss({                             // minify CSS
            keepSpecialComments: 0                    // remove all comments
        }))
        .pipe(rename({                                // rename file
            suffix: ".min"                            // add *.min suffix
        }))
        .pipe(gulp.dest('assets/css'));               // destination path for minified CSS
});


// Compile less files of starter kit
gulp.task('less_starters', function() {
    return gulp
        .src('assets/less/_main_starters/*.less')     // locate /less/ folder root to grab 4 main files
        .pipe(less())                                 // compile
        .pipe(gulp.dest('starters/assets/css'))       // destination path for normal CSS
        .pipe(minifyCss({                             // minify CSS
            keepSpecialComments: 0                    // remove all comments
        }))
        .pipe(rename({                                // rename file
            suffix: ".min"                            // add *.min suffix
        }))
        .pipe(gulp.dest('starters/assets/css'));      // destination path for minified CSS
});


// Concatenate & minify JS (uncomment if you want to use)
/*gulp.task('concatenate', function() {
    return gulp
        .src('assets/js/*.js')                        // path to js files you want to concat
        .pipe(concat('all.js'))                       // output file name
        .pipe(gulp.dest('assets/js'))                 // destination path for normal JS
        .pipe(rename({                                // rename file
            suffix: ".min"                            // add *.min suffix
        }))
        .pipe(uglify())                               // compress JS
        .pipe(gulp.dest('assets/js'));                // destination path for minified JS
});*/


// Minify template's core JS file
gulp.task('minify_core', function() {
    return gulp
        .src('assets/js/core/app.js')                 // path to app.js file
        .pipe(uglify())                               // compress JS
        .pipe(rename({                                // rename file
            suffix: ".min"                            // add *.min suffix
        }))
        .pipe(gulp.dest('assets/js/core/'));          // destination path for minified file
});


// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('assets/js/core/app.js', [             // listen for changes in app.js file and automatically compress
        'lint',                                       // lint
        //'concatenate',                              // concatenate & minify JS files (uncomment if in use)
        'minify_core'                                 // compress app.js
    ]);

    gulp.watch('assets/less/**/*.less', ['less_full']);    // listen for changes in all LESS files and automatically re-compile
    gulp.watch(Asset.static, ['static'])
});


// Default task
gulp.task('default', [                                // list of default tasks
    'lint',                                           // lint
    'less_full',                                      // full version less compile
    // 'less_starters',                                  // starter kit less compile
    //'concatenate',                                  // uncomment if in use
    'minify_core',                                    // compress app.js
    'static',
    'watch'                                           // watch for changes
]);
