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

gulp.task('js:app', function() {
  return gulp.src(paths.jsApp.src)
    .pipe(plugins.plumber())
    .pipe(plugins.browserify({external: paths.jsVendor.require}))
    .pipe(plugins.traceur({modules: 'commonjs'}))
    .pipe(gulp.dest(paths.jsApp.dest));
});

gulp.task('js:vendor', function() {
  return plugins.sequence(['js:vendor:browserify'], ['js:vendor:concat']);
});

gulp.task('js:vendor:browserify', function() {
  return gulp.src(paths.jsVendor.src)
    .pipe(plugins.browserify())
    .on('prebundle', function(bundle) {
      paths.jsVendor.require.forEach(function(src) {
        bundle.require(src);
      });
    })
    .pipe(gulp.dest(paths.jsVendor.dest));
});

gulp.task('js:vendor:concat', function() {
  return gulp.src([plugins.traceur.RUNTIME_PATH, paths.jsVendorConcat.src])
    .pipe(plugins.concat(paths.jsVendorConcat.name))
    .pipe(gulp.dest(paths.jsVendorConcat.dest));
});

gulp.task('html', function() {
  return gulp.src(paths.html.src)
    .pipe(plugins.preprocess({context: {title: pkg.title, description: pkg.description, env: env}}))
    .pipe(gulp.dest(paths.html.dest))
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
  plugins.sequence(['jshint', 'js:app', 'js:vendor', 'less', 'images'], ['html']);
});

gulp.task('watch', function() {
  gulp.watch(paths.less.watch, ['less']);
  gulp.watch(paths.html.src, ['html']);
  gulp.watch(paths.jsApp.watch, ['js:app']);
  gulp.watch(paths.jsVendor.watch, ['js:vendor']);
  gulp.watch(paths.jshint.src, ['jshint']);
  gulp.watch(paths.images.src, ['images']);
});
