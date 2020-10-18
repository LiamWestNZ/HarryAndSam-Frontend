import React, {useState, useEffect} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import PetList from '../components/pets/petList';
import PetsMain from '../components/pets/petsMain'
import {Toolbar} from '../components/toolbar/Toolbar'
import PetCreate from './petCreate';
import PrivateRoute from '../components/common/PrivateRoute';
import PetsProfile from './PetsProfile'
import { handleIfTrue } from '../components/pets/petProfile';



const handleList = () =>{
    return handleList()
    
}

export function Pets(props){
  return (          
                        <PetsMain handleListCB={handleList} />
        )
    }
export default Pets;