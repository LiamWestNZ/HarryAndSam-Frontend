import React, {useEffect, useState} from 'react'

import {Picture} from '../../assets/dog.jpg'

import styled from 'styled-components';

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
height: 40px;
width: 100%;
text-decoration-color: #FFFF ;
`;



export function PetProfile(props){
    const {id} = props
    const [isLoading, setIsLoading] = useState(false)
    const [petProfile, setPetProfile] = useState([])
    const [error, setError] = useState('')

    
    const getPetProfile = async () => {
        const url = `http://localhost:8000/api/pets/${id}`
        setError('')
        setIsLoading(true)
        try {
          const response = await fetch(url)
          const pet = await response.json()
          setPetProfile(pet)
          
        } catch(error) {
          setError(error.message)
        }
        setIsLoading(false)
      }
    
      useEffect(() => {
        getPetProfile()
      },[])
    return (
        <div className="Badge">
             <TitleDiv > <Title ><i className="ion-ios-paw"></i> {petProfile.name}'s Profile </Title> </TitleDiv >
            <div id="content" className="content"></div>
                <div id="profilePicture" className="profilePicture"><img src={Picture} height="290px" width="290px"/></div>
                <div id="petInfo" className="petInfo"><DisplayPetInfo profile={petProfile} /></div>
                <div id="serviceFlags" className="scroll"><DisplayServiceInfo profile={petProfile} /><h2>Service Flags</h2></div>
                <div id="serviceFlags" className="scroll"><DisplayHealthInfo profile={petProfile} /><h2>Health Flags</h2></div>
                <div id="notes" className="notes"><DisplayNotes profile={petProfile} /></div>
        </div>

    )
}


export function DisplayPetInfo(props){
    return(
    <div>
        <h3>Name: {handleIfTrue(props.profile.name)}</h3>
        <h3>Pet type: {handleIfTrue(props.profile.pet_type)}</h3>
        <h3>Breed: {handleIfTrue(props.profile.breed)}</h3>
        <h3>Sex: {handleIfTrue(props.profile.gender)}</h3>
        <h3>Sprayed / Neutered: {handleIfTrue(props.profile.son)}</h3>
        <h3>Weight: {handleIfTrue(props.profile.weight)}</h3>
        <h3>Coat colour: {handleIfTrue(props.profile.coat)}</h3>
        <h3>Birth date: {handleIfTrue(props.profile.birthday)}</h3>
    </div>
        )
}

export function handleIfTrue (value){
   return value ? value : "No value entered";
    
}



const handleServiceIfTrue = (alt, prop) =>{
    var flag = `⚠️`
    return prop == true ? `${alt} ${flag}` : null
}

export function DisplayServiceInfo(props){
    console.log(props)
    return (
        <div>
            <h3>{"Vaccine Info:", props.profile.vaccine}</h3>
            <h3>{handleServiceIfTrue("Anxiety", props.profile.anxiety)}</h3>
            <h3>{handleServiceIfTrue("No Perfumes", props.profile.prefumes)}</h3>
            <h3>{handleServiceIfTrue("Cage Aggressive", props.profile.cage)}</h3>
            <h3>{handleServiceIfTrue("No Public Photos", props.profile.photo)}</h3>
            <h3>{handleServiceIfTrue("Fear of Clippers", props.profile.clippers)}</h3>
            <h3>{handleServiceIfTrue("Potential Aggression w/ animals", props.profile.animals)}</h3>
            <h3>{handleServiceIfTrue("Potential Aggression w/ people", props.profile.people)}</h3>
            <h3>{handleServiceIfTrue("Fear of Dryer", props.profile.dryer)}</h3>
            <h3>{handleServiceIfTrue("Fear of nail clipping", props.profile.nail)}</h3>
            <h3>{handleServiceIfTrue("Fear of water", props.profile.water)}</h3>
            <h3>{handleServiceIfTrue("Prone to clipper burn", props.profile.clipper_burn)}</h3>
            <h3>{handleServiceIfTrue("Heavy Shedding", props.profile.shedding)}</h3>
            <h3>{handleServiceIfTrue("Senior pet", props.profile.senior)}</h3>
            <h3>{handleServiceIfTrue("High energy", props.profile.energy)}</h3>
            <h3>{handleServiceIfTrue("Hernia", props.profile.hernia)}</h3>
            <h3>{handleServiceIfTrue("Table/Kennel diver", props.profile.table)}</h3>
            <h3>{handleServiceIfTrue("Team lift", props.profile.team)}</h3>
            <h3>{handleServiceIfTrue("History of biting", props.profile.biting)}</h3>
            <h3>{handleServiceIfTrue("Tends to chew", props.profile.chew)}</h3>
            <h3>{handleServiceIfTrue("Leash required", props.profile.leash)}</h3>
            <h3>{handleServiceIfTrue("Nervous soiler", props.profile.soiler)}</h3>
            <h3>{handleServiceIfTrue("Vocal/Barker", props.profile.barker)}</h3>
        </div>
    )
}

export function DisplayHealthInfo(props){
    return (
        <div>
            <h3>{handleServiceIfTrue("Has Allergies", props.profile.allergies)}</h3>
            <h3>{handleServiceIfTrue("Has anal gland issues", props.profile.anal_gland)}</h3>
            <h3>{handleServiceIfTrue("Has Arthritis", props.profile.athritis)}</h3>
            <h3>{handleServiceIfTrue("Is Blind", props.profile.blind)}</h3>
            <h3>{handleServiceIfTrue("Collapsing Trachea", props.profile.trachea)}</h3>
            <h3>{handleServiceIfTrue("Is Deaf/Poor hearing", props.profile.deaf)}</h3>
            <h3>{handleServiceIfTrue("Is Diabetic", props.profile.diabetic)}</h3>
            <h3>{handleServiceIfTrue("Has Difficulty Standing", props.profile.standing)}</h3>
            <h3>{handleServiceIfTrue("Has Epilepsy", props.profile.epileptic)}</h3>
            <h3>{handleServiceIfTrue("Has Heart Problems", props.profile.heart)}</h3>
            <h3>{handleServiceIfTrue("Has Hot Spots", props.profile.hot)}</h3>
            <h3>{handleServiceIfTrue("Has Hip Dyplasia", props.profile.hip)}</h3>
            <h3>{handleServiceIfTrue("Has Incontinence", props.profile.incontinence)}</h3>
            <h3>{handleServiceIfTrue("Has Kidney Disease", props.profile.kidney)}</h3>
            <h3>{handleServiceIfTrue("Has Moles/Warts", props.profile.moles)}</h3>
            <h3>{handleServiceIfTrue("Has Pancreatitis", props.profile.pancreatitis)}</h3>
            <h3>{handleServiceIfTrue("Prone to Ear Infection", props.profile.ear)}</h3>
            <h3>{handleServiceIfTrue("Has Sensitive Skin", props.profile.skin)}</h3>
            <h3>{handleServiceIfTrue("Has Tooth Decay", props.profile.tooth)}</h3>
            <h3>{handleServiceIfTrue("Has Tumors/Cysts", props.profile.tumors)}</h3>
            <h3>{handleServiceIfTrue("Has Arthritis", props.profile.athritis)}</h3>
        </div>
    )
}

export function DisplayNotes(props){

    return (
        <div>
            <h3>{"Service Notes:", props.profile.notes}</h3>
            <h3>{"Allergie Notes:", props.profile.allergies_notes}</h3>
        </div>
    )
}

export default PetProfile;