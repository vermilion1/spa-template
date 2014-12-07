var ItemView = require('lib/views/item-view');
var constants = require('constants');
var mediator = require('mediator');
var template = require('../templates/navigation.hbs');

class NavigationView extends ItemView {

  inject (options) {
    super.inject(options);

    this.template = template;
    this.className = 'navigation';
    this.tagName = 'ul';

    this.ui = {
      language: '[data-language]'
    };

    this.events = {
      'click @ui.language': 'languageClickHandler'
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
