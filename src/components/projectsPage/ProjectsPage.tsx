import React from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const PageContainer = styled('div')`
    margin-top: 50px;
`

const PageHeader = styled(Typography)`
    font-size: 45px;
    font-family: 'Verdana';
    letter-spacing: 2.5px;
    color: #19C706;
    font-weight: bold;
`

const PageDescription = styled(Typography)`
  font-family: 'Arial';
  color: #C9C9C9;
  font-size: 18px;
  letter-spacing: 1.5px;
  line-height: 1.7em;
  margin-top: 8px;
  @media only screen and (max-width: 900px){
    max-width: 600px;
  }
`

export default function ProjectsPage() {
    return (
        <PageContainer>
            <PageHeader variant="h1">My Portfolio</PageHeader>
            <PageDescription>I have already built amazing things, this is a gallery of my projects.</PageDescription>
        </PageContainer>
    )
}
