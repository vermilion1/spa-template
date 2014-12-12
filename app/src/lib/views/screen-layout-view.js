import LayoutView from './layout-view';

export default class RootLayoutView extends LayoutView {

  /**
   * @override
   * Set an element of the screen layout.
   * @param options {Object|undefined} View options.
   */
  inject (options) {
    super.inject(options);
    this.el = '[data-view]';
  }

  /**
   * @override
   * Just stop listening.
   * We do not need to remove the layout container.
   * @returns {RootLayoutView}
   */
  remove () {
    this.stopListening();
    return this;
  }

}
