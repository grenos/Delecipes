import { RECIPES_CALL } from '../actions/actionTypes';

const defaultState = {
  recipes: [],
  recipe: {},
  searchData: ''
};

const ApiReducer = (state = defaultState, action) => {
  switch (action.type) {
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
