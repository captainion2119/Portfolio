import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'
import astronaut from '../assets/Images/spaceman.png'
import { keyframes } from 'styled-components'
import { mediaQueries } from './Themes'
import { Suspense, lazy } from 'react'
import Loading from '../subComponents/Loading'

const SocialIcons = lazy(() => import('../subComponents/SocialIcons'))
const PowerButton = lazy(() => import('../subComponents/PowerButton'))
const LogoComponent = lazy(() => import('../subComponents/LogoComponent'))
const ParticleComponent = lazy(() => import('../subComponents/ParticleComponent'))
const BigTitle = lazy(() => import('../subComponents/BigTitle'))

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


${mediaQueries(40)`
width: 60vw;
height: 50vh;
top:50%;
left:50%;
transform:translate(-50%,-50%);


`};
${mediaQueries(30)`
width: 50vw;
height: auto;
backdrop-filter: none;
margin-top:2rem;

`};

${mediaQueries(20)`
padding: 1rem;
font-size: calc(0.5rem + 1vw);
`};

`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Suspense fallback={<Loading/>}>
                <Box
                key='skills'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}>
                    <LogoComponent theme='dark' />
                    <SocialIcons theme='dark' />
                    <PowerButton />
                    <ParticleComponent theme='dark'/>
                    <BigTitle text='ABOUT ME.' top='10%' right='5%'/>
                    <Spacesuit>
                        <img src={astronaut} alt='spacecat' />
                    </Spacesuit>
                    <Main
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}>
                        I'm a Student currently living in India. I love to create complex Games and Graphic art. I'm certified in a few languages for now.
                        <br/><br/>
                        I'm interested in the Front-end and the Back-end of Games and the design and planning put into it. I like working on new projects and making stuff in free time. 
                        <br/><br/>
                        Programming, Graphic designing, Developing, Editing is all a form of art that excites me. Feel free to drop a message and lets have a chat.
                    </Main>
                </Box>
            </Suspense>
        </ThemeProvider>
    )
}

export default AboutPage
