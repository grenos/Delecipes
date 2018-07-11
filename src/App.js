import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './components/routers/AppRouter';

import store from './redux/store/configureStore';

// we call the default function from the imported configureStore file (we named configure store on the import above) to gewt access to getState() subscribe() etc
//const store = configureStore();
// log the current state
//console.log(store.getState());

// get reactive (live) updates of our state
store.subscribe(() => {
  // log the current state
  console.log(store.getState());
});

/* give access to all components and their childs to the redux store */
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
