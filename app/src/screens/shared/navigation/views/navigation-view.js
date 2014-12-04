var CollectionView = require('lib/views/collection-view');
var ChildView = require('./navigation-item-view');

class NavigationView extends CollectionView {

  get tagName () {
    return 'ul';
  }

  get className () {
    return 'navigation';
  }

  get childView () {
    return ChildView;
  }

}

module.exports = NavigationView;
