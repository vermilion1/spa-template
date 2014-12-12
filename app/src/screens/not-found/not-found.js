import ScreenCtrl from '../../lib/controllers/screen-ctrl';
import Layout from './main/views/not-found-layout-view';

export default class Ctrl extends ScreenCtrl {

  get Layout () {
    return Layout;
  }

  get routes () {
    return {
      '*any': 'start'
    };
  }

  onAfterStart () {
    this.showNavigation();
    this.showContent();
  }

  showNavigation () {
    this.layout.showNavigation();
  }

  showContent () {
    this.layout.showContent();
  }

}
