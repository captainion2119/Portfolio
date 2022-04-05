import React from 'react'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import {NavLink} from 'react-router-dom'
import { YinYang } from './AllSVGs'
import { keyframes } from 'styled-components'
import Intro from './Intro'
import { motion } from 'framer-motion' 


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;
h2,h3,h4,h5,h6{
    font-family: 'Karla', sans-serif;
    font-weight: 500;
}
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`

const Blog = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 40%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`

const Project = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 70%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`

const Container = styled.div`
padding: 2rem;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`

const About = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index: 1;
`

const Skills = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(-360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
color: ${props => props.theme.text};
transform: translate(-50%, -50%);
border: none;
outline: none;
background: transparent;
curson: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;
&>*:first-child{
    animation: ${rotate} 1.5s linear infinite;
}
&>*:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
}
`
const DarkDiv = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index: 1;
background: ${props => props.theme.text};
transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {

    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
            <DarkDiv click={click}/>
            <Container>
                <PowerButton />
                <LogoComponent theme={click ? 'dark' : 'light'}/>
                <SocialIcons theme={click ? 'dark' : 'light'}/>
                
                <Center click={click}>
                    <YinYang onClick={()=> handleClick()} width={click ? 100 : 200} height={click ? 100 : 200} fill="currentColor" />
                    <span>Click here</span>
                </Center>

                <Contact target="_blank" to={{pathname:"mailto:adithyakarthik2704@gmail.com"}}>
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay: 1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay: 1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                        Get in touch...
                    </motion.h2>
                </Contact>
                <Blog to="/logs">
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay: 1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay: 1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
                        Dev log.
                    </motion.h2>
                </Blog>
                <Project to="/projects">
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay: 1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay: 1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
                        Projects.
                    </motion.h2>
                </Project>
                <BottomBar>
                    <About to="/about" click={click}>
                        <motion.h2
                        initial={{
                            y:200,
                            transition: { type:'spring', duration: 1.5, delay: 1}
                        }}
                        animate={{
                            y:0,
                            transition: { type:'spring', duration: 1.5, delay: 1}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}>
                            About Me.
                        </motion.h2>
                    </About>
                    <Skills to="/skills">
                        <motion.h2
                        initial={{
                            y:200,
                            transition: { type:'spring', duration: 1.5, delay: 1}
                        }}
                        animate={{
                            y:0,
                            transition: { type:'spring', duration: 1.5, delay: 1}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}>
                            My Skills.
                        </motion.h2>
                    </Skills>
                </BottomBar>
            </Container>
            {click ? <Intro click={click}/> : null}
        </MainContainer>
    )
}

export default Main