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
  start: function () {
    this.createLayout();
    this.preventRender || this.renderLayout();
    this.onAfterStart();
  },

  /**
   * Callback that will be executed after starting the controller.
   */
  onAfterStart: function () {},

  /**
   * Handle controller remove.
   * Here we have to care about layout listeners.
   */
  remove: function () {
    this.destroyLayout();
  },

  /**
   * Destroy the layout if possible.
   */
  destroyLayout: function () {
    if (this.layout) {
      this.layout.destroy();
      this.layout = null;
    }
  },

  /**
   * Create the layout if possible.
   */
  createLayout: function () {
    var Layout = this.Layout;
    if (Layout) {
      this.layout = new Layout();
    }
  },

  /**
   * Render the layout if possible.
   */
  renderLayout: function () {
    this.layout && this.layout.render();
  }

});

module.exports = Ctrl;
