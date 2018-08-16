import React from 'react';
import { Route, Switch } from 'react-router';
import Dashboard from './routes/dashboard';
import Users from './routes/user';
import User from './routes/editUser';

// browserHistory.listen(() => {
//   window.NProgress.start();
//   window.NProgress.done();
// });

export default (
  <Switch>
    <Route exact path="/da" component={Dashboard} />
    <Route exact path="/user" component={Users} />
    <Route exact path="/user/:id" component={User} />
  </Switch>
);
