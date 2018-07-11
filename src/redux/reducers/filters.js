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

export default filtersReducer;
