require([
  'helpers/utils',
  'jquery'
],

function (utils, $) {

  $('[data-loading]').addClass('loading--finished');
  $('[data-main]').show();

});
