var _ = require('underscore');
var glob = require('glob');
var path = require('path');

function less(dirs, basePath) {
  var base = path.normalize(basePath + '/').replace(/\\/g, '/');
  var pattern = base + '/+(' + dirs.join('|') + ')/**/*.less';

  return glob.sync(pattern);
}

module.exports = less;
