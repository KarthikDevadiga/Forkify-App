import { FETCH_URL, RECIPE_PER_PAGE } from './config';
import { getJSON } from './helper';
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
    if (state.bookMarks.some((recipeId) => recipeId.id == hashId))
      state.recipe.bookMark = true;
    else state.recipe.bookMark = false;
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

export const initiateBookMark = function () {
  const currentRecipe = state.recipe;
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
