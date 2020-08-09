import React, {useState, useEffect} from 'react';
import PetList from '../pets/petList';


function PetsMain(props){
  const [isList, setIsList] = useState(true)
  const [isDetail, setIsDetail] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
 
  return isList === true ? <PetList /> : isDetail === true ? <PetList /> : null
      
    
  }
export default PetsMain;