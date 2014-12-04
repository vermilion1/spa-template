var Controller = require('backbone.controller');

class Ctrl extends Controller {

  /**
   * @abstract
   * @type {Marionette.LayoutView}
   * Base layout class.
   */
  get Layout () {
    throw new Error('Layout must be overridden!');
  }

  /**
   * @abstract
   * @type {Object}
   * Controller routes.
   */
  get routes () {
    throw new Error('Routes must be defined!');
  }

  /**
   * Entry point.
   * Here we will:
   *   - create and render the layout
   *   - invoke post-action method
   */
  start () {
    this.createLayout();
    this.renderLayout();
    this.onAfterStart();
  }

  /**
   * Callback that will be executed after starting the controller.
   */
  onAfterStart () {}

  /**
   * Handle controller remove.
   * Here we have to care about layout listeners.
   */
  remove () {
    this.destroyLayout();
  }

  /**
   * Destroy the layout if possible.
   */
  destroyLayout () {
    this.layout.destroy();
    this.layout = null;
  }

  /**
   * Create the layout if possible.
   */
  createLayout () {
    this.layout = new this.Layout();
  }

  /**
   * Render the layout if possible.
   */
  renderLayout () {
    this.layout.render();
  }

}

module.exports = Ctrl;
