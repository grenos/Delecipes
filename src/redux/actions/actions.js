import {
  RECIPES_CALL,
  INPUT_DATA,
  RESET_STATE,
  IS_LOADING,
  HAS_ERRORED,
  RECIPE_CALL,
  RECIPE_SUM
} from './actionTypes';

import axios from 'axios';
import { push } from 'react-router-redux';

//! get all recipes
export const searchRecipes = ({
  recipeInput = '',
  recipeStyle = '',
  offset = 0
}) => dispatch => {
  dispatch(callIsLoading());

  axios
    .get(
      `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine=${recipeStyle}&instructionsRequired=true&limitLicense=false&number=4&offset=${offset}&query=${recipeInput}`,
      {
        headers: {
          'X-Mashape-Key': API_KEY,
          Accept: 'application/json'
        }
      }
    )
    .then(res => {
      console.log(res);
      dispatch(getRecipesData(res));
    })
    .then(() => {
      let noSpaceUri = recipeInput.replace(/\s+/g, '-');
      dispatch(push(`/recipes/${noSpaceUri}`));
    })
    .catch(err => {
      dispatch(callHasErrored(err));
    });
};

//! get individual recipe details
export const searchRecipeInfo = ({ id, title }) => dispatch => {
  dispatch(callIsLoading());

  axios
    .get(
      `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information?includeNutrition=false`,
      {
        headers: {
          'X-Mashape-Key': API_KEY,
          Accept: 'application/json'
        }
      }
    )
    .then(res => {
      console.log(res);
      dispatch(getRecipeData(res));
    })
    .then(() => {
      let noSpaceUri = title.replace(/\s+/g, '-');
      dispatch(push(`/recipes/recipe/${id}/${noSpaceUri}`));
    })
    .catch(err => {
      console.log(err);
      dispatch(callHasErrored(err));
    });
};

//! get recipe summary
export const getRecipeSum = id => dispatch => {
  dispatch(callIsLoading());

  axios
    .get(
      `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/summary`,
      {
        headers: {
          'X-Mashape-Key': API_KEY,
          Accept: 'application/json'
        }
      }
    )
    .then(res => {
      console.log(res);
      dispatch(getRecipeSummary(res));
    })
    .catch(err => {
      console.log(err);
      dispatch(callHasErrored(err));
    });
};

export const resetState = () => ({
  type: RESET_STATE
});

export const callIsLoading = () => ({
  type: IS_LOADING
});

export const callHasErrored = err => ({
  type: HAS_ERRORED,
  payloadError: err
});

export const getRecipesData = res => ({
  type: RECIPES_CALL,
  payload: res.data.results,
  payloadInfo: res.data.totalResults
});

export const getRecipeData = res => ({
  type: RECIPE_CALL,
  payload: res.data
});

export const getRecipeSummary = res => ({
  type: RECIPE_SUM,
  payload: res.data.summary
});

export const recipeInput = ({ recipeInput, recipeStyle }) => ({
  type: INPUT_DATA,
  recipeInput,
  recipeStyle
});
