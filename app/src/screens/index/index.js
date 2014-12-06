var ScreenCtrl = require('lib/controllers/screen-ctrl');
var Layout = require('./main/views/index-layout-view');

class Ctrl extends ScreenCtrl {

  get Layout () {
    return Layout;
  }

  get routes () {
    return {
      '': 'start'
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

module.exports = Ctrl;
