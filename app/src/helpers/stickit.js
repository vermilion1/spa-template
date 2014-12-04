// Handlers declaration
// --------------------
// https://github.com/NYTimes/backbone.stickit#addhandler

var Stickit = require('backbone.stickit');

/**
 * Display trimmed value.
 */
Stickit.addHandler({
  selector: '[data-stickit-trim]',
  getVal: function($el) {
    return $el.val().trim();
  }
});
