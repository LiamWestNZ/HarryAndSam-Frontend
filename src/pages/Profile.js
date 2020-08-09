import React from 'react'

import {Toolbar} from '../components/toolbar/Toolbar'
import {ProfileMain} from '../components/profile/profile'

import './profile.scss'


export function Profile () {
        return (
        <div>
                <Toolbar />
                        <div id="container" className="container">
                        
                        <ProfileMain />

                        </div>
                
        </div>
        )
        }
export default Profile;