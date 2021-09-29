//importing state(object) & loadrecipe(method) from model.js
import * as module from "./model.js";
//importing RecipeView class from view.js and creating a object render
import view from "./views/views.js";

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

const getrecipe = async function () {
  try {
    const hash = window.location.hash.slice(1);                           //getting hash
    if (!hash) return;
    view.renderSpinner();
    //loading from module.js
    await module.loadRecipe(hash);
    const { recipe } = module.state;
    //render into recipe container
    view.render(recipe);
  } catch (err) {
    alert(err.message);
  }
};

//my lines :)
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
//till here :)

results.addEventListener("click", function (e) {
  if (e.target.closest(".preview__link")) console.log(e.target);
});
//prettier-ignore
["load", "hashchange"].forEach(function (event) {
  window.addEventListener(event, getrecipe);
});
