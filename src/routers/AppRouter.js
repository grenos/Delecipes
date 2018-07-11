import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header'
import Dashboard from '../components/Dashboard';
import ExpensePage from '../components/ExpensePage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';


const AppRouter = () => (

  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true}/>
        <Route path="/create" component={ExpensePage}/>
        <Route path="/edit/:id?" component={EditPage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>

)

export default AppRouter;