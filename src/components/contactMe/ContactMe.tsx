import React from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContactForm from '../contactForm/ContactForm'
import GoogleMap from '../googleMap/GoogleMap'
import EmailIcon from '@mui/icons-material/Email'

const ContactHeader = styled(Typography)`
  font-size: 35px;
  font-family: 'Verdana';
  letter-spacing: 2.5px;
  color: #19C706;
  font-weight: bold;
`

const ContactDescription = styled(Typography)`
  font-family: 'Arial';
  color: #C9C9C9;
  letter-spacing: 1.5px;
  line-height: 1.7em;
  @media only screen and (max-width: 900px){
    max-width: 600px;
  }
`

const RectangleShape = styled('div')`
  display: block;
  height: 15px;
  width: 110px;
  background-color: #2A2A2A;
`

const ContactMeContainer = styled('div')`
  display: flex;
  margin-top: 200px;
  flex-direction: raw;
  flex-wrap: wrap;
  @media only screen and (max-width: 900px){
    margin-top: 100px;
  }
`
const ContactLeft = styled('div')`
  width: 50%;
  @media only screen and (max-width: 900px){
    width: 100%;
  }
`

const ContactRight = styled('div')`
  position: relative;
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

const ContactBox = styled('div')`
  position: absolute;
  top: 55%;
  left: 14%;
  height: 25%;
  width: 45%;
  background-color: #000000d9;
  z-index: 1;
  min-width: 260px;
  padding: 1em 1.5em;
  min-height: 140px;
  overflow: hidden;
  @media only screen and (max-width: 900px){
    min-height: 150px;
    top: 50%;
    left: 8%;
  }
`

const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 30px;
`

const StyledListItemText = styled(ListItemText)`
  .MuiTypography-root{
    font-size: 14px;
    color: #FFF;
  }
`

export default function ContactMe() {
    return (
        <ContactMeContainer>
            <ContactLeft>
                <RectangleShape/>
                <ContactHeader variant="h2" mt={3} gutterBottom>Contact Me</ContactHeader>
                <ContactDescription mt={2}>
                  For further information, please do not hesitate to contact me.      
                </ContactDescription>
                <ContactForm />
            </ContactLeft>
            <ContactRight>
                <GoogleMap />
                <ContactBox>
                    <Typography fontWeight="bold" fontFamily="Verdana" variant="body1">Bilel Moussa</Typography>
                    <Typography fontFamily="Arial" variant="body2" color="gray" marginTop={1.5} marginBottom={2}>Tunisia, Sousse, Hammam Sousse</Typography>
                    <ListItem component="a" href="mailto:bilel.moussa.dev@gmail.com" disablePadding>
                        <StyledListItemIcon>
                            <EmailIcon />
                        </StyledListItemIcon>
                        <StyledListItemText
                            primary="bilel.moussa.dev@gmail.com"
                        />
                    </ListItem>      
                </ContactBox>
            </ContactRight>                
        </ContactMeContainer>
    )
}
