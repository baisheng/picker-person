'use strict';

// Include gulp
var gulp = require('gulp');

// Include our plugins
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var minifyCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//CONFIG PATHS
var config = {
	pages  : './pages',
	assets : './assets',
	build: '../www/static/assets'
	// build:'./dist'
};
// gulp.task('layout2_material', function() {
//     return gulp
//         .src('assets/layout2_material_less/_main_full/*.less')         // locate /less/ folder root to grab 4 main files
//         .pipe(less())                                 // compile
//         .pipe(gulp.dest('../www/static/assets/layout2/css'))                // destination path for normal CSS
//         .pipe(minifyCss({                             // minify CSS
//             keepSpecialComments: 0                    // remove all comments
//         }))
//         .pipe(rename({                                // rename file
//             suffix: ".min"                            // add *.min suffix
//         }))
//         .pipe(gulp.dest('../www/static/assets/layout2/css'));               // destination path for minified CSS
// });

// assets/less/**/*.less
// Compile less files of a full version
gulp.task('less', function() {
    return gulp
        .src(config.pages + '/less/pages.less')         // locate /less/ folder root to grab 4 main files
        .pipe(less({
            // paths: [config.pages + '/less/']
        }))                                 // compile
        .pipe(gulp.dest(config.build + '/css/'))                // destination path for normal CSS
        .pipe(minifyCss({                             // minify CSS
            keepSpecialComments: 0                    // remove all comments
        }))
        .pipe(rename({                                // rename file
            suffix: ".min"                            // add *.min suffix
        }))
        .pipe(gulp.dest(config.build + '/css/'));               // destination path for minified CSS
});

// Watch files for changes
// gulp.task('watch', function() {
//     gulp.watch('assets/js/core/app.js', [             // listen for changes in app.js file and automatically compress
//         'lint',                                       // lint
//         'concatenate',                              // concatenate & minify JS files (uncomment if in use)
        // 'minify_core'                                 // compress app.js
    // ]);
    // gulp.watch('assets/less/**/*.less', ['less_full', 'less_starters']);    // listen for changes in all LESS files and automatically re-compile
    // gulp.watch('assets/layout4_material_less/**/*.less', ['layout4_material']);    // listen for changes in all LESS files and automatically re-compile
    // gulp.watch('assets/layout2_material_less/**/*.less', ['layout2_material']);    // listen for changes in all LESS files and automatically re-compile
// });

// Watch files for changes
gulp.task('watch', function() {
    // gulp.watch('assets/js/core/app.js', [             // listen for changes in app.js file and automatically compress
    //     'lint',                                       // lint
        //'concatenate',                              // concatenate & minify JS files (uncomment if in use)
        // 'minify_core'                                 // compress app.js
    // ]);
    gulp.watch(config.pages + '/less/**/*.less', ['less']);    // listen for changes in all LESS files and automatically re-compile
});

gulp.task('default', function() {
 console.log( "\nPage - Gulp Command List \n" );
 console.log( "----------------------------\n" );
 console.log( "gulp watch" );
 console.log( "gulp less" );
 console.log( "gulp build \n" );
 console.log( "----------------------------\n" );
});