import Modal from 'antd/lib/modal/Modal';
import React, {useEffect, useState} from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import './petBadge.scss'
import PetsMain from './petsMain'


import './modal.scss'



function PetBadge(props) {
  const [isDelete, setIsDelete] = useState(false)
  
  const handleCloseModal = () =>{
    setIsDelete(false)
  }
  
  
  return (
  <>
  <Modal show={isDelete} handleClose={handleCloseModal}>
          <p>Are you sure you want to delete '{props.name}'?</p>
    </Modal>
    <div className="petBadge">
      <h1>{props.name}</h1>
        <span>Pet Type: {props.pet_type}</span>
        <span>Breed: {props.breed}</span>
        <span>Sex: {props.gender}</span>
        
        
        <button type="button" className="" >View</button>
        <i onClick={()=>setIsDelete(true)} className="ion-ios-trash" />
      </div>
      
  </>    
  )
}


export function DeleteModal(props){
  const {show, handleClose, children} = props
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (

    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>Cancel</button>
      </section>
    </div>
  )
}



export default PetBadge