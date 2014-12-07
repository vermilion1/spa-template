// Helpers declaration
// --------------------
// https://github.com/wycats/handlebars.js/#registering-helpers

var Handlebars = require('hbsfy/runtime');
var polyglot = require('polyglot');

/**
 * Polyglot helper.
 */
Handlebars.registerHelper('t', (string, data) => polyglot.t(string, data));

/**
 * Uppercase input string.
 */
Handlebars.registerHelper('uppercase', string => string.toUpperCase());
