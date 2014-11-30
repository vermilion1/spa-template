var _ = require('underscore');
var RootLayoutView = require('../../../../lib/views/rootLayoutView');
var LayoutView = RootLayoutView.extend({

  template: _.template('Index layout.')

});

module.exports = LayoutView;
