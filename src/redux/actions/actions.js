import { RECIPES_CALL, INPUT_DATA } from './actionTypes';
import axios from 'axios';

export const searchRecipes = ({ recipeInput, recipeStyle }) => dispatch => {
  axios
    .get(
      `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine=${recipeStyle}&instructionsRequired=true&limitLicense=false&number=10&offset=0&query=${recipeInput}`,
      {
        headers: {
          'X-Mashape-Key': API_KEY,
          Accept: 'application/json'
        }
      }
    )
    .then(res => {
      console.log(res);
      console.log(res.headers);
      dispatch({
        type: RECIPES_CALL,
        payload: res.data.results,
        payloadInfo: res.data.totalResults
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const recipeInput = ({ recipeInput }) => ({
  type: INPUT_DATA,
  recipeInput
});
