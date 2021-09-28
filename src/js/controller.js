import icons from "url:../img/icons.svg";
import favicon from "url:../img/favicon.png"; // importing svg file bcs dist can find the icon location

const { id } = require("prelude-ls");
const { async } = require("regenerator-runtime");

const recipeContainer = document.querySelector(".recipe");
const results = document.querySelector(".results"); //list container <ul></ul>

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
//spinner
const renderSpinner = function (parentContainer) {
  const html = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
   </div> 
  `;
  parentContainer.innerHTML = "";
  parentContainer.insertAdjacentHTML("afterbegin", html);
};

const getrecipe = async function () {
  renderSpinner(recipeContainer);
  try {
    const hash = window.location.hash.slice(1); //getting hash
    renderSpinner(recipeContainer);

    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${hash}`,
      {
        mode: "cors",
      }
    );
    if (!response.ok) throw new Error("invalid Id");

    const data = await response.json();
    // {data:{data:{recipe}}} //destuctured
    let { recipe } = data.data;

    recipe = {
      id: recipe.id,
      image: recipe.image_url,
      publisher: recipe.publisher,
      title: recipe.title,
      sourceUrl: recipe.source_url,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(recipe);
    const html = `
    <figure class="recipe__fig">
          <img src="${recipe.image}" crossorigin = "Anonymous" alt="${
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
            <span class="recipe__info-data recipe__info-data--minutes">45</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">4</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icons}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${recipe.ingredients
            .map(function (ingredient) {
              return `<li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${icons}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${ingredient.quantity}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${ingredient.unit}</span>
              ${ingredient.description}
            </div>
          </li>`;
            })
            .join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${
              recipe.publisher
            }</span>. Please check out
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
    recipeContainer.innerHTML = "";
    recipeContainer.insertAdjacentHTML("afterbegin", html);
  } catch (err) {
    alert(err.message);
  }
};

//
const renderList = function () {
  const html = `
<li class="preview">
<a class="preview__link preview__link--active" href="#5ed6604591c37cdc054bc886">
<figure class="preview__fig">
<img src="${favicon}" alt="Test" />
</figure>
  <div class="preview__data">
    <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
      <p class="preview__publisher">The Pioneer Woman</p>
        <div class="preview__user-generated">
          <svg>
              <use href="${icons}#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
   </li>
  `;
  results.innerHTML = "";
  results.insertAdjacentHTML("afterbegin", html);
};

renderList();

results.addEventListener("click", function (e) {
  console.log(e);
});
//prettier-ignore
["load", "hashchange"].forEach(function (event) {
  window.addEventListener(event, getrecipe);
});
