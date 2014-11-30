var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('marionette');

var Index = require('./pages/index/index');
var NotFound = require('./pages/not-found/index');

var Application = Marionette.Application.extend({

  initialize() {
    this.addLoadListener();
  },

  onBeforeStart() {
    this.definePages();
    this.startHistory();
    this.hideLoading();
  },

  definePages() {
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
    $('[data-loading]').addClass('loading--finished');
    $('[data-main]').show();
  }

});

module.exports = Application;
