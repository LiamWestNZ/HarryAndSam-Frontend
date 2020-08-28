import React, {useEffect, useState} from 'react'
import './petBadge.scss'



function PetBadge(props) {
  const { handleBadgeClick, handleGetPetID } = props
  
  return (
    <div className="petBadge" id="petBadge" onClick={()=>handleGetPetID(props.id)} >
      <h1>{props.name}</h1>
        <span>Pet Type: {props.pet_type}</span>
        <span>Breed: {props.breed}</span>
        <span>Sex: {props.gender}</span>
        
        <button type="button" className="" onClick={handleBadgeClick} >View</button>
      </div>
      
  )
}



export default PetBadge