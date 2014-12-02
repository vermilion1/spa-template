var _ = require('underscore');
var glob = require('glob');
var path = require('path');

function screen(screens) {
  return _.map(screens, function (screen) {
    return ['./' + screen, {expose: screen}];
  });
}

function dir(dirs, basePath) {
  var base = path.normalize(basePath + '/').replace(/\\/g, '/');
  var pattern = base + '/+(' + dirs.join('|') + ')/**/*.js';
  var files = glob.sync(pattern);

  return _.map(files, function (file) {
    var path = file.replace(base, '');
    var expose = path.replace(/\.js$/, '');

    return ['./' + path, {expose: expose}];
  });

}

function file(files) {
  return _.map(_.pairs(files), function (pair) {
    return [pair[1], {expose: pair[0]}];
  });
}

function withBundle(bundle, method) {
  return function (args) {
    bundle[method].apply(bundle, args);
  }
}

function requireBundle(bundle) {
  return withBundle(bundle, 'require');
}

function externalBundle(bundle) {
  return withBundle(bundle, 'external');
}

module.exports = {
  screen: screen,
  dir: dir,
  file: file,
  require: requireBundle,
  external: externalBundle
};
