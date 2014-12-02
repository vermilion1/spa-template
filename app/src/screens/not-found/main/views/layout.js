var _ = require('underscore');
var RootLayoutView = require('lib/views/rootLayoutView');

class LayoutView extends RootLayoutView {

  get template () {
    return _.template('<div class="not-found">Page not found.</div>');
  }

}

module.exports = LayoutView;
