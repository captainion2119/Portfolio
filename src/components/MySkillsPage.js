import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from './Themes'
import { Design, Develope } from './AllSVGs'
import ParticleComponent from '../subComponents/ParticleComponent'
import { lazy, Suspense } from 'react'
import Loading from '../subComponents/Loading'
import { mediaQueries } from './Themes'

const SocialIcons = lazy(() => import('../subComponents/SocialIcons'))
const PowerButton = lazy(() => import('../subComponents/PowerButton'))
const LogoComponent = lazy(() => import('../subComponents/LogoComponent'))
const BigTitle = lazy(() => import('../subComponents/BigTitle'))

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
${mediaQueries(50)`
flex-direction:column;  
padding:8rem 0;
height:auto;
&>*:nth-child(5){
  margin-bottom:5rem;
}

`};
${mediaQueries(30)`

&>*:nth-child(5){
  margin-bottom:4rem;
}

`};
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
cursor: pointer;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}


${mediaQueries(60)`
height: 55vh;
`};

${mediaQueries(50)`
  width: 50vw;
  height: max-content;

`};
`
const Title = styled.h2`
display: flex;
fill: ${props => props.theme.text};
justify-content: center;
align-items: center;
font-size: calc(1rem + 2vw);
${Main}:hover &{
    &>*{
        fill: ${props => props.theme.body};
    }
}
&>*:first-child{
    margin-right: 1rem;

}
${mediaQueries(60)`
font-size:calc(0.8em + 1vw);
`};

${mediaQueries(50)`
font-size:calc(1em + 2vw);
margin-bottom:1rem;
`};

${mediaQueries(30)`
            font-size:calc(1em + 1vw);
`};
${mediaQueries(25)`
            font-size:calc(0.8em + 1vw);
            svg{
              width:30px;
              height:30px;
            }
`};
`
const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
${Main}:hover &{
color: ${props => props.theme.body};
}
strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}

ul,p{
    margin-left: 2rem;
}

${mediaQueries(50)`
font-size: calc(0.8em + 1vw);

`};

${mediaQueries(30)`
          font-size:calc(0.7em + 1vw);

  

`};

${mediaQueries(25)`
          font-size:calc(0.5em + 1vw);

  

`};
`
const MySkillsPage = () => {
    return (
        <ThemeProvider theme={LightTheme}>
            <Suspense fallback={<Loading/>}>
                <Box>
                    <LogoComponent theme='light' />
                    <SocialIcons theme='light' />
                    <PowerButton />
                    <ParticleComponent theme='light'/>
                    <Main>
                        <Title>
                            <Design width={40} height={40} /> Designer/Editor
                        </Title>
                        <Description>
                            I like using my creativity in making new things.
                        </Description>
                        <Description>
                            <strong>
                                I like to Design
                            </strong>
                            <ul>
                                <li>Thumbnails</li>
                                <li>Product Ads</li>
                                <li>UI/UX</li>
                                <li>Other Visual elements</li>
                            </ul>
                        </Description>
                        <Description>
                            <strong>
                                Tools
                            </strong>
                            <p>Gimp, Adobe AE, Filmora, etc.</p>
                        </Description>
                    </Main>
                    <Main>
                        <Title>
                            <Develope width={40} height={40} /> Dev/Programmer
                        </Title>
                        <Description>
                            I have been learning new languages and frameworks over the years.
                        </Description>
                        <Description>
                            <strong>
                                Skills
                            </strong>
                            <p>
                                C, C++, C#, Java, Python, MySql, Html, React, Css, etc.
                            </p>
                        </Description>
                        <Description>
                            <strong>
                                Tools
                            </strong>
                                <p>Intellij IDEA, Unreal Engine, Unity 3d, Spyder, VS Code, PyCharm, etc.</p>
                        </Description>
                    </Main>
                    <BigTitle text='SKILLS.' top='80%' right='30%'/>
                </Box>
            </Suspense>
        </ThemeProvider>
    )
}

export default MySkillsPage
