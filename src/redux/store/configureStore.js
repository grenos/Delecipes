import { createStore, combineReducers } from 'redux';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// we call combine reducers from the store instead of one reducer so we can pass inside it multiple reducers
// combine reducer first takes an object and in it key/value pairs
// the key will be the root state name ( expenses , filters )
// the value will be the reducer that is going to manage that state

// put the create store on a function so we can call it later
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );
  return store;
};
