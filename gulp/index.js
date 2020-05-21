const gulp = require('gulp'),
    closureCompiler = require('gulp-closure-compiler'),
    env = require('gulp-env'),
    jsdoc = require("gulp-jsdoc3"),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    rimraf = require('gulp-rimraf'),
    sass = require('gulp-sass'),
    testem = require('gulp-testem'),
    uglify = require('gulp-uglify'),
    util = require('gulp-util'),
    umd = require('gulp-umd');

// paths
let src = './src/',
    dist = './dist/',
    doc = './doc',
    distJs = dist + 'js',
    distCss = dist + 'css',
    jsFiles = [src + 'js/' + 'metricsviewer.js'],
    scssFiles = [src + 'scss/' + 'metricsviewer.scss',
        src + 'scss/' + 'metricsviewer-dark.scss'];

// deletes the distribution directory
gulp.task('clean', function () {
    return gulp.src([dist + '*'], {read: false})
        .pipe(rimraf());
});

// create 'metricsgraphics.js' and 'metricsgraphics.min.js' from source js
gulp.task('build:js', gulp.series('clean', function () {
    return gulp.src(jsFiles)
        .pipe(umd(
            {
                dependencies: function () {
                    return [{
                        name: 'jquery',
                        amd: 'jquery',
                        cjs: 'jquery',
                        global: 'jQuery',
                        param: '$'
                    },
                        {
                            name: 'MG',
                            amd: 'MG',
                            cjs: 'MG',
                            global: 'MG',
                            param: 'MG'
                        },
                        {
                            name: 'd3',
                            amd: 'd3',
                            cjs: 'd3',
                            global: 'd3',
                            param: 'd3'
                        }];
                },
                exports: function () {
                    return "metricsViewer";
                },
                namespace: function () {
                    return "metricsViewer";
                }
            }
        ))
        .pipe(gulp.dest(distJs))
        .pipe(rename('metricsviewer.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(distJs));
}));

gulp.task('compile:js', gulp.series('clean', function () {
    return gulp.src(jsFiles)
        .pipe(gulp.dest(distJs))
        .pipe(closureCompiler({
            compilerPath: 'lib/closure/closure-compiler-v20200517.jar',
            fileName: 'metricsviewer.min.js',
            maxBuffer: 999999 * 1024,
            compilerFlags: {
                compilation_level: 'ADVANCED_OPTIMIZATIONS',
                warning_level: 'VERBOSE',
                externs: [
                    'lib/externs/jquery-3.5.1.js',
                    'lib/externs/metricsgraphics-2.15.6.js',
                    'lib/externs/d3.v5.16.0.js'
                ]
            }
        }))
        .pipe(gulp.dest(distJs));
}));

gulp.task('clean:doc', function () {
    return gulp.src([doc + '*'], {read: false})
        .pipe(rimraf());
});

gulp.task('set-debug-env', function (done) {
    env({
        vars: {
            DEBUG: "gulp-jsdoc3"
        }
    });
    done();
});

gulp.task('copy:img', function () {
    return gulp.src('./examples/images/*.*')
        .pipe(gulp.dest('./doc/examples/images'));
});

gulp.task('doc', gulp.series('clean:doc', 'set-debug-env', function (callback) {
    gulp.src(['README.md'].concat(jsFiles), {read: false})
        .pipe(jsdoc({
            'opts': {
                'destination': './doc'
            },
            'plugins': [], // no plugins
            'templates': {
                'systemName': ' Metrics Viewer',
                'navType': 'inline',
                'theme': 'flatly'
            }
        }, callback));


}, 'copy:img'));

// build css files from scss
gulp.task('build:css', function () {
    return gulp.src(scssFiles)
        .pipe(sass())
        .pipe(gulp.dest(distCss));
});

// Check source js files with jshint
gulp.task('jshint', function () {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Run the test suite
gulp.task('test', function () {
    return gulp.src(['.'],  {allowEmpty: true})
        .pipe(testem({
            configFile: 'testem.json'
        }));
});

gulp.task('default', gulp.series('jshint', 'build:js', 'build:css'));

gulp.task('compile', gulp.series('jshint', 'compile:js', 'build:css'));