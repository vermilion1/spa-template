var _ = require('underscore');
var RootLayoutView = require('lib/views/rootLayoutView');

class LayoutView extends RootLayoutView {

  get template () {
    return _.template('Index layout.');
  }

}

module.exports = LayoutView;
