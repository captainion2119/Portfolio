import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";
import { mediaQueries } from "../components/Themes";

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

${mediaQueries(40)`
font-size:1.5em;
left:1rem;
top:2rem;
`};

`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
            AK
        </Logo>
    )
}

export default LogoComponent;
