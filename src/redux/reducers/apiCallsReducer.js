import { RECIPES_CALL } from '../actions/actionTypes';

const defaultState = {
  recipes: [],
  recipe: {}
};

const ApiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECIPES_CALL:
      return {
        ...state,
        recipes: action.payload
      };
    default:
      return state;
  }
};

export default ApiReducer;
