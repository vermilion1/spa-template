import ItemView from '../../../lib/views/item-view';
import {CHANGE_LANGUAGE} from '../../../helpers/constants';
import mediator from '../../../helpers/mediator';
import template from '../templates/navigation.hbs';

export default class NavigationView extends ItemView {

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
    mediator.trigger(CHANGE_LANGUAGE, this.getLanguageFromEvent(e));
  }

}
