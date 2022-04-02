import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from '../subComponents/ParticleComponent'
import astronaut from '../assets/Images/spaceman.png'
import { keyframes } from 'styled-components'
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) rotate(-5deg)}
25% { transform: translateY(10px) rotate(15deg)}
50% { transform: translateY(15px) translateX(100px) rotate(-10deg)}
75% { transform: translateY(-10px) translateX(100px) rotate(15deg)}
100% { transform: translateY(-10px) rotate(-5deg)}
`
const Spacesuit = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 60s ease infinite;

img{
    width: 100%;
    height: auto;
}
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;

font-family: 'Ubuntu Mono', monospace;
font-style: italic;

`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
        <Box>
            <LogoComponent theme='dark' />
            <SocialIcons theme='dark' />
            <PowerButton />
            <ParticleComponent theme='dark'/>
            <BigTitle text='ABOUT ME.' top='10%' right='5%'/>
            <Spacesuit>
                <img src={astronaut} alt='spacecat' />
            </Spacesuit>
            <Main>
                I'm a Student currently living in India. I love to create complex Games and Graphic art. I'm certified in a few languages for now.
                <br/><br/>
                I'm interested in the Front-end and the Back-end of Games and the design and planning put into it. I like working on new projects and making stuff in free time. 
                <br/><br/>
                Programming, Graphic designing, Developing, Editing is all a form of art that excites me. Feel free to drop a message and lets have a chat.
            </Main>
        </Box>
        </ThemeProvider>
    )
}

export default AboutPage