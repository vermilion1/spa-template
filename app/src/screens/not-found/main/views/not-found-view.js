import ItemView from '../../../../lib/views/item-view';

//TODO:
//import template from '../templates/not-found.hbs'
const template = `{{t "not-found.message"}}`;

export default class NotFoundView extends ItemView {

  inject (options) {
    super.inject(options);

    this.template = template;
    this.className = 'not-found';
  }

}
