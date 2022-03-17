import 'core-js/stable';
import 'regenerator-runtime/runtime';
//importing model
import * as model from './model';
//importing recipeView Class
import recipeView from './views/recipeView';
///////////////////////////////////////////////////

const getData = async function () {
  try {
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

// Publisher Scriber Pattern
(function () {
  recipeView.addHandlerRender(getData);
})();
