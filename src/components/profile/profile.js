import React, {useEffect, useState, Profiler} from 'react'
import {apiProfileDetail} from './lookup'
import history from '../../history'
import { withRouter, Link } from "react-router-dom";


import ProfileUpdateForm from './profileEdit'
import ContentDiv from '../layout/title'
import '../profile/pic.png'
import './profile.scss'



export function ProfileMain(props){
    const username = localStorage.getItem('userName')
    const [didLookup, setDidLookup] = useState(false)
    const [profile, setProfile] = useState(null)

    
    const handleBackendLookup = (response, status) => {
        if (status === 200) {
            console.log(response)
            setProfile(response)
          
        }
      }
    useEffect(()=>{
    if (didLookup === false){
        apiProfileDetail(username, handleBackendLookup)
        setDidLookup(true)
    }
    }, [username, didLookup, setDidLookup])

    return <ProfileBadge user={profile} onClick={()=>null} />
        
}

export function ProfileBadge(props){
    const {user} = props
    
    
    return  user ? 
        <>
        <ContentDiv icon='ion-ios-person' title='Your Profile' />
        <h1><i className="ion-ios-person"></i> {user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)} {user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1)}</h1>
        <h1><i className="ion-ios-mail"></i> {user.email} <i className="ion-ios-call"></i> {user.number}</h1>
        <h1><i className="ion-ios-home"></i> {user.address1} <i className="ion-ios-home"></i> {user.address2}</h1>
        <h1><i className="ion-ios-pin"></i> {user.city} <i className="ion-ios-pin"></i> {user.postal}</h1>
     <Link to="/profile/edit"><button>Edit </button></Link></> : null
     
    
}



export function UserPicture(){ 
    const userPic = 

            <div className="picBorder" id="picBorder" width="100" height="100"><img src="pic.png" /></div>
    return  userPic
}


export default withRouter(ProfileMain);