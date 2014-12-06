var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('marionette');

// Common components
var Language = require('components/language/index');

// Screens
var NotFound = require('./screens/not-found');
var Index = require('./screens/index');

class Application extends Marionette.Application {

  initialize () {
    this.addLoadListener();
  }

  onBeforeStart () {
    this.defineComponents();
    this.defineScreens();
    this.startHistory();
    this.hideLoading();
  }

  defineComponents () {
    new Language();
  }

  defineScreens () {
    new NotFound({router: true});
    new Index({router: true});
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
