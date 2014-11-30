var Controller = require('controller');
var Ctrl = Controller.extend({

  /**
   * @type {Marionette.LayoutView?}
   * Base layout class.
   */
  Layout: null,

  /**
   * @type {Object?}
   * Base layout instance.
   */
  layout: null,

  /**
   * @type {boolean}
   * Prevent layout rendering.
   */
  preventRender: false,

  /**
   * Entry point.
   * Here we will:
   *   - create the layout
   *   - render it if possible
   *   - invoke post-action method
   */
  start() {
    this.createLayout();
    this.preventRender || this.renderLayout();
    this.onAfterStart();
  },

  /**
   * Callback that will be executed after starting the controller.
   */
  onAfterStart() {},

  /**
   * Handle controller remove.
   * Here we have to care about layout listeners.
   */
  remove() {
    this.destroyLayout();
  },

  /**
   * Destroy the layout if possible.
   */
  destroyLayout() {
    if (this.layout) {
      this.layout.destroy();
      this.layout = null;
    }
  },

  /**
   * Create the layout if possible.
   */
  createLayout() {
    var Layout = this.Layout;
    if (Layout) {
      this.layout = new Layout();
    }
  },

  /**
   * Render the layout if possible.
   */
  renderLayout() {
    this.layout && this.layout.render();
  }

});

module.exports = Ctrl;
