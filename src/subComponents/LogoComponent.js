import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Roboto Mono', monospace;
font-weight: 700;
font-size: 50px;

position: fixed;
left: 2rem;
top: 0.7rem;
z-index: 3;

`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
            AK
        </Logo>
    )
}

export default LogoComponent;