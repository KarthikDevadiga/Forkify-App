import { FETCH_URL, RECIPE_PER_PAGE } from './config';
import { getJSON } from './helper';
export const state = {
  recipe: {},
  searchResult: {
    page: 1,
    query: '',
    recipes: [],
  },
};

export const loadRecipe = async function (hashId) {
  try {
    data = await getJSON(FETCH_URL + hashId);
    let { recipe } = data.data;
    state.recipe = {
      cookingTime: recipe.cooking_time,
      id: recipe.id,
      imageUrl: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      title: recipe.title,
    };
  } catch (err) {
    console.error(err);
  }
};

export const loadSearch = async function (query) {
  try {
    const data = await getJSON(`${FETCH_URL}?search=${query}`);
    let { recipes } = data.data;
    state.searchResult.recipes = recipes.map((ele) => {
      return {
        publisher: ele.publisher,
        title: ele.title,
        imageUrl: ele.image_url,
        id: ele.id,
      };
    });
  } catch (err) {
    console.error(`${err} at file model.js`);
    throw err;
  }
};

export const renderRecipePerPage = function (page = state.searchResult.page) {
  const start = (page - 1) * RECIPE_PER_PAGE;
  const end = page * RECIPE_PER_PAGE;

  return state.searchResult.recipes.slice(start, end);
};
