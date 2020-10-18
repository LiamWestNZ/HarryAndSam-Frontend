import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute'

import ContentDiv from './components/layout/title'
import Toolbar from './components/toolbar/Toolbar'
import PetCreateForm from './components/pets/petCreate'
import Dashboard from './components/dashboard/dashboard'
import Booking from './components/dashboard/dashboard'
import PetList from './components/pets/petList'
import PetProfile from './components/pets/petProfile'
import ProfileMain from './components/profile/profile'
import ProfileEdit from './components/profile/profileEdit'
import PetUpdateForm from './components/pets/petUpdate'

import './page.scss'

export function PrivateRoutes() {
  return (
      <>
    <Toolbar />
    <div id="container" className="container">
      <div id="contentDiv" className="contentDiv">
      <ContentDiv />
        <PrivateRoute exact path="/" component={Dashboard}/>
        <PrivateRoute exact path="/booking" component={Booking} />
        <PrivateRoute exact path="/pets" component={PetList} />
        <PrivateRoute exact path="/pets/create" component={PetCreateForm} />
        <PrivateRoute exact path="/pets/profile/:id" component={PetProfile} />
        <PrivateRoute exact path="/pets/profile/:id/edit" component={PetUpdateForm} />
        <PrivateRoute exact path="/profile" component={ProfileMain} />
        <PrivateRoute exact path="/profile/edit" component={ProfileEdit} />
        </div>
    </div>
      </>
  );
}

export default PrivateRoutes;