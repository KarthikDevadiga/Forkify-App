import icons from 'url:../../img/icons.svg';

export default class View {
  _data;
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
    console.log(data);
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.rendorError();
    this._clearParent(this._parent);
    this._data = data;
    this._parent.insertAdjacentHTML(
      'afterbegin',
      this._generateMarkup(this._data)
    );
  }

  _clearParent(container) {
    console.log('running');
    container.innerHTML = '';
  }

  rendorError(msg = this._message) {
    this._clearParent(this._parent);

    this._parent.insertAdjacentText('afterbegin', msg);
  }
}
