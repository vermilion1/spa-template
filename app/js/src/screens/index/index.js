var BaseController = require('lib/controllers/controller');
var Layout = require('./main/views/layout');
var Ctrl = BaseController.extend({

  Layout: Layout,

  routes: {
    '': 'start'
  },

  onAfterStart: function () {
    console.log('manage index layout here');
  }

});

module.exports = Ctrl;
