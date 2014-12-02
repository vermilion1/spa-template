var BaseController = require('lib/controllers/controller');
var Layout = require('./main/views/layout');

class Ctrl extends BaseController {

  get Layout () {
    return Layout;
  }

  get routes () {
    return {
      '': 'start'
    };
  }

  onAfterStart () {
    console.log('manage index layout here');
  }

}

module.exports = Ctrl;
