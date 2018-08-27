import React from 'react';
import { Route, Switch } from 'react-router';
import Users from './pages/list/user';
import Css from './pages/css';

export default (
  <Switch>
    <Route exact path="/css" component={Css} />
    <Route exact path="/user" component={Users} />
  </Switch>
);
