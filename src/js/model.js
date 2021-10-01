import { API_URL } from "./config";
import { getJason } from "./helper";
export const state = {
  recipe: {},
  search: {
    query: "",
    result: [],
  },
};

export const loadRecipe = async function (hash) {
  try {
    //
    const data = await getJason(`${API_URL}${hash}`);
    // {data:{data:{recipe}}} //destuctured

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
    throw err;
  }
};
// let i = null;
export const loadSearchResults = async function (query) {
  try {
    const url = `${API_URL}?search=${query}`;
    const result = await getJason(url);
    if (result.results < 1) throw new Error("no results found for " + query);
    state.search.result = result.data.recipes.map(function (ele) {
      return {
        id: ele.id,
        title: ele.title,
        publisher: ele.publisher,
        image: ele.image_url,
      };
    });
    // const { recipes } = result.data.data;
  } catch (err) {
    throw err;
  }
  // const
};
