import uk from '../../lang/uk.json';
import en from '../../lang/en-us.json';

export default class Language {

  constructor () {
    this.languages = {
      'uk': uk,
      'en-us': en
    };
  }

  getLanguage (name) {
    return this.languages[name];
  }

}
