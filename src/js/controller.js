import 'core-js/stable';
import 'regenerator-runtime/runtime';

//importing model
import * as model from './model';

//importing recipeView Class
import recipeView from './views/recipeView';

import icons from 'url:../img/icons.svg';
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

/*
 * fetching api from https://forkify-api.herokuapp.com/v2 site
 * consuming only 1 recipe now
 */
const getData = async function () {
  try {
    const hashId = window.location.hash.slice(1);

    recipeView.renderSpinner(recipeContainer);

    // calling loadRecipe function from model.js
    await model.loadRecipe(hashId);
    // const { recipe } = model.state;
    console.log(model.state.recipe);
    recipeView.render(model.state.recipe);
    // displasys recipe for user from recipe object
  } catch (err) {
    console.error(`error MANUAL ${err}`);
  }
};

// getData();

// window.location.load/hash;
['hashchange', 'load'].forEach((ele) => window.addEventListener(ele, getData));
