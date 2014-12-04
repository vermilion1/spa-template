var Backbone = require('backbone');

// Require stickit plugin
require('backbone.stickit');

// Inject jQuery to the Backbone
Backbone.$ = require('jquery');

var Application = require('./application');
new Application();
