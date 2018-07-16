import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../../redux/store/configureStore';

import Dashboard from '../dashboard/Dashboard';
import RecipeList from '../recipeList/RecipeList';
import RecipeDetails from '../recipeDetails/RecipeDetails';
import NotFound from '../notFound/NotFound';

const AppRouter = () => (
  <ConnectedRouter history={history}>
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
  </ConnectedRouter>
);

export default AppRouter;
