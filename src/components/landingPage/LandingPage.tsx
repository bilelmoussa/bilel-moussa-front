import React from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import ContainedBtn from '../containedBtn/ContainedBtn'
import OutlineBtn from '../outlineBtn/OutlineBtn'
import SocialLandPage from '../socialLandPage/SocialLandPage'

const LandingPageContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 80vh;
  @media only screen and (max-width: 1024px){
    margin-top: 30px;
  }
  @media only screen and (max-width: 900px){
    margin-top: 60px;
  }
`

const LeftLandPage = styled('div')`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 900px){
    width: 100%;
  }
`

const RightLandPage = styled('div')`
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

const SubHeader = styled(Typography)`
  position: relative;
  font-size: 14px;
  font-family: 'Verdana';
  letter-spacing: 1px;
  color: #19C706;
  margin-left: 35px;
  margin-top: 14%;
  &:after {
    content: "";
    position: absolute;
    width: 25px;
    height: 2px;
    background-color: #19C706;
    bottom: 40%;
    left: -35px;
  }
  @media only screen and (max-width: 900px){
    margin-top: 0;
  }
`

const Header = styled(Typography)`
  margin-top: 20px;
  font-size: 45px;
  font-family: 'Verdana';
  letter-spacing: 2.5px;
  color: #FFFFFF;
  font-weight: bold;
`

const Description = styled(Typography)`
  font-family: 'Arial';
  color: #C9C9C9;
  margin-top: 30px;
  letter-spacing: 1.5px;
  line-height: 1.7em;
  @media only screen and (max-width: 900px){
    max-width: 600px;
    font-size: 14px;
  }
`

const CtaBtns = styled('div')`
  display: flex;
  margin-top: 20px;
  justify-content: start;
  flex-wrap: wrap;
  @media only screen and (max-width: 1024px){
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 900px){
    margin-bottom: 10px;
  }  
`

const SideImg = styled('img')`
  width: 80%;
  height: auto;
  min-width: 230px;
  max-width: 380px;
  aspect-ratio: 380 / 520;
  margin-left: auto;
  @media only screen and (max-width: 900px){
    margin-top: 0;
    margin-right: auto;
  }
`

export default function LandingPage() {
  return (
    <LandingPageContainer>
      <LeftLandPage>
        <SubHeader variant="h2" gutterBottom>
          Web Developer &amp; Freelancer
        </SubHeader>
        <Header variant="h1" gutterBottom>Hi, I'm Bilel Moussa</Header>

        <Description fontSize={16} variant="body1" gutterBottom>
          Web Developer &amp; Freelancer with 4+ years of well-rounded experience in Javascript, Php and UI/UX Design, As a freelancer, I collaborate with web agencies, companies, startups and individuals to bring their ideas to life.
        </Description>

        <CtaBtns>
          <ContainedBtn />
          <OutlineBtn />
        </CtaBtns>

        <SocialLandPage />
      </LeftLandPage>

      <RightLandPage>
        <SideImg
          width="380"
          height="520"
          src={"../img/developer_coding_380x520.webp"}
          alt="Developer coding"
        />
      </RightLandPage>
    </LandingPageContainer>
  )
}
