import React from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { getProjectsById } from '../../projects-data'
import Chip from '@mui/material/Chip'
import AdobexdIcon from './AdobexdIcon'
import ReactIcon from './ReactIcon'
import NodejsIcon from './NodejsIcon'
import MongodbIcon from './MongodbIcon'
import GraphqlIcon from './GraphqlIcon'
import FirebaseIcon from './FirebaseIcon'
import PhotoshopIcon from './PhotoshopIcon'
import IllustratorIcon from './IllustratorIcon'
import WordpressIcon from './WordpressIcon'
import WoocommerceIcon from './WoocommerceIcon'
import WpgraphqlIcon from './WpgraphqlIcon'
import DribbbleIcon from '../socialLandPage/DribbbleIcon'
import LanguageIcon from '@mui/icons-material/Language'
import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleplayIcon from './GoogleplayIcon'
import AppleIcon from './AppleIcon'
import { Navigate } from "react-router-dom"

const ProjectContainer = styled('div')`
  margin-top: 50px;
`

const ProjectYear = styled(Typography)`
  font-family: 'Arial';
  color: #DDD;
  letter-spacing: 1.5px;
  line-height: 1.7em;
  margin-top: 10px;
  @media only screen and (max-width: 900px){
    font-size: 14px;
  }
`

const ProjectDivider = styled('div')`
  height: 20px;
  width: 100px;
  background-color: #2A2A2A;
  margin: 50px 0 20px 0;
  @media only screen and (max-width: 900px){
    margin: 40px 0 20px 0;
  }
`

const ProjectHeader = styled(Typography)`
  font-size: 40px;
  font-family: 'Verdana';
  letter-spacing: 2.5px;
  color: #19C706;
  font-weight: bold;
  @media only screen and (max-width: 900px){
    font-size: 26px;
  }
`

const ProjectShortDescription = styled(Typography)`
  font-family: 'Arial';
  color: #F9F9F9;
  letter-spacing: 1.5px;
  line-height: 1.7em;
  margin-top: 10px;
  font-size: 20px;
  @media only screen and (max-width: 900px){
    max-width: 600px;
    font-size: 16px;
  }
`

const ProjectDescription = styled(Typography)`
  font-family: 'Arial';
  color: #efefef;
  letter-spacing: 1px;
  line-height: 1.8em;
  margin-top: 10px;
  font-size: 18px;
  @media only screen and (max-width: 900px){
    max-width: 600px;
    font-size: 16px;
    letter-spacing: 0.5px;
  }
`

const SkillsType = styled(Typography)`
  font-size: 18px;
  font-family: 'Verdana';
  color: #FFFFFF;
  font-weight: bold;
  margin-top: 30px;
  letter-spacing: 0.5px;
  @media only screen and (max-width: 900px){
    font-size: 16px;
  }
`

const SkillsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const SkillChip = styled(Chip)`
  margin-right: 10px;
  margin-top: 10px;
  .MuiChip-icon{
    margin-left: 10px;
  }
`

const ImgContainer = styled('div')`
  display: flex;
  flex-direction: rows;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 150px;
  @media only screen and (max-width: 900px){
    margin-top: 100px;
  }
`

const ChipStyle = {
  marginRight: 10,
  marginTop: 10
}

const ChipIconStyle = {
  marginLeft: 10,
}


const LinksContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const MediaImg = styled('img')`
  display: block;
  width: 100%;
  height: auto;
  margin-top: 30px;
`

const MediaImgMobile = styled('img')`
  display: block;
  width: 49%;
  height: auto;
  margin-top: 30px;
  aspect-ratio: 564 / 1223;
`

type Props = {
  projectUrl: string | undefined
}

