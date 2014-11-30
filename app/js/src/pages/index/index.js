var Controller = require('controller');
var Ctrl = Controller.extend({

  routes: {
    '': 'start'
  },

  start() {
    console.log('index > start');
  }

});

module.exports = Ctrl;
