import ItemView from '../../../../lib/views/item-view';
import template from '../templates/index.hbs';
import {CREATED_DATE_FORMAT} from '../../../../helpers/constants';

export default class IndexView extends ItemView {

  inject (options) {
    super.inject(options);

    this.template = template;
    this.className = 'index';
  }

  templateHelpers () {
    return {
      now: {
        date: Date.now(),
        format: CREATED_DATE_FORMAT
      }
    };
  }

}
