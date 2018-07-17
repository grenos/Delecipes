import { RECIPES_CALL, INPUT_DATA, RESET_STATE } from './actionTypes';
import axios from 'axios';
import { push } from 'react-router-redux';

export const recipeInput = ({ recipeInput, recipeStyle }) => ({
  type: INPUT_DATA,
  recipeInput,
  recipeStyle
});

export const searchRecipes = ({
  recipeInput = '',
  recipeStyle = '',
  offset = 0
}) => dispatch => {
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
      //console.log(res.config.url);
      console.log(res);
      dispatch(getRecipesData(res));
    })
    .then(() => {
      dispatch(push(`/recipes/${recipeInput}`));
    })
    .catch(err => {
      console.log(err);
    });
};

export const getRecipesData = res => ({
  type: RECIPES_CALL,
  payload: res.data.results,
  payloadInfo: res.data.totalResults
});

export const resetState = () => ({
  type: RESET_STATE
});
