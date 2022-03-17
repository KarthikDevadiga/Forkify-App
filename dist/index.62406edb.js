const recipeContainer = document.querySelector('.recipe');
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
/*
 * fetching api from https://forkify-api.herokuapp.com/v2 site
 * consuming only 1 recipe now
 */ const getData = async function() {
    try {
        const response = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
        const data = await response.json();
        if (data.status !== 'success') throw new Error('Check your Data');
        let { recipe  } = data.data;
        recipe = {
            cookingTime: recipe.cooking_time,
            id: recipe.id,
            imageUrl: recipe.image_url,
            ingredients: recipe.ingredients,
            publisher: recipe.publisher,
            servings: recipe.servings,
            sourceUrl: recipe.source_url,
            title: recipe.title
        };
        console.log(recipe);
    } catch (err) {
        console.log(`error MANUAL ${err}`);
    }
}; // getData();
 // window.location.reload();

//# sourceMappingURL=index.62406edb.js.map
