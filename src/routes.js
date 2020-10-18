import React from 'react';
import { Route, Switch } from 'react-router-dom';


import PrivateRoutes from '../src/privateroutes'



import Register from './components/accounts/register'
import Login from './components/accounts/login'
import Logout from './components/accounts/logout'




export function Routes() {
  return (
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <PrivateRoutes />

    </Switch>
  );
}

export default Routes;