var Controller = require('controller');
var Ctrl = Controller.extend({

  routes: {
    '*any': 'start'
  },

  start() {
    console.log('not-found > start');
  }

});

module.exports = Ctrl;
