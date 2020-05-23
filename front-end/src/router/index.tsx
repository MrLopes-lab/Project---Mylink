import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Session from '../pages/Session';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Session} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
