// Helpers declaration
// --------------------
// https://github.com/wycats/handlebars.js/#registering-helpers

import {Handlebars} from '../vendor';
import polyglot from '../helpers/polyglot';

/**
 * Polyglot helper.
 */
Handlebars.registerHelper('t', (string, data) => polyglot.t(string, data));

/**
 * Uppercase input string.
 */
Handlebars.registerHelper('uppercase', string => string.toUpperCase());
