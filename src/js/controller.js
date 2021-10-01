import resultView from "./views/resultView.js";
//importing SearchView
import searchView from "./views/searchView.js";
//importing state(object) & loadrecipe(method) from model.js
import * as module from "./model.js";
//importing RecipeView class from view.js and creating a object render
import view from "./views/views.js";

import icons from "url:../img/icons.svg";
import favicon from "url:../img/favicon.png"; // importing svg file bcs dist can find the icon location

const { id } = require("prelude-ls");
const { async } = require("regenerator-runtime");

const recipeContainer = document.querySelector(".recipe");
//list container <ul></ul>

// https://forkify-api.herokuapp.com/v2

const getrecipe = async function () {
  try {
    const hash = window.location.hash.slice(1); //getting hash
    if (!hash) return;
    view.renderSpinner();
    //loading from module.js
    await module.loadRecipe(hash);
    const { recipe } = module.state;
    //render into recipe container
    view.render(recipe);
  } catch (err) {
    view.renderError();
  }
};

//search bar
const renderSearch = async function () {
  try {
    resultView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;
    await module.loadSearchResults(query);

    resultView.render(module.state.search.result);
  } catch (err) {
    view.renderError(err.message);
  }
};

//my lines :)
//till here :)

//prettier-ignore

const init = function () {
  view.eventPublisher(getrecipe);
};
init();
//listener for search btn
const searchBtn = function () {
  searchView.searchEvent(renderSearch);
};
searchBtn();
