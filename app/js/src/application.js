var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('marionette');

var Index = require('./screens/index');
var NotFound = require('./screens/not-found');

var Application = Marionette.Application.extend({

  initialize: function () {
    this.addLoadListener();
  },

  onBeforeStart: function () {
    this.defineScreens();
    this.startHistory();
    this.hideLoading();
  },

  defineScreens: function () {
    new NotFound({router: true});
    new Index({router: true});
  },

  startHistory: function () {
    Backbone.history.start();
  },

  addLoadListener: function () {
    window.head.ready(_.bind(this.start, this));
  },

  hideLoading: function () {
    $('[data-loading]').fadeOut(600, function () {
      $(this).remove();
    });
  }

});

module.exports = Application;
