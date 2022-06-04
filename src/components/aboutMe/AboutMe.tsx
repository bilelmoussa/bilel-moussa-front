import React from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'


const AboutContainer = styled('div')`
  display: flex;
  margin-top: 200px;
  flex-wrap: wrap;
  @media only screen and (max-width: 900px){
    flex-direction: column;
    margin-top: 100px;
  }
`

const RightContainer = styled('div')`
    display: flex;
    width: 50%;
    justify-content: end;
    align-items: center;
    @media only screen and (max-width: 900px){
        width: 100%;
        margin-top: 60px;
        justify-content: center;
    }
`

const LeftContainer = styled('div')`
    width: 50%;
    @media only screen and (max-width: 900px){
        width: 100%
    }
`

const AboutHeader = styled(Typography)`
  font-size: 40px;
  font-family: 'Verdana';
  letter-spacing: 2.5px;
  color: #19C706;
  font-weight: bold;
`

const AboutDescription = styled(Typography)`
  font-family: 'Arial';
  font-size: 18px;
  color: #C9C9C9;
  letter-spacing: 1.5px;
  line-height: 1.7em;
  @media only screen and (max-width: 900px){
    max-width: 600px;
  }
`

const AboutImg = styled('img')`
  margin-top: 50px;
  width: 80%;
  height: auto;
  min-width: 230px;
  max-width: 350px;
  aspect-ratio: 1 / 1;
  @media only screen and (max-width: 900px){
    width: 50%;
    margin-top: 0;
  }
`

export default function AboutMe() {
  return (
    <AboutContainer>
      <LeftContainer>
        <AboutHeader variant="h2" gutterBottom>About Me</AboutHeader>

        <AboutDescription mt={4}>
          I'm a Web Developer and a Freelancer, based in Tunisia. After taking online courses in web developement i started working as web master.

        </AboutDescription>

        <AboutDescription mt={2}>
          I have worked on the web for over 4 years with experience ranging from Javascript, React.js, CSS, Node.js, Php, Wordpress and React Native, I have worked for companies like youbi.tn and giex.tn.
        </AboutDescription>

        <AboutDescription mt={2}>
          Recently I started working as Freelancer, I'm looking forward to working with new clients, And achieving best result on each project I lay my hands on.
        </AboutDescription>
      </LeftContainer>

      <RightContainer>
        <AboutImg
          src="../img/bilel-moussa_350x350.webp"
          width="350"
          height="350"
          title="Bilel Moussa"
          alt="Bilel Moussa Developer &amp; Freelancer"
          loading="lazy"
        />
      </RightContainer>
    </AboutContainer>
  )
}
