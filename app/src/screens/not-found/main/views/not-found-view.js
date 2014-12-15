import ItemView from '../../../../lib/views/item-view';
import template from '../templates/not-found.hbs';

export default class NotFoundView extends ItemView {

  /**
   * @override
   * Inject view properties.
   * @param {Object|undefined} options - View options.
   */
  inject (options) {
    super.inject(options);

    this.template = template;
    this.className = 'not-found';
  }

}
