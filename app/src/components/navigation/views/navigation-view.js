var ItemView = require('lib/views/item-view');
var constants = require('constants');
var mediator = require('mediator');
var template = require('../templates/navigation.hbs');

class NavigationView extends ItemView {

  get template () {
    return template;
  }

  get tagName () {
    return 'ul';
  }

  get className () {
    return 'navigation';
  }

  events () {
    return {
      'click @ui.language': 'languageClickHandler'
    };
  }

  initialize () {
    this.ui = {
      language: '[data-language]'
    };
  }

  getLanguageFromEvent (e) {
    return e.currentTarget.getAttribute('data-language');
  }

  languageClickHandler (e) {
    e.preventDefault();
    mediator.trigger(constants.EVENTS.CHANGE_LANGUAGE, this.getLanguageFromEvent(e));
  }

}

module.exports = NavigationView;
