import React from 'react';
import { Route, Switch } from 'react-router';
import Users from './pages/list/user';
import Css from './pages/css';
import { hot } from 'react-hot-loader';

const hotComponent = (com) => hot(module)(com);

export default (
  <Switch>
    <Route exact path="/css" component={Css} />
    <Route exact path="/user" component={hotComponent(Users)} />
  </Switch>
);
