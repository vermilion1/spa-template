import ItemView from '../../../../lib/views/item-view';
import template from '../templates/index.hbs';

export default class IndexView extends ItemView {

  inject (options) {
    super.inject(options);

    this.template = template;
    this.className = 'index';
  }

}
