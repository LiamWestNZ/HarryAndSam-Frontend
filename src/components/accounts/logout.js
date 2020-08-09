import React from 'react';

import { Redirect } from "react-router-dom";
import styled from 'styled-components';

const Flexbox = styled.div`
position: absolute;
background: #8FC2E9;
top:0;
left:0;
bottom:0;
right:0;
height:100%;
width:100%;
`;

export function Logout(props) {
    return (
        <Flexbox>
        <h1 style={{color: "#FFFFFF"}}>Logging out...</h1>
        <Redirect to="/" />
        </Flexbox>
        
    )
}

export default Logout;