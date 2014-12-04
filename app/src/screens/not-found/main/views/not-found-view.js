var ItemView = require('lib/views/item-view');
var template = require('../templates/not-found.hbs');

class NotFoundView extends ItemView {

  get template () {
    return template;
  }

  get className () {
    return 'not-found';
  }

}

module.exports = NotFoundView;
