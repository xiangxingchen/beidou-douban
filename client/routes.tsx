import React from 'react';
import { Route, Switch } from 'react-router';
import Users from './pages/list/user';

export default (
  <Switch>
    <Route exact path="/user" component={Users} />
  </Switch>
);
