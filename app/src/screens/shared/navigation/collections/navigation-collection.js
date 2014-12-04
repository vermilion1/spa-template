var Collection = require('lib/collections/collection');

class NavigationCollection extends Collection {

  static get routes () {
    return [
      {href: '#', name: 'Home'},
      {href: '#broken', name: 'Broken link'}
    ];
  }

  initialize () {
    this.add(NavigationCollection.routes);
  }

}

module.exports = NavigationCollection;
