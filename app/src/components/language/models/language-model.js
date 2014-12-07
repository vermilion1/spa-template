var _ = require('underscore');
var constants = require('constants');
var Model = require('lib/models/model');
var polyglot = require('polyglot');

class LanguageModel extends Model {

  defaults () {
    return {
      language: constants.LANGUAGES[0]
    };
  }

  validate (attrs) {
    var errors = {};
    if (constants.LANGUAGES.indexOf(attrs.language) === -1) {
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

module.exports = LanguageModel;
