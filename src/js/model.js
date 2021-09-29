import { API_URL } from "./config";
import { getJason } from "./helper";
export const state = {
  recipe: {},
};

export const loadRecipe = async function (hash) {
  try {
    //
    const data = await getJason(`${API_URL}/${hash}`);
    // {data:{data:{recipe}}} //destuctured
    console.log(data);
    let { recipe } = data.data; //here recipe object is recived from api

    state.recipe = {
      id: recipe.id,
      image: recipe.image_url,
      publisher: recipe.publisher,
      title: recipe.title,
      sourceUrl: recipe.source_url,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    alert(err.message());
  }
};
