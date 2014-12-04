var ItemView = require('lib/views/item-view');
var template = require('../templates/navigation-item.hbs');

class NavigationItemView extends ItemView {

  get template () {
    return template;
  }

  get tagName () {
    return 'li';
  }

}

module.exports = NavigationItemView;
