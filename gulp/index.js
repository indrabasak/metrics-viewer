// Gulp and plugins
var gulp = require('gulp'),
    closureCompiler = require('gulp-closure-compiler'),
    jsdoc = require("gulp-jsdoc"),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    rimraf = require('gulp-rimraf'),
    sass = require('gulp-sass'),
    testem = require('gulp-testem'),
    uglify = require('gulp-uglify'),
    util = require('gulp-util'),
    umd = require('gulp-umd');

// paths
var src = './src/',
    dist = './dist/',
    doc = './doc',
    distJs = dist + 'js',
    distCss = dist + 'css',
    lib = './lib/',
    jsFiles = [src + 'js/' + 'metricsviewer.js'],
    scssFiles = [src + 'scss/' + 'metricsviewer.scss',
        src + 'scss/' + 'metricsviewer-dark.scss'];

gulp.task('default', ['jshint', 'build:js', 'build:css']);

gulp.task('compile', ['jshint', 'compile:js', 'build:css']);

// deletes the distribution directory
gulp.task('clean', function () {
    return gulp.src([dist + '*'], {read: false})
        .pipe(rimraf());
});

// create 'metricsgraphics.js' and 'metricsgraphics.min.js' from source js
gulp.task('build:js', ['clean'], function () {
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
});

gulp.task('compile:js', ['clean'], function () {
    return gulp.src(jsFiles)
        .pipe(gulp.dest(distJs))
        .pipe(closureCompiler({
            compilerPath: 'lib/closure/closure-compiler-v20161024.jar',
            fileName: 'metricsviewer.min.js',
            compilerFlags: {
                compilation_level: 'ADVANCED_OPTIMIZATIONS',
                warning_level: 'VERBOSE',
                externs: [
                    'lib/externs/jquery-3.1.js',
                    'lib/externs/metricgraphics-2.10.1.js'
                ]
            }
        }))
        .pipe(gulp.dest(distJs));
});

gulp.task('clean:doc', function () {
    return gulp.src([doc + '*'], {read: false})
        .pipe(rimraf());
});

gulp.task('doc', ['clean:doc'], function () {
    return gulp.src(jsFiles)
        .pipe(jsdoc(doc));
});

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
    return gulp.src([''])
        .pipe(testem({
            configFile: 'testem.json'
        }));
});