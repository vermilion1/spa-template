import ScreenCtrl from '../../lib/controllers/screen-ctrl';
import Layout from './main/views/not-found-layout-view';

export default class Ctrl extends ScreenCtrl {

  /**
   * Layout view constructor.
   * @returns {Layout}
   */
  get Layout () {
    return Layout;
  }

  /**
   * Controller routes.
   * @returns {Object}
   */
  get routes () {
    return {
      '*any': 'start'
    };
  }

  /**
   * Do some actions right after controller has started.
   * Here we will show a layout components.
   */
  onAfterStart () {
    this.showNavigation();
    this.showContent();
  }

  /**
   * Show the navigation region.
   */
  showNavigation () {
    this.layout.showNavigation();
  }

  /**
   * Show the content region.
   */
  showContent () {
    this.layout.showContent();
  }

}
