// Handlers declaration
// --------------------
// https://github.com/NYTimes/backbone.stickit#addhandler

import {Stickit} from '../vendor';

/**
 * Display trimmed value.
 */
Stickit.addHandler({
  selector: '[data-stickit-trim]',
  getVal: $el => $el.val().trim()
});
