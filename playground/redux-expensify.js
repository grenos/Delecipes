import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//? DEMO STATE

const demoState = {
  expenses: [
    {
      id: 'dfgfgdf',
      description: 'Final rent paid',
      note: 'paid last rent by bank transfer',
      amount: 20000,
      wasPaidAt: 0
    }
  ],
  filters: {
    filterByText: '',
    sortBy: 'amount',
    filterByStartDate: undefined,
    filterByEndDate: undefined
  }
};

//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//! ACTIONS

//* expenses actions

// we are destructuring the expenses object from the state first
// we take the keys we need -- we use the id one directly (like a creating a new one)
// we are naming the object expense.
// lastly we put all the values from the arguments in the expense object

// ADD EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  wasPaidAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    wasPaidAt
  }
});

// REMOVE EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT EXPENSE
// no need for defaults here (no point of calling this function without these values from the ui)
// updatedValues is an object of paramaters passed here
const editExpense = (id, updatedValues) => ({
  type: 'EDIT_EXPENSE',
  id,
  updatedValues
});

//* filtering actions

// FILTER BY TEXT
const textFilter = (text = '') => ({
  type: 'TEXT_FILTER',
  text
});

// FILTER BY AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// FILTER BY DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SET START DATE
//the default value on the filters state is alredy undefined so we dont need to set a default
const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});

// SET END DATE
const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});

//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//! REDUCERS

//* expenses reducer

// we create a const with our default state in case we have to many arguments inside the default state so we dont have to write all the arguments inside the reducers' argument parenthesis
// in this case there aren't any so we leave it empty
const expensesDefaultState = [];

const expensesReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      //state.push(action.expense); //! DONT DO THIS! IT MUTATES ARRAY
      return [...state, action.expense]; // spread the state array first then add the expense object
    case 'REMOVE_EXPENSE':
      // .filter doesn't mutate the array - returns a new one
      // since we pass the expense state in here we can destructure it and take only the id key
      // if id of current selected expense is not equal to action.id then keep if equal filter expense out of state (cut)
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      // we want to map through every expense in the array and find the match with the id provided
      return state.map(expense => {
        // if id of an expense is equal to the one we passed from the action
        if (expense.id === action.id) {
          return {
            // once specific expense object is found spread it (make a new copy)
            ...expense,
            // set new values by spreading any updates coming from the action (amount and note)
            ...action.updatedValues
          };
        } else {
          return state;
        }
      });
    default:
      return state;
  }
};

//* filters reducer

// here we set the default state to have the initial keys of the filter demo state

const filtersDefaultState = {
  text: '',
  sortBy: 'date',
  setStartDate: undefined,
  setEndDate: undefined
};

const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case 'TEXT_FILTER':
      return {
        // spread the state object
        ...state,
        // assign user inputed text value as text value in the object
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        setStartDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        setEndDate: action.endDate
      };
    default:
      return state;
  }
};

//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//! STORE

// we call combine reducers from the store instead of one reducer so we can pass inside it multiple reducers
// combine reducer first takes an object and in it key/value pairs
// the key will be the root state name ( expenses , filters )
// the value will be the reducer that is going to manage that state

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

//* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\
//! DO NOT CARE MUCH
// seperate functions to filter and sort the expenses that are going to be visible after filtering
// its not essential of the redux lecture
// show the expenses objects in store
// destructure the filters object to use its key/values
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return (
    expenses
      .filter(expense => {
        // .filter the expenses array filled with the expense objects
        // and go do things with every individual object (hide, filter etc)
        const startDateMatch =
          typeof startDate !== 'number' || expense.wasPaidAt >= startDate;
        const endDateMatch =
          typeof endDate !== 'number' || expense.wasPaidAt <= endDate;
        const textMatch = expense.description
          .toLowerCase()
          .includes(text.toLowerCase());
        // if all these conditions return true than we can return from filter (if true result will show on screen)
        return startDateMatch && endDateMatch && textMatch;
      })
      // sort expenses by newer created
      .sort((a, b) => {
        if (sortBy === 'date') {
          return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
          return a.amount < b.amount ? 1 : -1;
        }
      })
  );
};
//* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//! SUBSCRIBE

// get reactive (live) updates of our state
store.subscribe(() => {
  //save the state in const pass it down
  const state = store.getState();
  // pass in the expenses and filters store from the state in the function to use (end of document)
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  // see our current state through the function above (so we can filter items)
  console.log(visibleExpenses);
});

//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//! DISPATCHERS

// dispatch an object to the action generator giving it the info we want to update the state with
// when we dispatch an action object we get returned the action object itslef from the dispatcher
// we can then use it to pick individual values from it

const expenseOne = store.dispatch(
  addExpense({ description: 'Rent', amount: 1000 })
);

// we literaly get the action object {expense} and all of its key/values
console.log(expenseOne);

const expenseTwo = store.dispatch(
  addExpense({ description: 'Coffee', amount: 100 })
);

// call to remove specific expense by accessing the id of expenseOne and passing it as paramater
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// to edit we need to pass the id of the expense we want to edit and the object with the values we want to change
store.dispatch(
  editExpense(expenseTwo.expense.id, { amount: 500, note: 'expensive!' })
);

// filter expenses by text / passing the text to the action
store.dispatch(textFilter('rent'));
store.dispatch(textFilter());

// filter expenses by amount(higher first) or date
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// filter expenses by start/end date ( use mock data for date)
store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

//
//
//
//

//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//! NOT GOOD YET! NEED TO CHECK DEEP CLONING AND JSON.parse / JSON.stringify

// const user = {
//   name: 'vasilis',
//   age: 32,
//   nation: 'Greece'
// };

// // if i put 'age' before 'user' it will change it to 99 and then the 'user' will change it back 32
// const newUser = Object.assign(user, { age: 99 }, { sex: 'male' });

// // same result but spread object needs babel plugin
// console.log(newUser);
// console.log({ ...user, sex: 'male' });

// // pull values from new object
// //console.log(newUser.age);
