import Ctrl from '../../lib/controllers/ctrl';
import LanguageModel from './models/language-model';
import polyglot from '../../helpers/polyglot';
import mediator from '../../helpers/mediator';
import {CHANGE_LANGUAGE} from '../../helpers/constants';
import LanguageHelper from '../../helpers/language';

export default class LanguageCtrl extends Ctrl {

  /**
   * On controller initialize.
   * Create language helpers.
   * Create language model.
   * Use current language.
   * Add controller listeners.
   */
  initialize () {
    this.createHelper();
    this.createModel();
    this.useLanguage();
    this.addListeners();
  }

  /**
   * Create language helpers.
   */
  createHelper () {
    this.languageHelper = new LanguageHelper();
  }

  /**
   * Create language model.
   * Update model's language with the stored one or with browser's language.
   */
  createModel () {
    this.model = new LanguageModel();
    this.model.language = this.storedLanguage || this.browserLanguage;
  }

  /**
   * Add controller listeners.
   */
  addListeners () {
    this.listenTo(mediator, CHANGE_LANGUAGE, this.onChangeLanguageRequest);
    this.listenTo(this.model, 'change:language', this.onLanguageChange);
  }

  /**
   * Get language dictionary.
   * @param {string} lang - Language name.
   * @returns {Object|undefined} Language dictionary.
   */
  getLanguageDictionary (lang) {
    return this.languageHelper.getLanguage(lang);
  }

  /**
   * Reload the page.
   */
  reloadPage () {
    window.location.reload();
  }

  /**
   * Use passed language.
   * Store the new language name.
   * Replace language dictionary.
   * @param {string|undefined} language - Language name.
   */
  useLanguage (language = this.model.language) {
    this.storedLanguage = language;
    this.replacePolyglot(language);
  }

  /**
   * Replace language dictionary.
   * @param {string} language - Language name.
   */
  replacePolyglot (language) {
    polyglot.replace(this.getLanguageDictionary(language));
  }

  /**
   * Handle language change.
   * Store the new language name.
   * Reload the page.
   * @param {LanguageModel} model - Language model.
   * @param {string} language - Language name.
   */
  onLanguageChange (model, language) {
    this.storedLanguage = language;
    this.reloadPage();
  }

  /**
   * Handle language change request.
   * Update language with the passed one.
   * @param {string} language - Language name.
   */
  onChangeLanguageRequest (language) {
    this.model.language = language;
  }

  /**
   * Get stored language name.
   * @returns {string|null} Language name.
   */
  get storedLanguage () {
    return localStorage.getItem('language');
  }

  /**
   * Set stored language name.
   * @param {string|null} language - Language name.
   */
  set storedLanguage (language) {
    return localStorage.setItem('language', language);
  }

  /**
   * Get browser's language name.
   * @returns {string} Language name.
   */
  get browserLanguage () {
    var language = navigator.languages ?
      navigator.languages[0] :
      navigator.language || navigator.userLanguage;

    return String(language).replace('_', '-').toLowerCase();
  }

}
