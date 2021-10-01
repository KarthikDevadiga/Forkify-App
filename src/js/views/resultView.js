import icons from "url:../../img/icons.svg";

import { ParentView } from "./ParentView";
class ResultView extends ParentView {
  _parentContainer = document.querySelector(".results");
  /** 

*/
  _generateMarkup() {
    console.log(this._data);
    return this._data.map(this._listMarkup).join("");
  }

  _listMarkup(data) {
    console.log(data);
    return `
    <li class="preview">
    <a class="preview__link preview__link--active" href="${data.id}">
    <figure class="preview__fig">
    <img src="${data.image}" crossorigin = "Anonymous" alt="${data.title}" />
    </figure>
      <div class="preview__data">
        <h4 class="preview__title">${data.title}</h4>
          <p class="preview__publisher">${data.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                  <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
       </li>
      `;
  }
}

export default new ResultView();
