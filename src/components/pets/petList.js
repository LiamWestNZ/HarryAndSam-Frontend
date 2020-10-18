import React, {useEffect, useState} from 'react'
import PetBadge from './components';
import { Route, Switch, Link } from 'react-router-dom';
import history from '../../history'


import './pets.scss'
import ContentDiv from '../layout/title';




export function PetList(){
    const username = localStorage.getItem('userName')
    const [pets, setPets] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    

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
      

        <>
          
          { error && error }
    { isLoading ? <div>Loading...</div> : <DisplayPets pets={pets} /> }
      </>  
        
    )
}


export function DisplayPets(props) {
  
  
  const displayPets = props.pets.map(pet =>(
    <PetBadge key={pet.id} {...pet}/>
  ))
  return (
    <div>
      {displayPets}
      <Link to="/pets/create"><button className="addButton">+ Pet</button></Link>
    </div>
  )
}

export default PetList