import React, {useEffect, useState} from 'react'
import PetBadge from './components'

import styled from 'styled-components';

import './badge.scss'

const Title = styled.h1`
  font-size: 1.7em;
  text-align: center;
  color: white;
  float: left;
  padding-left: 5px

`;

const TitleDiv = styled.div`
position: relative;
background: #8FC2E9;
height:40px;
width: 100%;
text-decoration-color: #FFFF ;
`;


export function PetList(props){
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
      
        <div className="Badge">
        <TitleDiv>
          <Title><i className="ion-ios-paw"></i> Your Pets</Title>
        </TitleDiv>
          
          { error && error }
        { isLoading ? <div>Loading...</div> : <DisplayPets pets={pets} /> }
        </div>
        
    )
}



export function DisplayPets({ pets }) {
  const displayPets = pets.map(pet => (
    <PetBadge key={pet.id} {...pet} />
  ))
  return (
    <div>
      {displayPets}
    </div>
  )
}

export default PetList