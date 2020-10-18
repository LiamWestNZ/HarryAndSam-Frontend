import React from 'react';

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
    border-radius: 5px;
`;



export function ContentDiv(props){

    return (
        <React.Fragment>
            <TitleDiv><Title>{props.icon} {props.title}</Title></TitleDiv>
        </React.Fragment>
        
    )
}

export default ContentDiv;