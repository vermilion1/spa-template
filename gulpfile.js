'use strict';

var gulp = require('gulp');
var util = require('util');
var extend = util._extend;
var paths = require('./paths');
var pkg = require('./package');
var plugins = extend(require('gulp-load-plugins')(), {
  sequence: require('run-sequence'),
  del: require('del')
});

gulp.task('clean', function(cb) {
  return plugins.del(paths.clean.src, cb);
});

gulp.task('connect', function() {
  return plugins.connect.server({
    root: paths.connect.root,
    port: 9001,
    livereload: true
  });
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
    .pipe(plugins.connect.reload());
});

gulp.task('js', function() {
  return gulp.src(paths.js.src)
    .pipe(plugins.plumber())
    .pipe(plugins.browserify())
    .pipe(gulp.dest(paths.js.dest));
});

gulp.task('index', function() {
  // TODO: Add {dev: true}
  // http://smm.zoomquiet.io/data/20131229163601/index.html#gulpenv + scripts property of package.json

  console.log(arguments);

  return gulp.src(paths.index.src)
    .pipe(plugins.preprocess({context: {title: pkg.title, description: pkg.description}}))
    .pipe(gulp.dest(paths.index.dest))
    .pipe(plugins.connect.reload());
});

gulp.task('images', function() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
});

gulp.task('build', ['clean'], function () {
  plugins.sequence(['jshint', 'js', 'less', 'images'], ['index']);
});

gulp.task('dev', ['build'], function () {
  gulp.start(['watch']);
});

gulp.task('watch', ['connect'],  function() {
  // TODO: resolve livereload + connect issue

  gulp.watch(paths.less.watch, ['less']);
  gulp.watch(paths.index.src, ['index']);
  gulp.watch(paths.js.watch, ['js']);
  gulp.watch(paths.jshint.src, ['jshint']);
  gulp.watch(paths.images.src, ['images']);
  gulp.watch(paths.watch.livereload).on('change', plugins.livereload.changed);

  plugins.livereload.listen();
});
