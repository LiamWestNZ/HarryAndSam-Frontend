import React, {useEffect, useState, Profiler} from 'react'
import {apiProfileDetail} from './lookup'
import history from '../../history'
import { withRouter } from "react-router-dom";


import ProfileUpdateForm from './profileEdit'
import ContentDiv from '../layout/title'
import '../profile/pic.png'
import './profile.scss'



export function ProfileMain(props){
    const username = localStorage.getItem('userName')
    const [didLookup, setDidLookup] = useState(false)
    const [profile, setProfile] = useState(null)
    const [isEdit, setIsEdit] = useState(false)

    
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


    return isEdit === false ? <div className="contentDiv"> <ProfileBadge user={profile} onClick={(()=>{
        setIsEdit(true)
    })} /> </div>:
     <ProfileUpdateForm onCancel={(()=>{
         setIsEdit(false)
     })} onFinish={(()=>{
         setDidLookup(false)
         setIsEdit(false)
     })}/>
        
}

export function ProfileBadge(props){
    const {user} = props
    
    
    return  user ? 
    <div>
    <ContentDiv icon={<i className="ion-ios-person"></i>} title="Your Profile"/>
        <h1><i className="ion-ios-person"></i> {user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)} {user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1)}</h1>
        <h1><i className="ion-ios-mail"></i> {user.email} <i className="ion-ios-call"></i> {user.number}</h1>
        <h1><i className="ion-ios-home"></i> {user.address1} <i className="ion-ios-home"></i> {user.address2}</h1>
        <h1><i className="ion-ios-pin"></i> {user.city} <i className="ion-ios-pin"></i> {user.postal}</h1>
     <button onClick={(event) => props.onClick()} >Edit </button> </div> : null
     
    
}



export function UserPicture(){ 
    const userPic = 

            <div className="picBorder" id="picBorder" width="100" height="100"><img src="pic.png" /></div>
    return  userPic
}


export default withRouter(ProfileMain);