var LayoutView = require('./layoutView');
var RootLayoutView = LayoutView.extend({

  el: '[data-view]',

  /**
   * @override
   * Just stop listening.
   * We do not need to remove the layout container.
   * @returns {RootLayoutView}
   */
  remove: function() {
    this.stopListening();
    return this;
  }

});

module.exports = RootLayoutView;
