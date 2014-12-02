var _ = require('underscore');
var path = require('path');

function less(dirs, basePath) {
  var createSource = function(dir) {
    var normalized = path.normalize(basePath + '/' + dir);
    var compatible = normalized.replace(/\\/g, '/');
    return compatible + '/**/*.less';
  };

  return _.map(dirs, createSource);
}

module.exports = less;
