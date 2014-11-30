var BaseController = require('../../lib/controllers/controller');
var Layout = require('./main/views/layout');
var Ctrl = BaseController.extend({

  Layout: Layout,

  routes: {
    '': 'start'
  },

  onAfterStart() {
    console.log('manage index layout here', this.layout);
  }

});

module.exports = Ctrl;
