export const state = {
  recipe: {},
};

export const loadRecipe = async function (hashId) {
  try {
    /*
     * fetching api from https://forkify-api.herokuapp.com/v2 site
     * consuming only 1 recipe now
     */
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${hashId}`
    );
    const data = await response.json();
    if (data.status !== 'success') throw new Error('Check your Data');
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
