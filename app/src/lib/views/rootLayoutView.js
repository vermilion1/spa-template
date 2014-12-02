var LayoutView = require('./layoutView');

class RootLayoutView extends LayoutView {

  get el () {
    return '[data-view]';
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

module.exports = RootLayoutView;
