export const state = {
  recipe: {},
};

export const loadRecipe = async function (hash) {
  try {
    //
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${hash}`,
      {
        mode: "cors",
      }
    );
    if (!response.ok) throw new Error("invalid Id");

    const data = await response.json();
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
    alert(err.message());
  }
};
