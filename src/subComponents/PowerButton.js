import React from 'react'
import styled from 'styled-components'
import PowerBtn from '../components/AllSVGs'
import { NavLink } from 'react-router-dom'

const Power = styled.button`
position: fixed;
top: 1.4rem;
left: 50%;
display: flex;
justify-content: center;
align-items: center;    
transform: translate(-50%, 0);
background-color: #0077B6;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;
display: flex;
justify-content: center;
align-items: center;
z-index: 3;

cursor: pointer;

&:hover {
    background-color: rgba(0, 119, 182, 0.7);
    box-shadow: 0 0 8px 6px rgba(0, 119, 182, 0.5);
}

&>*:first-child {
    text-decoration: none;
    color: inherit;
}
`
const PowerButton = () => {
    return (
        <Power>
            <NavLink to="/">
                <PowerBtn width={30} height={30} fill="currentColor" />
            </NavLink>
        </Power>
    )
}

export default PowerButton