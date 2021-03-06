import icons from 'url:../../img/icons.svg';
import View from './view';
class RecipeView extends View {
  _parent = document.querySelector('.recipe');
  // _recipe = {};
  _message = `Did not find results for your Data`;

  //adding handeler function for book mark
  _addHandlerBookMark(func) {
    this._parent.addEventListener('click', function (e) {
      const bk = e.target.closest('.book-mark');
      if (!bk) return;
      func();
    });
  }

  // adding increase and decreaseing button
  addHandelerTinyButton(func) {
    this._parent.addEventListener('click', function (evt) {
      const btn = evt.target.closest('.btn--tiny');
      // console.log(btn);
      if (!btn) return;
      const serving = +btn.dataset.serving;
      console.log(serving);
      if (serving >= 1) func(serving);
    });
  }
  // prettier-ignore
  _generateMarkup(recipe) {
    return `
        <figure class="recipe__fig">
              <img src="${recipe.imageUrl}" alt="${
      recipe.title
    }" class="recipe__img" />
              <h1 class="recipe__title">
                <span>${recipe.title}</span>
              </h1>
            </figure>
    
            <div class="recipe__details">
              <div class="recipe__info">
                <svg class="recipe__info-icon">
                  <use href="${icons}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${
                  recipe.cookingTime
                }</span>
                <span class="recipe__info-text">minutes</span>
              </div>
              <div class="recipe__info">
                <svg class="recipe__info-icon">
                  <use href="${icons}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${
                  recipe.servings
                }</span>
                <span class="recipe__info-text">servings</span>
    
                <div class="recipe__info-buttons">
                  <button data-serving = ${recipe.servings - 1} class="btn--tiny btn--increase-servings">
                    <svg>
                      <use href="${icons}#icon-minus-circle"></use>
                    </svg>
                  </button>
                  <button data-serving = ${recipe.servings + 1} class="btn--tiny btn--increase-servings">
                    <svg>
                      <use href="${icons}#icon-plus-circle"></use>
                    </svg>
                  </button>
                </div>
              </div>
    
              <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}">
                <svg>
                  <use href="${icons}#icon-user"></use>
                </svg>
              </div>
              <button class="btn--round book-mark">
                <svg class="">
                  <use href="${icons}#icon-bookmark${(recipe.bookMark)?`-fill` : ""}"></use>
                </svg>
              </button>
            </div>
    
            <div class="recipe__ingredients">
              <h2 class="heading--2">Recipe ingredients</h2>
              <ul class="recipe__ingredient-list">
              ${recipe.ingredients.map((ele) => {
                  return `<li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="${icons}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${(ele.quantity) ? ele.quantity : "" }</div>
                <div class="recipe__description">
                  <span class="recipe__unit">${(recipe.unit)? recipe.unit : ""}</span>
                  ${ele.description}
                </div>
              </li>`;
                })
                .join('')}
              </ul>
            </div>
    
            <div class="recipe__directions">
              <h2 class="heading--2">How to cook it</h2>
              <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__publisher">The Pioneer Woman</span>. Please check out
                directions at their website.
              </p>
              <a
                class="btn--small recipe__btn"
                href="${recipe.sourceUrl}"
                target="_blank"
              >
                <span>Directions</span>
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-right"></use>
                </svg>
              </a>
            </div>
        `;
  }

  addHandlerRender(func) {
    // window.location.load/hash;
    ['hashchange', 'load'].forEach((ele) => window.addEventListener(ele, func));
  }
}

export default new RecipeView();
