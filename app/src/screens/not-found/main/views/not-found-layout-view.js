import ScreenLayoutView from '../../../../lib/views/screen-layout-view';
import NavigationView from '../../../../components/navigation/views/navigation-view';
import NotFoundView from './not-found-view';
import template from '../templates/layout.hbs';

export default class LayoutView extends ScreenLayoutView {

  /**
   * @override
   * Inject view properties.
   * @param {Object|undefined} options - View options.
   */
  inject (options) {
    super.inject(options);

    this.template = template;
    this.regions = {
      navigationRegion: '[data-region="navigation"]',
      contentRegion: '[data-region="content"]'
    };
  }

  /**
   * Show navigation region.
   */
  showNavigation () {
    this.navigationRegion.show(new NavigationView());
  }

  /**
   * Show content region.
   */
  showContent () {
    this.contentRegion.show(new NotFoundView());
  }

}
