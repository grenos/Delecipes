import { RECIPES_CALL } from './actionTypes';
import axios from 'axios';

export const searchRecipes = ({ recipeInput, recipeStyle }) => dispatch => {
  axios
    .get(
      `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine=${recipeStyle}&instructionsRequired=true&limitLicense=false&number=30&offset=0&query=${recipeInput}`,
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
