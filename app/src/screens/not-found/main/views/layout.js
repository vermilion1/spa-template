var _ = require('underscore');
var RootLayoutView = require('lib/views/rootLayoutView');
var LayoutView = RootLayoutView.extend({

  template: _.template('<div class="not-found">Page not found.</div>')

});

module.exports = LayoutView;
