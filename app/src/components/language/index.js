var Ctrl = require('lib/controllers/ctrl');
var constants = require('constants');
var mediator = require('mediator');
var polyglot = require('polyglot');
var LanguageModel = require('./models/language-model');

class LanguageCtrl extends Ctrl {

  initialize () {
    this.createModel();
    this.useLanguage();
    this.addListeners();
  }

  createModel () {
    this.model = new LanguageModel();
    this.model.language = this.storedLanguage || this.browserLanguage;
  }

  addListeners () {
    this.listenTo(mediator, constants.EVENTS.CHANGE_LANGUAGE, this.onChangeLanguageRequest);
    this.listenTo(this.model, 'change:language', this.onLanguageChange);
  }

  getLanguageFile (language) {
    return require('lang/' + language + '.json');
  }

  reloadPage () {
    window.location.reload();
  }

  useLanguage (language = this.model.language) {
    this.storedLanguage = language;
    this.replacePolyglot(language);
  }

  replacePolyglot (language) {
    polyglot.replace(this.getLanguageFile(language));
  }

  onLanguageChange (model, language) {
    this.storedLanguage = language;
    this.reloadPage();
  }

  onChangeLanguageRequest (language) {
    if (language !== this.model.language) {
      this.model.language = language;
    }
  }

  get storedLanguage () {
    return localStorage.getItem('language');
  }

  set storedLanguage (language) {
    return localStorage.setItem('language', language);
  }

  get browserLanguage () {
    var language = navigator.languages ?
      navigator.languages[0] :
    navigator.language || navigator.userLanguage;

    return String(language).replace('_', '-');
  }

}

module.exports = LanguageCtrl;
