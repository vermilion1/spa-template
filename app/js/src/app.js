var $ = require('../vendor/jquery');
var constants = require('./helpers/constants');

var minLoadTime = constants.MIN_APP_LOAD_TIME;
var diff = new Date() - window.startTime;
var timeout = diff < minLoadTime ? minLoadTime : diff;
var start = function () {
    $('[data-loading]').addClass('loading--finished');
    $('[data-main]').show();
};

setTimeout(start, timeout);
