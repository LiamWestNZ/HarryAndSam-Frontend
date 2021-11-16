import React, { Children } from 'react';

import styled from 'styled-components';
import './content.scss'


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
    border-radius: 15px 15px 0px 0px;
`;



export function ContentDiv(props){
    const {children} = props

    return (
        <div>
            <TitleDiv><Title><i className={props.icon}></i> {props.title} {children}</Title></TitleDiv>
            
            </div>
        
    )
}

export default ContentDiv;