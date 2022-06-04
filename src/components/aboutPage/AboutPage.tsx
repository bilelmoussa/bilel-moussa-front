import React from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Link from "@mui/material/Link"
import AppLayout from '../../layout/AppLayout'


const Container = styled('div')`
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    margin-top: 50px;
`

const AboutHeader = styled(Typography)`
  font-size: 45px;
  font-family: 'Verdana';
  letter-spacing: 2.5px;
  color: #19C706;
  font-weight: bold;
`

const AboutDescription = styled(Typography)`
  font-family: 'Arial';
  font-size: 22px;
  color: #C9C9C9;
  letter-spacing: 1.5px;
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

const ExperiencesCotainer = styled('div')`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`

const ExperienceCard = styled('div')`
  background-color: #2A2A2A;
  padding: 1em 1.5em;
  margin-right: 20px;
  margin-top: 20px;
  width: 30%;
  min-width: 250px;
  max-width: 400px;
  @media only screen and (max-width: 1024px){
    width: 45%;
  }
  @media only screen and (max-width: 600px){
    width: 100%;
    margin-right: 0;
  }
`

const ExperienceTitle = styled(Typography)`
  font-size: 22px;
  font-family: 'Verdana';
  letter-spacing: 1px;
  color: #FFFFFF;
`

const CompanyName = styled(Typography)`
  font-size: 18px;
  font-family: 'Arial';
  margin-top: 15px;
  letter-spacing: 0.5px;
  color: #f3f3f3;
`

const ExperienceDate = styled(Typography)`
  font-size: 16px;
  font-family: 'Arial';
  margin-top: 3px;
  letter-spacing: 0.5px;
  color: #C9C9C9;
`

const LicensesContainer = styled('div')`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`

const LicensesCard = styled('div')`
  background-color: #2A2A2A;
  margin-right: 20px;
  margin-top: 20px;
  width: 30%;
  min-width: 250px;
  max-width: 400px;
  @media only screen and (max-width: 1024px){
    width: 45%;
  }
  @media only screen and (max-width: 600px){
    width: 100%;
    margin-right: 0;
  }
`

const BtnLink = styled(Link)`
    text-decoration: none;
    margin: 0;
    padding: 0;
`

const LicensesImg = styled('img')`
  width: 100%;
  height: auto;
  max-width: 100%;
  aspect-ratio: 346 / 257;
`

export default function AboutPage() {
  return (
    <AppLayout>
      <Container>
        <AboutHeader variant="h1">About Me</AboutHeader>
        <AboutDescription mt={4}>
          I'm a Web Developer and a Freelancer, based in Tunisia. After taking online courses in web developement i started working as web master.

        </AboutDescription>

        <AboutDescription mt={3}>
          I have worked on the web for over 4 years with experience ranging from Javascript, React.js, CSS, Node.js, Php, Wordpress and React Native, I have worked for companies like youbi.tn and giex.tn.
        </AboutDescription>

        <AboutDescription mt={3}>
          Recently I started working as Freelancer, I'm looking forward to working with new clients, And achieving best result on each project I lay my hands on.
        </AboutDescription>

        <RectangleShape />

        <H2Header mt={2} variant="h2">Experience</H2Header>

        <ExperiencesCotainer>
          <ExperienceCard>
            <ExperienceTitle variant="h3">Web Master</ExperienceTitle>
            <CompanyName>Youbi.tn - Full-time</CompanyName>
            <ExperienceDate>Nov 2020 - Feb 2021 - 4 months</ExperienceDate>
            <ExperienceDate>Sousse Governorate, Tunisia</ExperienceDate>
          </ExperienceCard>
          <ExperienceCard>
            <ExperienceTitle variant="h3">Full-stack Developer</ExperienceTitle>
            <CompanyName>Giex Tunisie - Full-time</CompanyName>
            <ExperienceDate>Mar 2021 - Nov 2021 - 9 months</ExperienceDate>
            <ExperienceDate>Sousse Governorate, Tunisia</ExperienceDate>
          </ExperienceCard>
          <ExperienceCard>
            <ExperienceTitle variant="h3">Freelance Web Developer</ExperienceTitle>
            <CompanyName>Freelance</CompanyName>
            <ExperienceDate>Nov 2021 - Present</ExperienceDate>
            <ExperienceDate>Sousse Governorate, Tunisia</ExperienceDate>
          </ExperienceCard>
        </ExperiencesCotainer>

        <RectangleShape />

        <H2Header mt={2} variant="h2">Licenses &amp; certifications</H2Header>
        <LicensesContainer>
          <LicensesCard>
            <BtnLink target="_blank" rel="noopener" href="https://www.sololearn.com/Certificate/1024-16173948/jpg/">
              <LicensesImg
                width="346"
                height="244"
                alt="JavaScript course"
                title="JavaScript course"
                src="https://res.cloudinary.com/bilel-moussa/image/upload/v1645034594/bilel-moussa/sololearn_ntpvt9.webp"
              />
            </BtnLink>
          </LicensesCard>
          <LicensesCard>
            <BtnLink target="_blank" rel="noopener" href="https://www.udemy.com/certificate/UC-b92eb205-71b4-4238-99be-88ed38975ec8/">
              <LicensesImg
                width="346"
                height="257"
                alt="WordPress for Beginners"
                title="WordPress for Beginners"
                src="https://res.cloudinary.com/bilel-moussa/image/upload/v1644250292/bilel-moussa/seo-master-class_m7akyv.jpg"
              />
            </BtnLink>
          </LicensesCard>
          <LicensesCard>
            <BtnLink target="_blank" rel="noopener" href="https://www.udemy.com/certificate/UC-4c535620-c93a-45f3-ade4-c66f3f9b77cb/">
              <LicensesImg
                width="346"
                height="257"
                alt="SEO Masterclass"
                title="SEO Masterclass"
                src="https://res.cloudinary.com/bilel-moussa/image/upload/v1644250295/bilel-moussa/wordpress-udemy_vnlz7c.jpg"
              />
            </BtnLink>
          </LicensesCard>
        </LicensesContainer>
      </Container>
    </AppLayout>
  )
}
