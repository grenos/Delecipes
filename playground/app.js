import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore'; // redux store config file
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

// we call the default function from the imported configureStore file (we named configure store on the import above) to gewt access to getState() subscribe() etc
const store = configureStore();
// log the current state
console.log(store.getState());

store.dispatch(addExpense({ description: 'Water Bill', amount: 45000 }));
store.dispatch(addExpense({ description: 'Gas Bill', wasPaidAt: 100 }));
store.dispatch(addExpense({ description: 'Phone Bill', amount: 3000 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
console.log(state);

// give access to all components and their childs to the redux store
// by wrapping everything inside the Provider component ( provides the store to all components )
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
