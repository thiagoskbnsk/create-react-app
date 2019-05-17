import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/home';
import Error404Page from 'pages/home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={Error404Page} />
  </Switch>
);

export default Routes;
