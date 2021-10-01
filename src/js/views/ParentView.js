import icons from "url:../../img/icons.svg";

export class ParentView {
  _data;

  render(data) {
    this._data = data;
    this._clear();
    console.log(this._generateMarkup());
    this._parentContainer.insertAdjacentHTML(
      "afterbegin",
      this._generateMarkup()
    );
  }

  _clear() {
    this._parentContainer.innerHTML = "";
  }

  renderSpinner() {
    const html = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
         </div> 
        `;
    this._clear();
    this._parentContainer.insertAdjacentHTML("afterbegin", html);
  }

  renderError(message = this._errorMessage) {
    const html = `
    <div class="error">
        <div>
            <svg>
                <use href="${icons}#icon-alert-triangle"></use>
            </svg>
        </div>
        <p>${message}</p>
    </div>
    `;
    this._clear();
    this._parentContainer.insertAdjacentHTML("afterbegin", html);
  }

  renderSuccess(message = this._message) {
    const html = `
    <div class="message">
        <div>
            <svg>
                <use href="${icons}#icon-smile"></use>
            </svg>
        </div>
        <p>${message}</p>
    </div>
    `;
    this._clear();
    this._parentContainer.insertAdjacentHTML("afterbegin", html);
  }
}
