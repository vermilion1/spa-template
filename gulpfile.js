var gulp = require('gulp');
var _ = require('underscore');
var config = require('./config');
var screens = require('./screens');
var pkg = require('./package');
var expose = require('./build/expose');
var less = require('./build/less');
var args = require('yargs').argv;
var env = args.env || 'production';
var isDev = env === 'development';
var isProd = !isDev;
var each = _.each.bind(_);
var extend = _.extend.bind(_);
var plugins = extend(require('gulp-load-plugins')(), {
  sequence: require('run-sequence'),
  del: require('del')
});

gulp.task('clean', function(cb) {
  return plugins.del(config.clean.src, cb);
});

gulp.task('jshint', function() {
  return gulp.src(config.jshint.src)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('less', function() {
  return gulp.start(['less:common', 'less:app']);
});

gulp.task('less:common', function() {
  return gulp.src(config.lessCommon.src)
    .pipe(plugins.plumber())
    .pipe(plugins.less())
    .pipe(plugins['if'](isProd, plugins.minifyCss()))
    .pipe(gulp.dest(config.lessCommon.dest))
    .pipe(plugins['if'](isDev, plugins.livereload()));
});

gulp.task('less:app', function() {
  return gulp.src(less(screens, config.lessApp.app))
    .pipe(plugins.plumber())
    .pipe(plugins.less())
    .pipe(plugins.concat(config.lessApp.name))
    .pipe(plugins['if'](isProd, plugins.minifyCss()))
    .pipe(gulp.dest(config.lessApp.dest))
    .pipe(plugins['if'](isDev, plugins.livereload()));
});

gulp.task('js:app', function() {
  return gulp.src(config.jsApp.src)
    .pipe(plugins.plumber())
    .pipe(plugins.browserify())
    .on('prebundle', function(bundle) {
      each(expose.screen(screens), expose.require(bundle));
      each(expose.dir(config.jsApp.expose.directories, config.jsApp.expose.basePath), expose.require(bundle));
      each(expose.file(config.jsApp.expose.files), expose.require(bundle));
      each(expose.file(config.jsVendor.require), expose.external(bundle));
    })
    .pipe(plugins.traceur({modules: 'commonjs'}))
    .pipe(plugins['if'](isProd, plugins.uglify()))
    .pipe(gulp.dest(config.jsApp.dest));
});

gulp.task('js:vendor', function() {
  return plugins.sequence(['js:vendor:browserify'], ['js:vendor:concat']);
});

gulp.task('js:vendor:browserify', function() {
  return gulp.src(config.jsVendor.src)
    .pipe(plugins.browserify())
    .on('prebundle', function(bundle) {
      each(expose.file(config.jsVendor.require), function (args) {
        bundle.require.apply(bundle, args);
      });
    })
    .pipe(gulp.dest(config.jsVendor.dest));
});

gulp.task('js:vendor:concat', function() {
  return gulp.src([plugins.traceur.RUNTIME_PATH, config.jsVendorConcat.src])
    .pipe(plugins.concat(config.jsVendorConcat.name))
    .pipe(plugins['if'](isProd, plugins.uglify()))
    .pipe(gulp.dest(config.jsVendorConcat.dest));
});

gulp.task('html', function() {
  return plugins.sequence(['html:compile'], ['html:min']);
});

gulp.task('html:compile', function() {
  return gulp.src(config.html.src)
    .pipe(plugins.preprocess({context: {title: pkg.title, description: pkg.description, env: env}}))
    .pipe(gulp.dest(config.html.dest))
    .pipe(plugins['if'](isDev, plugins.livereload()));
});

gulp.task('html:min', function() {
  return gulp.src(config.htmlMin.src)
    .pipe(plugins.htmlmin({collapseWhitespace: true, minifyJS: true, minifyCSS: true}))
    .pipe(gulp.dest(config.htmlMin.dest));
});

gulp.task('images', function() {
  return gulp.src(config.images.src)
    .pipe(plugins['if'](isProd, plugins.imagemin({progressive: true, interlaced: true})))
    .pipe(gulp.dest(config.images.dest))
    .pipe(plugins['if'](isDev, plugins.livereload()));
});

gulp.task('default', ['build'], function () {
  gulp.start('watch');
});

gulp.task('build', ['clean'], function () {
  plugins.sequence(['jshint', 'js:app', 'js:vendor', 'less', 'images'], ['html']);
});

gulp.task('watch', function() {
  gulp.watch(config.lessCommon.watch, ['less']);
  gulp.watch(config.lessApp.watch, ['less:app']);
  gulp.watch(config.html.src, ['html']);
  gulp.watch(config.jsApp.watch, ['js:app']);
  gulp.watch(config.jsVendor.watch, ['js:vendor']);
  gulp.watch(config.jshint.src, ['jshint']);
  gulp.watch(config.images.src, ['images']);
});
