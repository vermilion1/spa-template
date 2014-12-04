var BaseController = require('lib/controllers/controller');
var Layout = require('./main/views/index-layout-view');
var NavigationCollection = require('shared/navigation/collections/navigation-collection');

class Ctrl extends BaseController {

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
    this.layout.showNavigation(new NavigationCollection());
  }

  showContent () {
    this.layout.showContent();
  }

}

module.exports = Ctrl;
