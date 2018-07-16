import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Dashboard from '../dashboard/Dashboard';
import RecipeList from '../recipeList/RecipeList';
import RecipeDetails from '../recipeDetails/RecipeDetails';
import NotFound from '../notFound/NotFound';

const AppRouter = () => (
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

export default AppRouter;
