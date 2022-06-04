import React from 'react'
import GitIcon from './GitIcon'
import DribbbleIcon from './DribbbleIcon'
import InstagramIcon from './InstagramIcon'
import LinkedinIcon from './LinkedinIcon'
import { styled } from '@mui/material/styles'
import Link from "@mui/material/Link"
import Typography from '@mui/material/Typography'

const LinkContainer = styled(Link)`
    margin-right: 30px;
    transition: 0.5s;
    &:hover {
        opacity: 0.8;
    }
`

const SocialContainer = styled('div')`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    margin-top: auto;
    margin-bottom: 20px;
    @media only screen and (max-width: 900px){
        margin-top: 0;
    }
`

const SocialIconsContainer = styled('div')`
    display: flex;
    margin-left: 50px;
    @media only screen and (max-width: 900px){
        margin-top: 30px;
        margin-left: 0;
    }
`

const SocialType = styled(Typography)`
    position: relative;
    font-size: 14px;
    font-family: 'Arial';
    letter-spacing: 1px;
    color: #FFF;
    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #19C706;
        bottom: 10px;
        left: 0;
    }
    @media only screen and (max-width: 900px){
        &:after {
            bottom: 0;
        }
    }
`

const TypeContainer = styled('div')`
    display: flex;
    align-content: center;
    @media only screen and (max-width: 900px){
        margin-top: 30px;
        margin-right: 30px
    }
`

export default function SocialLandPage() {
    return (
        <SocialContainer>
            <TypeContainer>
                <SocialType>You can find me on :</SocialType>
            </TypeContainer>

            <SocialIconsContainer>
                <LinkContainer aria-label="Github" target="_blank" rel="noopener" href="https://github.com/bilelmoussa">
                    <GitIcon fontSize="medium" />
                </LinkContainer>
                <LinkContainer aria-label="Dribbble" target="_blank" rel="noopener" href="https://dribbble.com/BilelDev">
                    <DribbbleIcon fontSize="medium" />
                </LinkContainer>
                <LinkContainer aria-label="Instagram" target="_blank" rel="noopener" href="https://www.instagram.com/bilel.moussa.dev/">
                    <InstagramIcon />
                </LinkContainer>
                <LinkContainer aria-label="Linkedin" target="_blank" rel="noopener" href="https://www.linkedin.com/in/bilel-moussa-dev">
                    <LinkedinIcon />
                </LinkContainer>
            </SocialIconsContainer>
        </SocialContainer>
    )
}
