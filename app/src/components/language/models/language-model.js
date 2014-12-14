import {_} from '../../../vendor';
import Model from '../../../lib/models/model';
import {LANGUAGES} from '../../../helpers/constants';
import polyglot from '../../../helpers/polyglot';


export default class LanguageModel extends Model {

  /**
   * Default model's values.
   * @returns {Object} Model's values.
   */
  defaults () {
    return {
      language: LANGUAGES[0]
    };
  }

  /**
   * Validate the model.
   * @param {Object} attrs - Model's attributes.
   * @returns {boolean|Object} False if valid, object with errors if not.
   */
  validate (attrs) {
    var errors = {};
    if (LANGUAGES.indexOf(attrs.language) === -1) {
      errors.language = polyglot.t('language.invalid');
    }
    return _.isEmpty(errors) ? false : errors;
  }

  /**
   * Get language attribute.
   * @returns {string} Language attribute.
   */
  get language () {
    return this.get('language');
  }

  /**
   * Set language attribute.
   * Validate the new value.
   * @param {string} language - New attribute value.
   */
  set language (language) {
    this.set('language', language, {validate: true});
  }

}
