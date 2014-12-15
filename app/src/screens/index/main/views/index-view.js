import ItemView from '../../../../lib/views/item-view';
import template from '../templates/index.hbs';
import {CREATED_DATE_FORMAT} from '../../../../helpers/constants';
import EventBehavior from '../../../../behaviors/event';

export default class IndexView extends ItemView {

  /**
   * Define view's behaviours.
   * @returns {Object}
   */
  behaviors () {
    return {
      EventBehavior: {
        behaviorClass: EventBehavior
      }
    };
  }

  /**
   * @override
   * Inject view properties.
   * @param {Object|undefined} options - View options.
   */
  inject (options) {
    super.inject(options);

    this.template = template;
    this.className = 'index';
  }

  /**
   * Inject extra data to the template data.
   * @returns {Object}
   */
  templateHelpers () {
    return {
      now: {
        date: Date.now(),
        format: CREATED_DATE_FORMAT
      }
    };
  }

}
