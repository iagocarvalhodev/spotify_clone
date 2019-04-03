import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Browser from '../pages/browse';

const Routes=() => (
  <Switch>
    <Route exact path="/" component={Browser}/>
  </Switch>
)

export default Routes;