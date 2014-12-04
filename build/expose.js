var _ = require('underscore');
var glob = require('glob');
var path = require('path');

function screen(screens) {
  return _.map(screens, function (screen) {
    return ['./' + screen, {expose: screen}];
  });
}

function dir(dirs, basePath) {
  var result = [];
  var base;

  _.each(dirs, function (dir, alias) {
    dir = normalizePath(dir + '/');
    alias = normalizePath(alias + '/');
    base = normalizePath([basePath, dir].join('/'));

    _.each(glob.sync(base + '/**/*.js'), function (file) {
      result.push([
        './' + file.replace(base, dir),
        {expose: file.replace(base, alias).replace(/\.js$/, '')}
      ]);
    });
  });

  return result;
}

function file(files) {
  return _.map(_.pairs(files), function (pair) {
    return [pair[1], {expose: pair[0]}];
  });
}

function normalizePath(input) {
  return path.normalize(input + '/').replace(/\\/g, '/');
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
