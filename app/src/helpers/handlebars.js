// Helpers declaration
// -------------------
// https://github.com/wycats/handlebars.js/#registering-helpers

import {Handlebars, moment} from '../vendor';
import polyglot from './polyglot';

/**
 * Polyglot helper.
 * @param {string} string - Polyglot field name.
 * @param {Object|undefined} data - Polyglot field date
 * @returns {string} Result string.
 */
Handlebars.registerHelper('t', (string, data) => polyglot.t(string, data));

/**
 * Uppercase input string.
 * @param {string} string - Input string.
 * @returns {string} Uppercased string.
 */
Handlebars.registerHelper('uppercase', string => string.toUpperCase());

/**
 * Date format helper.
 * @param {Object} data - Format options
 * @returns {string} Formatted date.
 */
Handlebars.registerHelper('date', options => moment(options.date).format(options.format));