export default function SingleProject({ projectUrl }: Props) {
  const project = getProjectsById({ url: projectUrl });
  const projectTitle = project?.title || "";
  const projectShortDescription = project?.shortDescription || "";
  const projectDescription = project?.description || "";
  const projectYear = project?.year || "";
  const skills = project?.skills || [];
  const links = project?.links || [];
  // const imgName = project?.imgUrl || "#";
  const images = project?.media || [];


  if (project) {
    return (
      <>
        <ProjectContainer>
          <ProjectHeader variant='h1'>{projectTitle}</ProjectHeader>
          <ProjectShortDescription variant="body1">{projectShortDescription}</ProjectShortDescription>
          <ProjectYear>{projectYear}</ProjectYear>
          <ProjectDivider />
          <ProjectDescription>{projectDescription}</ProjectDescription>
          <SkillsType>Technologies :</SkillsType>
          <SkillsContainer>
            {
              skills.map((skill, i) => {
                if (skill === "Adobe XD") {
                  return <SkillChip key={i} size="medium" icon={<AdobexdIcon />} label="Adobe XD" variant="outlined" />
                }
                if (skill === "Adobe Photoshop") {
                  return <SkillChip key={i} size="medium" icon={<PhotoshopIcon />} label="Adobe Photoshop" variant="outlined" />
                }
                if (skill === "Adobe Illustrator") {
                  return <SkillChip key={i} size="medium" icon={<IllustratorIcon />} label="Adobe Illustrator" variant="outlined" />
                }
                if (skill === "React") {
                  return <SkillChip key={i} size="medium" icon={<ReactIcon />} label="React" variant="outlined" />
                }
                if (skill === "React Native") {
                  return <SkillChip key={i} size="medium" icon={<ReactIcon />} label="React Native" variant="outlined" />
                }
                if (skill === "Node.js") {
                  return <SkillChip key={i} size="medium" icon={<NodejsIcon />} label="Node.js" variant="outlined" />
                }
                if (skill === "GraphQL") {
                  return <SkillChip key={i} size="medium" icon={<GraphqlIcon />} label="GraphQL" variant="outlined" />
                }
                if (skill === "Wordpress") {
                  return <SkillChip key={i} size="medium" icon={<WordpressIcon />} label="Wordpress" variant="outlined" />
                }
                if (skill === "Woocommerce") {
                  return <SkillChip key={i} size="medium" icon={<WoocommerceIcon />} label="Woocommerce" variant="outlined" />
                }
                if (skill === "WPGraphQL") {
                  return <SkillChip key={i} size="medium" icon={<WpgraphqlIcon />} label="WPGraphQL" variant="outlined" />
                }
                if (skill === "Mongodb") {
                  return <SkillChip key={i} size="medium" icon={<MongodbIcon />} label="Mongodb" variant="outlined" />
                }
                if (skill === "Firebase") {
                  return <SkillChip key={i} size="medium" icon={<FirebaseIcon fontSize="small" />} label="Firebase" variant="outlined" />
                }
                return null;
              })
            }
          </SkillsContainer>
          <SkillsType>Links :</SkillsType>
          <LinksContainer>
            {
              links.map((link, i) => {
                if (link.type === "Dribbble") {
                  return <Chip key={i} style={ChipStyle} component="a" size="medium" icon={<DribbbleIcon style={ChipIconStyle} fontSize="small" />} label="Dribbble" variant="outlined" href={link.url || "#"} target="_blank" clickable />
                }
                if (link.type === "Live") {
                  return <Chip key={i} style={ChipStyle} component="a" size="medium" icon={<LanguageIcon style={ChipIconStyle} fontSize="small" />} label="Live" variant="outlined" href={link.url || "#"} target="_blank" clickable />
                }
                if (link.type === "Github") {
                  return <Chip key={i} style={ChipStyle} component="a" size="medium" icon={<GitHubIcon style={ChipIconStyle} fontSize="small" />} label="Github" variant="outlined" href={link.url || "#"} target="_blank" clickable />
                }
                if (link.type === "Android") {
                  return <Chip key={i} style={ChipStyle} component="a" size="medium" icon={<GoogleplayIcon style={ChipIconStyle} />} label="Android" variant="outlined" href={link.url || "#"} target="_blank" clickable />
                }
                if (link.type === "Ios") {
                  return <Chip key={i} style={ChipStyle} component="a" size="medium" icon={<AppleIcon style={ChipIconStyle} fontSize="small" />} label="IOS" variant="outlined" href={link.url || "#"} target="_blank" clickable />
                }
                return null;
              })
            }
          </LinksContainer>
          <ImgContainer>
            {
              images.map((image, i) => {
                if (image.type === "mobile") {
                  return (
                    <MediaImgMobile
                      key={i}
                      src={image.url}
                      title={image.title}
                      alt={image.description}
                      width="564"
                      height="1223"
                    />
                  )
                }

                return (
                  <MediaImg
                    key={i}
                    src={image.url}
                    title={image.title}
                    alt={image.description}
                    width="1152"
                    height="649"
                  />
                )
              })
            }
          </ImgContainer>
        </ProjectContainer>
      </>
    )
  }

  return <Navigate to="/404" />;
}
