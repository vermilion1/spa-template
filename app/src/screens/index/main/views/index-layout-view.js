import ScreenLayoutView from '../../../../lib/views/screen-layout-view';
import NavigationView from '../../../../components/navigation/views/navigation-view';
import IndexView from './index-view';

//TODO:
//import template from '../templates/layout.hbs'
const template = `<div data-region="navigation"></div>
<div data-region="content"></div>`;

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
    this.contentRegion.show(new IndexView());
  }

}
