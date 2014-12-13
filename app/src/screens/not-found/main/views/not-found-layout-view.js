import ScreenLayoutView from '../../../../lib/views/screen-layout-view';
import NavigationView from '../../../../components/navigation/views/navigation-view';
import NotFoundView from './not-found-view';
import template from '../templates/layout.hbs';

export default class LayoutView extends ScreenLayoutView {

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
