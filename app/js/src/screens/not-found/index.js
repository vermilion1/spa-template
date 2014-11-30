var BaseController = require('../../lib/controllers/controller');
var Layout = require('./main/views/layout');
var Ctrl = BaseController.extend({

  Layout: Layout,

  routes: {
    '*any': 'start'
  },

  onAfterStart() {
    console.log('manage not-found layout here', this.layout);
  }

});

module.exports = Ctrl;
