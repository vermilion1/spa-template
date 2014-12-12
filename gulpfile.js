var gulp = require('gulp');
var _ = require('underscore');
var config = require('./config');
var pkg = require('./package');
var args = require('yargs').argv;
var env = args.env || 'production';
var isDev = env === 'development';
var isProd = !isDev;
var extend = _.extend.bind(_);
var plugins = extend(require('gulp-load-plugins')(), {
  sprite: require('css-sprite').stream,
  hbsfy: require('hbsfy').configure({extensions: ['hbs']}),
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

gulp.task('less:common', function() {
  return gulp.src(config.lessCommon.src)
    .pipe(plugins.plumber())
    .pipe(plugins.less())
    .pipe(plugins['if'](isProd, plugins.minifyCss()))
    .pipe(gulp.dest(config.lessCommon.dest))
    .pipe(plugins['if'](isDev, plugins.livereload()));
});

gulp.task('less:app', function() {
  return gulp.src(config.lessApp.src)
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
    .pipe(plugins.traceur({modules: 'amd'}))
    .pipe(plugins['if'](isProd, plugins.uglify()))
    .pipe(gulp.dest(config.jsApp.dest));
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

gulp.task('sprites', function() {
  return gulp.src(config.sprites.src)
    .pipe(plugins.sprite({
      name: config.sprites.name,
      prefix: config.sprites.prefix,
      style: config.sprites.style,
      cssPath: config.sprites.cssPath,
      processor: config.sprites.processor,
      retina: config.sprites.retina
    }))
    .pipe(plugins['if'](config.sprites.imgMask,
      gulp.dest(config.sprites.spriteDest),
      gulp.dest(config.sprites.styleDest))
    );
});

gulp.task('default', ['build'], function () {
  gulp.start('watch');
});

gulp.task('build', ['clean'], function () {
  plugins.sequence(
    ['jshint', 'js:app', 'images', 'sprites'],
    ['less:common', 'less:app'],
    ['html:compile', 'html:min']
  );
});

gulp.task('watch', function() {
  gulp.watch(config.sprites.src, ['sprites']);
  gulp.watch(config.lessCommon.watch, ['less:common', 'less:app']);
  gulp.watch(config.lessApp.src, ['less:app']);
  gulp.watch(config.html.src, ['html:compile', 'html:min']);
  gulp.watch(config.jsApp.watch, ['js:app']);
  gulp.watch(config.jshint.src, ['jshint']);
  gulp.watch(config.images.src, ['images']);
});
