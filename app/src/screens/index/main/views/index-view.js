var ItemView = require('lib/views/item-view');
var template = require('../templates/index.hbs');

class IndexView extends ItemView {

  inject (options) {
    super.inject(options);

    this.template = template;
    this.className = 'index';
  }

}

module.exports = IndexView;
