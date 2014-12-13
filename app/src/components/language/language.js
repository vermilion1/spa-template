import Ctrl from '../../lib/controllers/ctrl';
import LanguageModel from './models/language-model';
import polyglot from '../../helpers/polyglot';
import mediator from '../../helpers/mediator';
import {CHANGE_LANGUAGE} from '../../helpers/constants';
import LanguageHelper from '../../helpers/language';

export default class LanguageCtrl extends Ctrl {

  initialize () {
    this.createHelper();
    this.createModel();
    this.useLanguage();
    this.addListeners();
  }

  createHelper () {
    this.languageHelper = new LanguageHelper();
  }

  createModel () {
    this.model = new LanguageModel();
    this.model.language = this.storedLanguage || this.browserLanguage;
  }

  addListeners () {
    this.listenTo(mediator, CHANGE_LANGUAGE, this.onChangeLanguageRequest);
    this.listenTo(this.model, 'change:language', this.onLanguageChange);
  }

  getLanguageFile (lang) {
    return this.languageHelper.getLanguage(lang);
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

    return String(language).replace('_', '-').toLowerCase();
  }

}
