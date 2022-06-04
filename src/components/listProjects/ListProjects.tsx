import React from 'react'
import { styled } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import ButtonBase from '@mui/material/ButtonBase'

const ProjectsListContainer = styled('div')`
  margin-top: 60px;
`

const BtnStyles = styled(ButtonBase)`
  position: relative;
  width: 100%;
  :after {
    content: "";
    position: absolute;
    background-color: rgb(0 0 0 / 30%);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: 0.3s;
  }
  :hover {
    :after {
      background-color: rgb(0 0 0 / 0%);
    }
  }
  .MuiTouchRipple-child {
    background-color: #000;
  }
`

const StyledImg = styled('img')`
  width: 100%;
  height: auto;
  max-width: 100%;
  aspect-ratio: 363 / 204;
`

type Project = {
  featured: boolean,
  title: string,
  imgUrl: string,
  featuredimgUrl: string,
  description: string,
  shortDescription: string,
  year: string,
  url: string
  skills: string[],
}

type Projects = Project[]

type Props = {
  projects: Projects,
  limit: number,
  featured: boolean,
}

export default function ListProjects({ projects, limit, featured }: Props) {

  return (
    <ProjectsListContainer>
      <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          featured ?
            projects.map((data, i) => {
              if (data.featured) {
                if (i < limit) {
                  return (
                    <Grid item xs={2} sm={4} md={4} key={i}>
                      <RouterLink to={`/portfolio/${data.url}`} >
                        <BtnStyles
                          focusRipple
                          key={i}
                          aria-label={`${data.title}`}
                        >
                          <StyledImg
                            src={data.featuredimgUrl}
                            width="363"
                            height="204"
                            title={data.title}
                            alt={data.description}
                          />
                        </BtnStyles>
                      </RouterLink>
                    </Grid>
                  )
                }
              }

              return null;
            })
            :
            projects.map((data, i) => {
              if (i < limit) {
                return (
                  <Grid item xs={2} sm={4} md={4} key={i}>
                    <RouterLink to={`/portfolio/${data.url}`} >
                      <BtnStyles
                        focusRipple
                        key={i}
                        aria-label={`${data.title}`}
                      >
                        <img
                          src={data.imgUrl}
                          width="100%"
                          height="auto"
                          title={data.title}
                          alt={data.description}
                        />
                      </BtnStyles>
                    </RouterLink>
                  </Grid>
                )
              }

              return null;
            })
        }
      </Grid>
    </ProjectsListContainer>
  )
}
