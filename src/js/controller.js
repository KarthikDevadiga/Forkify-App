import 'core-js/stable';
import { async } from 'regenerator-runtime';
import 'regenerator-runtime/runtime';
//importing model
import * as model from './model';
//importing recipeView Class
import recipeView from './views/recipeView';
// importing searchView
import searchView from './views/searchView';

import resultView from './views/resultView';

///////////////////////////////////////////////////
if (model.hot) {
  model.hot.accept();
}
const getData = async function () {
  try {
    recipeView.renderSpinner();
    const hashId = window.location.hash.slice(1);
    if (!hashId) return;
    // from model.js
    await model.loadRecipe(hashId);
    // render method
    // displasys recipe for user from recipe object
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(`error MANUAL ${err}`);
  }
};

const searchResults = async function () {
  try {
    resultView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearch(query);
    console.log(model.state.searchResult.recipes);
    resultView.render(model.renderRecipePerPage());
  } catch (err) {
    console.error(err);
  }
};
// prettier-ignore
// Publisher Scriber Pattern
(function () {
  recipeView.addHandlerRender(getData);
  searchView.addHandlearSearch(searchResults);
})();
