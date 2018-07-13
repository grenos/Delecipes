import { RECIPES_CALL, INPUT_DATA } from '../actions/actionTypes';

const defaultState = {
  recipes: [],
  recipe: {},
  searchData: '',
  recipeInput: ''
};

const ApiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INPUT_DATA:
      return {
        ...state,
        recipeInput: action.recipeInput
      };
    case RECIPES_CALL:
      return {
        ...state,
        recipes: action.payload,
        searchData: action.payloadInfo
      };
    default:
      return state;
  }
};

export default ApiReducer;
