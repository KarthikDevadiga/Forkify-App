import icons from 'url:../../img/icons.svg';

export default class View {
  renderSpinner = function () {
    const spinner = `
          <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>
        `;
    this._parent.insertAdjacentHTML('afterbegin', spinner);
  };

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.rendorError();
    this._clearParent(this._parent);
    this._recipe = data;
    this._parent.insertAdjacentHTML('afterbegin', this._generateMarkup(data));
  }

  _clearParent(container) {
    console.log('running');
    container.innerHTML = '';
  }

  rendorError() {
    this._clearParent(this._parent);

    this._parent.insertAdjacentText('afterbegin', this._message);
  }
}
