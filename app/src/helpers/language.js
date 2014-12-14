import uk from '../../lang/uk.json';
import en from '../../lang/en-us.json';

export default class Language {

  /**
   * @constructor
   * Set languages.
   */
  constructor () {
    this.languages = {
      'uk': uk,
      'en-us': en
    };
  }

  /**
   * Get language dictionary by its name.
   * @param {string} name - Language name.
   * @returns {Object|undefined} Language dictionary.
   */
  getLanguage (name) {
    return this.languages[name];
  }

}
