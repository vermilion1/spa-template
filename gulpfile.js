'use strict';

var gulp = require('gulp');
var util = require('util');
var extend = util._extend;
var paths = require('./paths');
var pkg = require('./package');
var plugins = extend(require('gulp-load-plugins')(), {
  del: require('del')
});


gulp.task('clean', function(cb) {
  plugins.del(paths.clean.src, cb);
});

gulp.task('connect', function() {
  plugins.connect.server({
    root: paths.connect.root,
    port: 9001,
    livereload: true
  });
});

gulp.task('jshint', function() {
  gulp.src(paths.jshint.src)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('less', function() {
  gulp.src(paths.less.src)
    .pipe(plugins.less())
    .pipe(gulp.dest(paths.less.dest));
});

gulp.task('js', function() {
  gulp.src(paths.js.src)
    .pipe(plugins.browserify())
    .pipe(gulp.dest(paths.js.dest));
});

gulp.task('index', function() {
  // TODO: Add {dev: true}
  // http://smm.zoomquiet.io/data/20131229163601/index.html#gulpenv + scripts property of package.json

  gulp.src(paths.index.src)
    .pipe(plugins.preprocess({context: {title: pkg.title, description: pkg.description}}))
    .pipe(gulp.dest(paths.index.dest));
});

gulp.task('images', function() {
  gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
});

gulp.task('default', ['clean'], function() {
  // TODO: Run index task after the less one

  gulp.start(['less', 'jshint', 'js', 'images', 'index']);
});

gulp.task('watch', ['connect'],  function() {
  // TODO: Disable breaking connect on any error (e.g. less task)

  gulp.watch(paths.less.watch, ['less']);
  //gulp.watch(paths.watch.js, ['js']);
  gulp.watch(paths.index.src, ['index']);
  gulp.watch(paths.jshint.src, ['jshint']);
  gulp.watch(paths.images.src, ['images']);
  gulp.watch(paths.watch.livereload).on('change', plugins.livereload.changed);

  plugins.livereload.listen();
});

gulp.task('dev', ['default'], function() {
  gulp.start(['watch']);
});
