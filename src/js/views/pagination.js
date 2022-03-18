import { RECIPE_PER_PAGE } from '../config';
import icons from 'url:../../img/icons.svg';

import View from './view';

class Pagination extends View {
  _parent = document.querySelector('.pagination');

  addHandlerPage(fun) {
    this._parent.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const curPage = +btn.dataset.currentPage;
      fun(curPage);
    });
  }

  _generateMarkup() {
    const data = this._data;
    console.log(`current Page ${data.page}`);
    const numPages = Math.ceil(data.recipes.length / RECIPE_PER_PAGE);
    //page 1 and there are other pages
    if (data.page === 1 && numPages > 1) {
      return this._nextPage();
    }
    // last Page
    if (data.page === numPages) {
      return this._PrevPage();
    }
    // other page
    if (data.page < numPages && numPages > 1) {
      return `${this._nextPage()} ${this._PrevPage()}`;
    }

    return '';
  }

  _nextPage() {
    const data = this._data;
    return `
      <button data-current-page ="${
        data.page + 1
      }"  class="btn--inline pagination__btn--next">
            <span>Page ${data.page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
  }
  _PrevPage() {
    const data = this._data;
    return `
    <button data-current-page ="${
      data.page - 1
    }" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${data.page - 1}</span>
  </button>
      `;
  }
}

export default new Pagination();
// render -> _generateMarkup(data)
