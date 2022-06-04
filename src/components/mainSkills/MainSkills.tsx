import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import StyledProgressbar from '../circularProgressbar/CircularProgressbar'
import VisibilitySensor from "react-visibility-sensor"


const MainSkillsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 200px;
  @media only screen and (max-width: 900px){
    margin-top: 100px;
  }
`

const RectangleShape = styled('div')`
  display: block;
  height: 15px;
  width: 110px;
  background-color: #2A2A2A;
`

const MainSkillsTop = styled('div')`
  width: 50%;
  @media only screen and (max-width: 900px){
    width: 100%;
  }
`

const MainSkillsDescription = styled(Typography)`
  font-family: 'Arial';
  color: #C9C9C9;
  letter-spacing: 1.5px;
  line-height: 1.7em;
  @media only screen and (max-width: 900px){
    max-width: 600px;
  }
`

const MainSkillsHeader = styled(Typography)`
  font-size: 40px;
  font-family: 'Verdana';
  letter-spacing: 2.5px;
  color: #19C706;
  font-weight: bold;
`

const MainSkillsBottom = styled('div')`
  margin-top: 100px;
  margin-left: -50px;
  @media only screen and (max-width: 900px){
    margin-left: 0;
    margin-top: 50px;
  }
`

const SkillName = styled(Typography)`
  font-size: 28px;
  font-family: 'Verdana';
  letter-spacing: 1px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  margin-top: 15px;
  @media only screen and (max-width: 900px){
    font-size: 18px;
  }
`

export default function MainSkills() {
  const [isActive, setIsActive] = useState(true)
  const [visible, setVisible] = useState(false)

  function onChange(isVisible: boolean) {
    setVisible(isVisible)
    if (isVisible) {
      setIsActive(false)
    }
  }

  return (
    <MainSkillsContainer>
      <MainSkillsTop>
        <RectangleShape />
        <MainSkillsHeader variant="h2" mt={3} gutterBottom>Main Skills !</MainSkillsHeader>
        <MainSkillsDescription mt={2}>
          Here are a few technologies I’ve been working with recently:
        </MainSkillsDescription>
      </MainSkillsTop>

      <MainSkillsBottom>
        <VisibilitySensor onChange={onChange} active={isActive} partialVisibility={true}>
          <Grid container rowSpacing={{ xs: 8, sm: 8, md: 3 }} columnSpacing={3} columns={{ xs: 4, sm: 4, md: 8 }}>
            <Grid item xs={2} sm={2} md={2}>
              <StyledProgressbar percentage={visible ? 80 : 0} />
              <SkillName>React</SkillName>
            </Grid>

            <Grid item xs={2} sm={2} md={2}>
              <StyledProgressbar percentage={visible ? 75 : 0} />
              <SkillName>Node JS</SkillName>
            </Grid>

            <Grid item xs={2} sm={2} md={2}>
              <StyledProgressbar percentage={visible ? 60 : 0} />
              <SkillName>Php</SkillName>
            </Grid>

            <Grid item xs={2} sm={2} md={2}>
              <StyledProgressbar percentage={visible ? 90 : 0} />
              <SkillName>Wordpress</SkillName>
            </Grid>
          </Grid>
        </VisibilitySensor>
      </MainSkillsBottom>
    </MainSkillsContainer>
  )
}
