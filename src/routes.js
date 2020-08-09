import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute'


import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
import Pets from './pages/Pets';
import PetProfile from './pages/PetsProfile'
import Profile from './pages/Profile'
import Register from './components/accounts/register'
import Login from './components/accounts/login'
import Logout from './components/accounts/logout'
import ProfileEdit from './pages/ProfileEdit'




export function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard}/>
      <PrivateRoute exact path="/booking" component={Booking} />
      <PrivateRoute exact path="/pets" component={Pets} />
      <PrivateRoute exact path="/pets/detail" component={PetProfile} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute exact path="/profile/edit" component={ProfileEdit} />

      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
    </Switch>
  );
}

export default Routes;