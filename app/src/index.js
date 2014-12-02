var Backbone = require('backbone');

// Inject jQuery to the Backbone
Backbone.$ = require('jquery');

// Apply libraries overrides
require('./overrides/templateCache');

var Application = require('./application');
new Application();
