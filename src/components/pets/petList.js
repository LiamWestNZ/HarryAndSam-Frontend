import React, {useEffect, useState} from 'react'
import PetBadge from './components'


import './pets.scss'
import ContentDiv from '../layout/title';



export function PetList(props){
    const {handleBadgeClick, handleGetPetID} = props
    const username = localStorage.getItem('userName')
    const [pets, setPets] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [recievedId, setRecievedId] = useState(0)

    const getPets = async () => {
      const url = `http://localhost:8000/api/pets/${username}`
      setError('')
      setIsLoading(true)
      try {
        const response = await fetch(url)
        const pets = await response.json()
        setPets(pets)
      } catch(error) {
        setError(error.message)
      }
      setIsLoading(false)
    }
  
    useEffect(() => {
      getPets()
    }, [])

    return (
      
        <div className="contentDiv">
        <ContentDiv icon={<i className="ion-ios-paw"></i>} title="Your Pets" />
          
          { error && error }
    { isLoading ? <div>Loading...</div> : <DisplayPets pets={pets} handleBadgeClick={handleBadgeClick} handleGetPetID={handleGetPetID} /> }
        </div>
        
    )
}

// 

export function DisplayPets(props) {
  const {handleBadgeClick, handleGetPetID} = props
  console.log("props:", props)
  const displayPets = props.pets.map(pet =>(
    <PetBadge key={pet.id} {...pet} handleBadgeClick={handleBadgeClick} handleGetPetID={handleGetPetID} />
  ))
  return (
    <div>
      {displayPets}
    </div>
  )
}

export default PetList