import React from 'react'


import {Toolbar} from '../components/toolbar/Toolbar';
import PetMain from '../components/pets/petsMain'




export function Pets () {
        return (
            <div>
                <Toolbar />
                    <div id="container" className="container">
                        <PetMain />
                    </div>
            </div>
        )
    }


export default Pets;