import React, {useState, useEffect} from 'react';
import PetList from '../pets/petList';
import PetProfile from '../pets/petProfile'


function PetsMain(props){
  const [id, setId] = useState(0)
  const [isList, setIsList] = useState(false)
  const [isDetail, setIsDetail] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const handleBadgeClick = () =>{
    setIsList(false)
    setIsDetail(true)
    
    

    }
  const handleGetPetID = (id) =>{
    setId(id)
  }


  useEffect(()=>{
    setIsList(true)
  }, [])

  
 
  return isList === true ? <PetList handleBadgeClick={handleBadgeClick} handleGetPetID={(petId) => setId(petId)} /> : isDetail === true ? <PetProfile id={id}  /> : null
      
    
  }
export default PetsMain;