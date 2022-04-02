import React from 'react'
import styled from 'styled-components'
import Me from '../assets/Images/me.png'
import { motion } from 'framer-motion'

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 70vw;
height: 25vh;
display: flex;
background: linear-gradient(to right, ${props => props.theme.body} 50%, ${props => props.theme.text} 50%) bottom, linear-gradient(to right, ${props => props.theme.body} 50%, ${props => props.theme.text} 50%) top;
border-left: 2px solid ${props => props.theme.body};
border-right: 2px solid ${props => props.theme.text};
background-repeat: no-repeat;
background-size: 100% 2px;
z-index: 1;
`
const SubBox = styled(motion.div)`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 60%;
    height: auto;
}
`
const Text = styled(motion.div)`
font-size: calc(1rem + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(3, 5, 94,0.8)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 500;
}

`


const Intro = () => {
    return (
        <Box
        initial={{height: 0}}
        animate={{height: '45vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ duration:1, delay:2 }}
                >
                    <h1>Hi,</h1>
                    <h3> I'm Adithya Karthik.</h3>
                    <h5>I am an Apprentice Game Dev and a Gamer.</h5>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ duration:1, delay:2 }}
                >
                    <img className='pic' src={Me} alt="profile pic" />
                </motion.div>
            </SubBox>
        </Box>
    )

}

export default Intro