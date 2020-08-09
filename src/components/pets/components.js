import React from 'react'
import './petBadge.scss'



function PetBadge(props) {
  const handleClick = (event) =>{
    event.preventDefault()
    console.log(props)
    window.location.href = `/pets/detail`
  }
  return (
    <div onClick={handleClick} className="petBadge">
    
      <h1>{props.name}</h1>
      <span>Pet Type: {props.pet_type}</span>
      <span>Breed: {props.breed}</span>
      <span>Sex: {props.gender}</span>
      <button type="button" className="">View</button>
      </div>
      
  )
}

export default PetBadge