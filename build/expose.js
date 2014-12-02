var _ = require('underscore');
var glob = require('glob');
var path = require('path');

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

module.exports = {
  dir: dir,
  file: file
};
