import { createStore } from 'redux';
//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// ACTION GENERATORS - functions that return action objects

//? destructuring
// pass the object that was dispatched from the arg function in the dispatcher
// set it to default to an empty object if we dispach it without an argument
// destructure it (only key/value pair inside is incrementBy )
// set the incrementBy key to default to 1 if we dispatch without any params
//*
// fnaly if we dispatch without any params ( here it will look for params -- will not find -- it will default to an empty object -- it will look for key/values in the object -- will not find -- will set default incrementBy = 1)
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  // when key and value have the same name we only use one ES6
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

// we provide the value on the 'reducer'
const reset = () => ({
  type: 'RESET'
});

const set = ({ set } = {}) => ({
  type: 'SET',
  set
});

//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// REDUCER

// reducers are pure functions -- CAN NOT rely on outside data to compute new state
// reducers should only take data in through the 'state' and 'action' parameters
// never mutate state -- this is why we allways return a new object

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': // if action matches
      // update state with new values
      return {
        name: action.type,
        // need to use state.count so we dont mutate the actual state
        // by using the values to calculate the new state
        // instead of saying count: action.incrementBy
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        name: action.type,
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        name: action.type,
        count: state.count + action.set
      };
    case 'RESET':
      return {
        name: action.type,
        count: 0
      };
    // if not
    default:
      // return same state unchnged
      return state;
  }
};

//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// create store expects a function as its first argument ALWAYS
// later we will replace it with the reducer function
// setting state to default ( object with count property) because we have no state now
// second argument is the action parameter so it can accept all the actions we sent to it

const store = createStore(countReducer);

//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// subscribe let us watch for changes in the redux store/state so w can update our app every times something changes
// always gets passed a function as an argumet
//* now we see a log of every state change (all dispatch call in this case)
store.subscribe(() => {
  // get state returns the current state object
  console.log(store.getState());
});

//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//? SWITCHED TO ACTION GENERATORS """" SEE ABOVE """"
// ACTION - an object with some instructions that gets sent to the store
// we send an action to the store by using store.dispatch()
// we can have any aditional info we want on an action (beside type) like api calls

// increment
// dynamic action
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

//generic action
// store.dispatch({
//   type: 'INCREMENT'
// });

// // reset
// //generic action
// store.dispatch({
//   type: 'RESET'
// });

// // decrement
// // dynamic action
// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });

// //generic action
// store.dispatch({
//   type: 'DECREMENT'
// });

// // hard coded values
// // we dont need to check if value exists r what kind of value is etc..
// store.dispatch({
//   type: 'SET',
//   count: 101
// });

//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// DISPATCHERS
// here we call the action generator for specific acion object and we pass their arguments

// increments
// call the fnction generator passing as argument a function with an arg being an object with our instructions
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// decrements
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

//set
store.dispatch(set({ set: 100 }));

// reset
store.dispatch(reset({ count: 0 }));
