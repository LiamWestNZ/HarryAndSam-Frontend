// import React, {useState, useEffect} from 'react';
// import PrivateRoute from '../common/PrivateRoute'
// import { Route, Switch, Link } from 'react-router-dom';
// import PetList from './petList';
// import PetProfile from './petProfile';
// import PetCreateForm from './petCreate';






// function PetsMain(props){
//   const [id, setId] = useState(0)
//   const [isList, setIsList] = useState(false)
//   const [isDetail, setIsDetail] = useState(false)
//   const [isEdit, setIsEdit] = useState(false)
//   const [isCreate, setIsCreate] = useState(false)
//   const handleBadgeClick = (id) =>{
//     setId(id)
//     setIsList(false)
//     setIsDetail(true)
//     setIsCreate(false)
    
    

//     }
//   const handleGetPetID = (id) =>{
//     setId(id)
    
//   }
//   const handleAddClick = () =>{
//     setIsList(false)
//     setIsDetail(false)
//     setIsCreate(true)
//   }

//   const handleList = () =>{
//     if(setIsList(true)){
//       return null
//     } else {
//       setIsList(true)
//       setIsDetail(false)
//       setIsCreate(false)
//     }
    
//   }

//   useEffect(()=>{
//     setIsList(true)
//   }, [])


 
//   return isList === true ? <PetList handleBadgeClick={handleBadgeClick} handleGetPetID={(petId) => setId(petId)} handleAddClick={handleAddClick}/>
//   : isDetail === true ?  <PetProfile id={id} />
//   : isCreate === true ? <PetCreateForm /> : null
      
// }

 
  
// export default PetsMain;