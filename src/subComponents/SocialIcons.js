import React from 'react'
import { NavLink } from 'react-router-dom'
import { Github, Instagram, Twitter, YouTube } from '../components/AllSVGs'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import { motion } from 'framer-motion'
import { mediaQueries } from '../components/Themes'

const Icons = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;

&>*:not(:last-child){
    margin: 0.5rem 0;

}

${mediaQueries(20)`
margin: 0.3rem 0;


`};
${mediaQueries(40)`
left: 1rem;

    svg{
      width:20px;
      height:20px
    }

`};
`


const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};

`
    
const SocialIcons = (props) => {
    return (
        <Icons>
            <motion.div
                initial={{ transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1}}
            >
                <NavLink target="_blank" to={{pathname:"https://github.com/captainion2119"}}>
                    <Github width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.2}}
            >
                <NavLink target="_blank" to={{pathname:"https://twitter.com/CaptainIon"}}>
                    <Twitter width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.4}}
            >
                <NavLink target="_blank" to={{pathname:"https://www.instagram.com/adithya.2119/"}}>
                    <Instagram width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.6}}
            >
                <NavLink target="_blank" to={{pathname:"https://www.youtube.com/channel/UCJiiv--pgcWT4RF0z9LaBow"}}>
                    <YouTube width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </motion.div>
            <Line color={props.theme}
                initial={{
                        height:0
                    }}
                animate={{
                        height: '8rem'
                    }}
                transition={{
                    type:'spring', duration:1, delay:0.8
                }}
            />
        </Icons>
    )
}

export default SocialIcons