//* expenses reducer

// we create a const with our default state in case we have to many arguments inside the default state so we dont have to write all the arguments inside the reducers' argument parenthesis
// in this case there aren't any so we leave it empty
const expensesDefaultState = [];

// we can use export default here with the 'cnst expensesReducer'
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

export default expensesReducer;
