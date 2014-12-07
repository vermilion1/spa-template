var ScreenLayoutView = require('lib/views/screen-layout-view');
var NavigationView = require('components/navigation/views/navigation-view');
var NotFoundView = require('./not-found-view');
var template = require('../templates/layout.hbs');

class LayoutView extends ScreenLayoutView {

  inject (options) {
    super.inject(options);

    this.template = template;
    this.regions = {
      navigationRegion: '[data-region="navigation"]',
      contentRegion: '[data-region="content"]'
    };
  }

  showNavigation (collection) {
    this.navigationRegion.show(new NavigationView({collection: collection}));
  }

  showContent () {
    this.contentRegion.show(new NotFoundView());
  }

}

module.exports = LayoutView;
