var ItemView = require('lib/views/item-view');
var template = require('../templates/not-found.hbs');

class NotFoundView extends ItemView {

  inject (options) {
    super.inject(options);

    this.template = template;
    this.className = 'not-found';
  }

}

module.exports = NotFoundView;
