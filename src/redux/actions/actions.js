import {
  RECIPES_CALL,
  INPUT_DATA,
  RESET_STATE,
  IS_LOADING,
  HAS_ERRORED
} from './actionTypes';

import axios from 'axios';
import { push } from 'react-router-redux';

export const searchRecipes = ({
  recipeInput = '',
  recipeStyle = '',
  offset = 0
}) => dispatch => {
  dispatch(callIsLoading());
  axios
    .get(
      `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine=${recipeStyle}&instructionsRequired=true&limitLicense=false&number=10&offset=${offset}&query=${recipeInput}`,
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

export const resetState = () => ({
  type: RESET_STATE
});

export const callIsLoading = () => ({
  type: IS_LOADING
});

export const getRecipesData = res => ({
  type: RECIPES_CALL,
  payload: res.data.results,
  payloadInfo: res.data.totalResults
});

export const callHasErrored = err => ({
  type: HAS_ERRORED,
  payloadError: err
});

export const recipeInput = ({ recipeInput, recipeStyle }) => ({
  type: INPUT_DATA,
  recipeInput,
  recipeStyle
});
