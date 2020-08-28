import React from 'react'


import {Toolbar} from '../components/toolbar/Toolbar';
import PetCreateForm from '../components/pets/petCreate'

import './profile.scss'


export function Pets () {
        return (
            <div>
                <Toolbar />
                    <div id="container" className="container">
                        <PetCreateForm />
                    </div>
            </div>
        )
    }


export default Pets;