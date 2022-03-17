import 'core-js/stable';
import 'regenerator-runtime/runtime';

//importing model
import * as model from './model';

//importing recipeView Class
import recipeView from './views/recipeView';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const getData = async function () {
  try {
    const hashId = window.location.hash.slice(1);

    // calling loadRecipe function from model.js
    await model.loadRecipe(hashId);

    // render method
    // displasys recipe for user from recipe object
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(`error MANUAL ${err}`);
  }
};

// getData();

// window.location.load/hash;
['hashchange', 'load'].forEach((ele) => window.addEventListener(ele, getData));
