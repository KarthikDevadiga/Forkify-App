const { id } = require("prelude-ls");
const { async } = require("regenerator-runtime");

const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const getrecipe = async function () {
  try {
    const response = await fetch(
      // "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
      "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
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
  } catch (err) {
    alert(err.message);
  }
};

getrecipe();
