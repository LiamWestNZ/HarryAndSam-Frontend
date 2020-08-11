import React from 'react'
import './petBadge.scss'



function PetBadge(props) {
  const { handleBadgeClick, handleGetPetID } = props
  console.log("proppies", props)
  
  return (
    <div className="petBadge" onClick={handleBadgeClick} >
      <h1>{props.name}</h1>
        <span>Pet Type: {props.pet_type}</span>
        <span>Breed: {props.breed}</span>
        <span>Sex: {props.gender}</span>
        
        <button type="button" onClick={handleBadgeClick} onClick={(petId) => handleGetPetID(props.id)} className="">View</button>
      </div>
      
  )
}



export default PetBadge