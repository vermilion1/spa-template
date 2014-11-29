var $ = require('$');
var constants = require('constants');

window.head.ready(function () {

  var minLoadTime = constants.MIN_APP_LOAD_TIME;
  var diff = new Date() - window.startTime;
  var timeout = diff < minLoadTime ? minLoadTime : diff;
  var start = function () {
    $('[data-loading]').addClass('loading--finished');
    $('[data-main]').show();
  };

  setTimeout(start, timeout);

});
