import React from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import ProjectsBtn from '../projectsBtn/ProjectsBtn'
import ListProjects from '../listProjects/ListProjects'
import { projects } from '../../projects-data'


const ProjectsContainer = styled('div')`
  display: block;
  margin-top: 200px;
  @media only screen and (max-width: 900px){
    margin-top: 100px;
  }
`

const ProjectsHeader = styled(Typography)`
  font-size: 40px;
  font-family: 'Verdana';
  letter-spacing: 2.5px;
  color: #19C706;
  font-weight: bold;
`

const ProjectsDescription = styled(Typography)`
  font-family: 'Arial';
  color: #C9C9C9;
  letter-spacing: 1.5px;
  line-height: 1.7em;
  @media only screen and (max-width: 900px){
    max-width: 600px;
  }
`

const SeeMoreContainer = styled('div')`
  display: flex;
  @media only screen and (max-width: 900px){
    margin-top: 30px;
  }
`

export default function MyPortfolio() {
  return (
    <ProjectsContainer>
      <ProjectsHeader variant="h2" gutterBottom>My Portfolio</ProjectsHeader>

      <ProjectsDescription>
        I have already built amazing things, this is a gallery of my featured projects.
      </ProjectsDescription>

      <SeeMoreContainer>
        <ProjectsBtn />
      </SeeMoreContainer>

      <ListProjects limit={20} featured={true} projects={projects} />
    </ProjectsContainer>
  )
}
