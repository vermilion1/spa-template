var ItemView = require('lib/views/item-view');
var template = require('../templates/index.hbs');

class IndexView extends ItemView {

  get template () {
    return template;
  }

  get className () {
    return 'index';
  }

}

module.exports = IndexView;
