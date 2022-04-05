import React from 'react'
import styled from 'styled-components'
import img from '../assets/Images/hmm1.jpg'
import { Blogs } from '../data/BlogData';
import BlogComponent from '../subComponents/BlogComponent'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import BigTitle from '../subComponents/BigTitle'
import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { mediaQueries } from "./Themes";
import Loading from '../subComponents/Loading';

const AnchorComponent = lazy(() => import("../subComponents/Anchor"));
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));

const MainContainer = styled(motion.div)`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attach: fixed;
background-position: center;
background-attachment: fixed;
`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.5)`};
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;
${mediaQueries(30)`
    padding-top: 7rem;
    
  
  `};
`
const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem; 
`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vh), 1fr));
grid-gap: calc(1rem + 2vw);
${mediaQueries(50)`
grid-template-columns: 100%;



`};
`

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {   
            staggerChildren: 0.5,
            duration: 0.5
        }
    }
}

const BlogPage = () => {

    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
            let num = (window.innerHeight - 70)/30;
            setNumbers(parseInt(num));
    }, [])

    return (
        <Suspense fallback={<Loading />}>
        <MainContainer
        variants = { container }
        initial='hidden'
        animate='show'
        exit={{
            opacity:0, transition:{duration: 0.5}
        }}
        >
            <Container>
                <LogoComponent />
                <PowerButton />
                <SocialIcons />
                <AnchorComponent numbers={numbers}/>
                <Center>
                    <Grid>
                        {
                            Blogs.map(blog => {
                                return <BlogComponent key={blog.id} blog={blog}/>
                            })
                        }
                    </Grid>
                </Center>
                <BigTitle text='DEVLOG.' top='3rem' right='5rem'/>
            </Container>        
        </MainContainer>
        </Suspense>
    )
}

export default BlogPage