var Backbone = require('backbone');

// Require custom stickit handlers
require('./helpers/stickit');

// Require custom handlebars helpers
require('./helpers/handlebars');

// Inject jQuery to the Backbone
Backbone.$ = require('jquery');

var Application = require('./application');
new Application();
