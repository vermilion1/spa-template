import {Marionette} from '../../vendor';

export default class LayoutView extends Marionette.LayoutView {

  /**
   * Inject view properties before creating an instance.
   * @param {Object|undefined} options - View options.
   */
  constructor (options) {
    this.inject(options);
    super(options);
  }

  /**
   * Inject view properties.
   * Here we have to define properties such as template, el, tagName etc.
   * Also here they can be easily overridden by child view.
   */
  inject () {}

}
