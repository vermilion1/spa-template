var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('marionette');

var Index = require('./screens/index');
var NotFound = require('./screens/not-found');

var Application = Marionette.Application.extend({

  initialize() {
    this.addLoadListener();
  },

  onBeforeStart() {
    this.defineScreens();
    this.startHistory();
    this.hideLoading();
  },

  defineScreens() {
    new NotFound({router: true});
    new Index({router: true});
  },

  startHistory() {
    Backbone.history.start();
  },

  addLoadListener() {
    window.head.ready(_.bind(this.start, this));
  },

  hideLoading() {
    $('[data-loading]').fadeOut(600, function () {
      $(this).remove();
    });
  }

});

module.exports = Application;
