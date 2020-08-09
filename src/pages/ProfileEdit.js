import React from 'react'

import {Toolbar} from '../components/toolbar/Toolbar'
import {ProfileUpdateForm} from '../components/profile/profileEdit'

import './profile.scss'


export function ProfileEdit () {
        return (
        <div>
                <Toolbar />
                        <div id="container" className="container">
                        
                        <ProfileUpdateForm />

                        </div>
                
        </div>
        )
        }
export default ProfileEdit;