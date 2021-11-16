
import React, {useEffect, useState} from 'react'
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './petBadge.scss'



import './modal.scss'



function PetBadge(props) { 
  const [isDelete, setIsDelete] = useState(false)
  const {removePet} = props


  const handleDeletePet = (id) =>{
    axios.delete(`http://localhost:8000/api/pets/${id}/delete`, id)
      .then((response =>{
        console.log(response, "RESPONSE:", response.request.reponse)
      }))
    setIsDelete(false)
    removePet(id)
  }
  
  const handleCloseModal = () =>{
    setIsDelete(false)
  }


 
  
  
  return (
    
  <>
  <DeleteModal show={isDelete} handleClose={handleCloseModal} petID={props.id} removePet={removePet} handleDeletePet={handleDeletePet}>
          <p>Are you sure you want to delete '{props.name}'?</p>
    </DeleteModal>
  
    <div className="petBadge" >
    
      <h1>{props.name}</h1>
        <span>Pet Type: {props.pet_type}</span>
        <span>Breed: {props.breed}</span>
        <span>Sex: {props.gender}</span>
        
        
        <Link to={`/pets/profile/${props.id}`}><button type="button" className="" >View</button></Link>
        <i onClick={()=>setIsDelete(true)} className="ion-ios-trash" />
      </div>
      
  </>    
  )
}


export function DeleteModal(props){
  const {show, handleClose, handleDeletePet, petID, children, removePet} = props
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  

  return (

    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={()=>handleDeletePet(petID)}>Delete</button>
        <button onClick={()=>handleClose()}>Cancel</button>
      </section>
    </div>
  )
}



export default PetBadge