import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './components/routers/AppRouter';

import store from './redux/store/configureStore';

import '../src/global_styles.css';

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
