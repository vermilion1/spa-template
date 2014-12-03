var RootLayoutView = require('lib/views/rootLayoutView');
var NavigationView = require('screens/shared/navigation/views/navigation');
var template = require('../templates/layout.hbs');

class LayoutView extends RootLayoutView {

  get template () {
    return template;
  }

  regions () {
    return {
      navigationRegion: '[data-region="navigation"]',
      contentRegion: '[data-region="content"]'
    };
  }

  onRender () {
    this.navigationRegion.show(new NavigationView());
  }

}

module.exports = LayoutView;
