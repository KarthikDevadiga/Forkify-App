import { FETCH_URL, KEY, RECIPE_PER_PAGE } from './config';
import { getJSON, sendJSON } from './helper';
export const state = {
  recipe: {},
  searchResult: {
    page: 1,
    query: '',
    recipes: [],
    currentPage: RECIPE_PER_PAGE,
  },
  bookMarks: [],
};
const getFactoredObject = function (data) {
  let { recipe } = data.data;
  return {
    cookingTime: recipe.cooking_time,
    id: recipe.id,
    imageUrl: recipe.image_url,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    servings: recipe.servings,
    sourceUrl: recipe.source_url,
    title: recipe.title,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (hashId) {
  try {
    const data = await getJSON(`${FETCH_URL}${hashId}?key=${KEY}`);
    console.log('data', data);
    state.recipe = getFactoredObject(data);
    if (state.bookMarks.some((recipeId) => recipeId.id == hashId))
      state.recipe.bookMark = true;
    else state.recipe.bookMark = false;
  } catch (err) {
    console.error(err);
  }
};

export const loadSearch = async function (query) {
  try {
    const data = await getJSON(`${FETCH_URL}?search=${query}&key=${KEY}`);
    let { recipes } = data.data;
    state.searchResult.recipes = recipes.map((ele) => {
      return {
        publisher: ele.publisher,
        title: ele.title,
        imageUrl: ele.image_url,
        id: ele.id,
        ...(ele.key && { key: ele.key }),
      };
    });
    state.searchResult.page = 1;
  } catch (err) {
    console.error(`${err} at file model.js`);
    throw err;
  }
};

export const renderRecipePerPage = function (page = state.searchResult.page) {
  state.searchResult.page = page;
  const start = (page - 1) * state.searchResult.currentPage;
  const end = page * state.searchResult.currentPage;

  return state.searchResult.recipes.slice(start, end);
};

export const updateRecipeState = function (recipe) {
  state.recipe.ingredients.forEach(function (ele) {
    ele.quantity = (+ele.quantity * +recipe) / +state.recipe.servings;
  });
  state.recipe.servings = recipe;
};

// setting bookMarks to localStorage
const setLocalStorage = function (bookMarksArr) {
  localStorage.setItem('bookMarks', JSON.stringify(bookMarksArr));
};

const getLocalStorage = function () {
  return localStorage.getItem('bookMarks');
};

export const initiateBookMark = function (currentRecipe) {
  // const currentRecipe = state.recipe;
  state.bookMarks.push(currentRecipe);
  state.recipe.bookMark = true;
  setLocalStorage(state.bookMarks);
  // console.log(state.recipe);
};

export const removeBookMark = function () {
  const index = state.bookMarks.findIndex(
    (recipe) => recipe.id === state.recipe.id
  );
  state.bookMarks.splice(index, 1);
  state.recipe.bookMark = false;
  setLocalStorage(state.bookMarks);
};

const init = function () {
  const storage = getLocalStorage();
  if (!storage) return;
  state.bookMarks = JSON.parse(storage);
  // console.log(JSON.parse(storage));
};

init();

// reciving from  controller
export const newRecipe = async function (recipe) {
  try {
    console.log(Object.entries(recipe));
    const ingredients = Object.entries(recipe)
      .filter(function (ele) {
        return ele[0].startsWith('ingredient') && ele[1] !== '';
      })
      .map(function (ing) {
        const ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3) throw new Error('Problem in input data');
        const [quantity, unity, description] = ing[1]
          .replaceAll(' ', '')
          .split(',');
        return { quantity: quantity ? +quantity : null, unity, description };
      });
    const recipeData = {
      title: recipe.title,
      source_url: recipe.sourceUrl,
      image_url: recipe.image,
      publisher: recipe.publisher,
      cooking_time: +recipe.cookingTime,
      servings: +recipe.servings,
      ingredients,
    };
    const data = await sendJSON(`${FETCH_URL}?key=${KEY}`, recipeData);
    state.recipe = getFactoredObject(data);
    initiateBookMark(state.recipe);
  } catch (err) {
    throw err;
  }
};

export const getRecipe = function () {
  return state.recipe;
};
