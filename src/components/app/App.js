import React, { Component } from 'react';

import { Provider } from 'react-redux';
import configureStore from '../../redux/store/configureStore';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../dashboard/Dashboard';
import RecipeList from '../recipeList/RecipeList';
import RecipeDetails from '../recipeDetails/RecipeDetails';
import NotFound from '../notFound/NotFound';

//

//
// //init redux store
// const store = configureStore();

// // monitor state
// const state = store.getState();
// console.log(state);
// //

//
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact={true} component={Dashboard} />
            <Route path="/recipes/" component={RecipeList} />
            <Route
              path="/recipes/recipe/:id?"
              exact={true}
              component={RecipeDetails}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

{
  /* <Provider store={store}> </Provider>; */
}
