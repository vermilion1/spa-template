import {$, Backbone, Marionette} from './vendor';
import Language from './components/language/language';
import NotFound from './screens/not-found/not-found';
import Index from './screens/index/index';

// Import just to inject some data
import {} from './helpers/stickit';
import {} from './helpers/handlebars';

export default class Application extends Marionette.Application {

  /**
   * Apply some rules before the app will start.
   * We have to define some shared components.
   * Define application screens.
   * Start the history.
   * Hide loading screen.
   */
  onBeforeStart () {
    this.defineComponents();
    this.defineScreens();
    this.startHistory();
    this.hideLoading();
  }

  /**
   * Define shared components here.
   */
  defineComponents () {
    new Language();
  }

  /**
   * Define application screens here.
   */
  defineScreens () {
    new NotFound({router: true});
    new Index({router: true});
  }

  /**
   * Start the history.
   */
  startHistory () {
    Backbone.history.start();
  }

  /**
   * Hide loading screen.
   */
  hideLoading () {
    $('[data-loading]').fadeOut(600, el => {
      $(el).remove();
    });
  }

}
