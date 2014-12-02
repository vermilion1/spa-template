var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('marionette');
var screens = require('screens');

class Application extends Marionette.Application {

  initialize () {
    this.addLoadListener();
  }

  onBeforeStart () {
    this.defineScreens();
    this.startHistory();
    this.hideLoading();
  }

  defineScreens () {
    _.each(screens, screen => {
      var Screen = require(screen);
      new Screen({router: true});
    });
  }

  startHistory () {
    Backbone.history.start();
  }

  addLoadListener () {
    window.head.ready(this.start.bind(this));
  }

  hideLoading () {
    $('[data-loading]').fadeOut(600, el => {
      $(el).remove();
    });
  }

}

module.exports = Application;
