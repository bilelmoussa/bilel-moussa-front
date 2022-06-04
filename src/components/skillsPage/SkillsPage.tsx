import React from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import AppLayout from '../../layout/AppLayout'


const Container = styled('div')`
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    margin-top: 50px;
`

const SkillsHeader = styled(Typography)`
  font-size: 45px;
  font-family: 'Verdana';
  letter-spacing: 2.5px;
  color: #19C706;
  font-weight: bold;
`

const SkillsDescription = styled(Typography)`
  font-family: 'Arial';
  font-size: 22px;
  color: #C9C9C9;
  letter-spacing: 1.5px;
  margin-top: 20px; 
  line-height: 1.7em;
  @media only screen and (max-width: 900px){
    max-width: 600px;
  }
`

const RectangleShape = styled('div')`
  display: block;
  height: 20px;
  width: 100px;
  background-color: #2A2A2A;
  margin-top: 100px;
  @media only screen and (max-width: 1024px){
    margin-top: 50px;
  }
`

const H2Header = styled(Typography)`
  font-size: 30px;
  font-family: 'Verdana';
  letter-spacing: 2.5px;
  color: #19C706;
  font-weight: bold;
`

const MainSkillsCotainer = styled('div')`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`

const SkillCard = styled('div')`
  background-color: #2A2A2A;
  justify-content: center;
  overflow: hidden;
  padding: 1em 1.5em;
  margin-right: 20px;
  margin-top: 20px;
  width: 20%;
  min-width: 100px;
  @media only screen and (max-width: 600px){
    width: 45%;
    margin-right: 10px;
    margin-top: 10px;
  }
`

const SkillName = styled(Typography)`
  font-size: 20px;
  font-family: 'Arial';
  margin-top: 15px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  text-align: center;
  @media only screen and (max-width: 900px){
    font-size: 16px;
  }
  @media only screen and (max-width: 600px){
    font-size: 18px;
  }
  @media only screen and (max-width: 320px){
    font-size: 16px;
  }

`

const SkillImg = styled('img')`
  display: block;
  width: 70%;
  margin: 0 auto;
  height: auto;
  min-width: 128px;
  aspect-ratio: 1 / 1;
`

export default function SkillsPage() {
    return (
        <AppLayout>
            <Container>
                <SkillsHeader variant="h1">Skills</SkillsHeader>
                <SkillsDescription>I've been coding for over 4 years. In that time I've worked with and picked up many things. Most of my work in react or react native. More recently, TypeScript and Docker
                </SkillsDescription>
                <SkillsDescription mt={1}>
                    I also have full-stack developer experience with MERN Stack and WordPress.
                </SkillsDescription>

                <RectangleShape />
                <H2Header mt={2} variant="h2">Front-end Skills</H2Header>

                <MainSkillsCotainer>
                    <SkillCard>
                        <SkillImg
                            src={'../img/html-logo.webp'}
                            width="128"
                            height="128"
                            alt="Html"
                            title="Html"
                        />
                        <SkillName>Html</SkillName>
                    </SkillCard>
                    <SkillCard>
                        <SkillImg
                            width="128"
                            height="128"
                            src={'../img/css-logo.webp'}
                            alt="css"
                            title="CSS"
                        />
                        <SkillName>CSS</SkillName>
                    </SkillCard>
                    <SkillCard>
                        <SkillImg
                            width="128"
                            height="128"
                            src={'../img/javascript-logo.webp'}
                            alt="javascript"
                            title="Javascript"
                        />
                        <SkillName>Javascript</SkillName>
                    </SkillCard>
                    <SkillCard>
                        <SkillImg
                            width="128"
                            height="128"
                            src={'../img/react-logo.webp'}
                            alt="react"
                            title="React"
                        />
                        <SkillName>React</SkillName>
                    </SkillCard>
                </MainSkillsCotainer>

                <RectangleShape />
                <H2Header mt={2} variant="h2">Back-end Skills</H2Header>

                <MainSkillsCotainer>
                    <SkillCard>
                        <SkillImg
                            width="128"
                            height="128"
                            src={'../img/nodejs-logo.webp'}
                            alt="nodejs"
                            title="Node.js"
                        />
                        <SkillName>Node.js</SkillName>
                    </SkillCard>
                    <SkillCard>
                        <SkillImg
                            width="128"
                            height="128"
                            src={'../img/php-logo.webp'}
                            alt="php"
                            title="Php"
                        />
                        <SkillName>Php</SkillName>
                    </SkillCard>
                    <SkillCard>
                        <SkillImg
                            width="128"
                            height="128"
                            src={'../img/wordpress-logo.webp'}
                            alt="wordpress"
                            title="Wordpress"
                        />
                        <SkillName>Wordpress</SkillName>
                    </SkillCard>
                    <SkillCard>
                        <SkillImg
                            width="128"
                            height="128"
                            src={'../img/sql-logo.webp'}
                            alt="sql"
                            title="SQL"
                        />
                        <SkillName>SQL</SkillName>
                    </SkillCard>
                </MainSkillsCotainer>

                <RectangleShape />
                <H2Header mt={2} variant="h2">Other Skills</H2Header>

                <MainSkillsCotainer>
                    <SkillCard>
                        <SkillImg
                            width="128"
                            height="128"
                            src={'../img/docker.webp'}
                            alt="Docker"
                            title="Docker"
                        />
                        <SkillName>Docker</SkillName>
                    </SkillCard>
                    <SkillCard>
                        <SkillImg
                            width="128"
                            height="128"
                            src={'../img/git-logo.webp'}
                            alt="Git"
                            title="Git"
                        />
                        <SkillName>Git</SkillName>
                    </SkillCard>
                    <SkillCard>
                        <SkillImg
                            width="128"
                            height="128"
                            src={'../img/github-logo.webp'}
                            alt="github"
                            title="Github"
                        />
                        <SkillName>Github</SkillName>
                    </SkillCard>
                    <SkillCard>
                        <SkillImg
                            width="128"
                            height="128"
                            src={'../img/expo-logo.webp'}
                            alt="expo"
                            title="Expo"
                        />
                        <SkillName>Expo</SkillName>
                    </SkillCard>
                </MainSkillsCotainer>
            </Container>
        </AppLayout>
    )
}
