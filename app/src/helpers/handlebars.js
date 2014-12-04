// Helpers declaration
// --------------------
// https://github.com/wycats/handlebars.js/#registering-helpers

var Handlebars = require('hbsfy/runtime');

/**
 * Uppercase input string.
 */
Handlebars.registerHelper('uppercase', function (string) {
  return string.toUpperCase();
});
