import { FETCH_URL } from './config';
import { getJSON } from './helper';
export const state = {
  recipe: {},
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
