// Helpers declaration
// --------------------
// https://github.com/wycats/handlebars.js/#registering-helpers

var Handlebars = require('hbsfy/runtime');
var polyglot = require('polyglot');

/**
 * Polyglot helper.
 */
Handlebars.registerHelper('t', function (string, data) {
  return polyglot.t(string, data);
});

/**
 * Uppercase input string.
 */
Handlebars.registerHelper('uppercase', function (string) {
  return string.toUpperCase();
});
