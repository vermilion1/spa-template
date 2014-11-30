var _ = require('underscore');
var Marionette = require('marionette');
var proto = Marionette.TemplateCache.prototype;

_.extend(proto, {

  /**
   * Load view's template.
   * @returns {string}
   */
  loadTemplate: function () {
    return proto.loadTemplate.apply(this, arguments);
  }

});