import {_} from '../../../vendor';
import Model from '../../../lib/models/model';
import {LANGUAGES} from '../../../helpers/constants';
import polyglot from '../../../helpers/polyglot';


export default class LanguageModel extends Model {

  defaults () {
    return {
      language: LANGUAGES[0]
    };
  }

  validate (attrs) {
    var errors = {};
    if (LANGUAGES.indexOf(attrs.language) === -1) {
      errors.language = polyglot.t('language.invalid');
    }
    return _.isEmpty(errors) ? false : errors;
  }

  get language () {
    return this.get('language');
  }

  set language (language) {
    this.set('language', language, {validate: true});
  }

}
