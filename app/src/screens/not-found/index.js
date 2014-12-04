var BaseController = require('lib/controllers/controller');
var Layout = require('./main/views/not-found-layout-view');
var NavigationCollection = require('shared/navigation/collections/navigation-collection');

class Ctrl extends BaseController {

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
    this.layout.showNavigation(new NavigationCollection());
  }

  showContent () {
    this.layout.showContent();
  }

}

module.exports = Ctrl;
