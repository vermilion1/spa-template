import ItemView from '../../../lib/views/item-view';
import {CHANGE_LANGUAGE} from '../../../helpers/constants';
import mediator from '../../../helpers/mediator';
import template from '../templates/navigation.hbs';

export default class NavigationView extends ItemView {

  /**
   * Inject instance properties.
   * @param {Object} options - Properties.
   */
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

  /**
   * Get the language name from the event.
   * @param {jQuery.Event} e
   * @returns {string} Language name.
   */
  getLanguageFromEvent (e) {
    return e.currentTarget.getAttribute('data-language');
  }

  /**
   * Handle click on language element.
   * Request a language change.
   * @param {jQuery.Event} e
   */
  languageClickHandler (e) {
    e.preventDefault();
    mediator.trigger(CHANGE_LANGUAGE, this.getLanguageFromEvent(e));
  }

}
