import { RECIPES_CALL, INPUT_DATA, RESET_STATE } from '../actions/actionTypes';

const defaultState = {
  recipes: [],
  recipe: {},
  searchData: '',
  recipeInput: '',
  recipeStyle: ''
};

const ApiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RESET_STATE:
      return {
        ...state,
        recipes: []
      };
    case INPUT_DATA:
      return {
        ...state,
        recipeInput: action.recipeInput,
        recipeStyle: action.recipeStyle
      };
    case RECIPES_CALL:
      return {
        ...state,
        recipes: [...state.recipes, ...action.payload], // uses babel object spread operator
        searchData: action.payloadInfo
      };
    default:
      return state;
  }
};

export default ApiReducer;
