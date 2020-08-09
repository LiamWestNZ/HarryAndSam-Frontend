import React from 'react'


import {Toolbar} from '../components/toolbar/Toolbar';
import PetProfile from '../components/pets/petProfile'

import './profile.scss'


export function Pets () {
        return (
            <div>
                <Toolbar />
                    <div id="container" className="container">
                        <PetProfile />
                    </div>
            </div>
        )
    }


export default Pets;