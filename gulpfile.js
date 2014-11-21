'use strict';

var gulp = require('gulp');
var util = require('util');
var extend = util._extend;
var paths = require('./paths');
var pkg = require('./package');
var args = require('yargs').argv;
var env = args.env || 'production';
var isDev = env === 'development';
var plugins = extend(require('gulp-load-plugins')(), {
  sequence: require('run-sequence'),
  del: require('del')
});

gulp.task('clean', function(cb) {
  return plugins.del(paths.clean.src, cb);
});

gulp.task('jshint', function() {
  return gulp.src(paths.jshint.src)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('less', function() {
  return gulp.src(paths.less.src)
    .pipe(plugins.plumber())
    .pipe(plugins.less())
    .pipe(gulp.dest(paths.less.dest))
    .pipe(plugins['if'](isDev, plugins.livereload()));
});

gulp.task('js', function() {
  return gulp.src(paths.js.src)
    .pipe(plugins.plumber())
    .pipe(plugins.browserify())
    .pipe(gulp.dest(paths.js.dest));
});

gulp.task('index', function() {
  return gulp.src(paths.index.src)
    .pipe(plugins.preprocess({context: {title: pkg.title, description: pkg.description, env: env}}))
    .pipe(gulp.dest(paths.index.dest))
    .pipe(plugins['if'](isDev, plugins.livereload()));
});

gulp.task('images', function() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest))
    .pipe(plugins['if'](isDev, plugins.livereload()));
});

gulp.task('default', ['build'], function () {
  gulp.start(['watch']);
});

gulp.task('build', ['clean'], function () {
  plugins.sequence(['jshint', 'js', 'less', 'images'], ['index']);
});

gulp.task('watch', function() {
  gulp.watch(paths.less.watch, ['less']);
  gulp.watch(paths.index.src, ['index']);
  gulp.watch(paths.js.watch, ['js']);
  gulp.watch(paths.jshint.src, ['jshint']);
  gulp.watch(paths.images.src, ['images']);
});
