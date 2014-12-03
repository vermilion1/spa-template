var RootLayoutView = require('lib/views/rootLayoutView');
var template = require('../templates/layout.hbs');

class LayoutView extends RootLayoutView {

  get template () {
    return template;
  }

}

module.exports = LayoutView;
