import ItemView from '../../../../lib/views/item-view';

//TODO:
//import template from '../templates/index.hbs'
const template = `{{uppercase (t "index.message")}}
<div>
    <button type="button" class="btn"><span class="icon icon--facebook"></span></button>
    <button type="button" class="btn"><span class="icon icon--twitter"></span></button>
    <button type="button" class="btn"><span class="icon icon--google-plus"></span></button>
</div>`;

export default class IndexView extends ItemView {

  inject (options) {
    super.inject(options);

    this.template = template;
    this.className = 'index';
  }

}
