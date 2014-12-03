var ItemView = require('lib/views/itemView');
var template = require('../templates/navigation.hbs');

class NavigationView extends ItemView {

  get template () {
    return template;
  }

}

module.exports = NavigationView;
