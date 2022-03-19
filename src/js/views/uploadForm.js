import View from './view';
class UploadForm extends View {
  // form window
  _formWindow = document.querySelector('.add-recipe-window');
  //form
  _parent = document.querySelector('.upload');
  // blur overlay
  _overlay = document.querySelector('.overlay');

  _openBtn = document.querySelector('.nav__btn--add-recipe');

  _closeBtn = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._formWindow.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._closeBtn.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._openBtn.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(func) {
    this._parent.addEventListener('submit', function (e) {
      e.preventDefault();
      // consuming form data all at once
      const dataArr = [...new FormData(this)];
      // converting entries into onject
      const finalData = Object.fromEntries(dataArr);
      func(finalData);
    });
  }
}

export default new UploadForm();
