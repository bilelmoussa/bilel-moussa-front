import React from 'react'
import { styled } from '@mui/material/styles'
import Link from "@mui/material/Link"
import GitIcon from '../../components/socialLandPage/GitIcon'
import DribbbleIcon from '../../components/socialLandPage/DribbbleIcon'
import InstagramIcon from '../../components/socialLandPage/InstagramIcon'
import LinkedinIcon from '../../components/socialLandPage/LinkedinIcon'

const SocialIconsContainer = styled('div')`
    display: flex;
    margin-left: 20px;
    @media only screen and (max-width: 900px){
        margin-bottom: 14px;
    }
`

const LinkContainer = styled(Link)`
    margin-right: 30px;
    transition: 0.5s;
    &:hover {
        opacity: 0.8;
    }
`

export default function FooterSocialMedia() {
    return (
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
            <LinkContainer aria-label="Linkedin" style={{ marginRight: 0 }} target="_blank" rel="noopener" href="https://www.linkedin.com/in/bilel-moussa-dev">
                <LinkedinIcon />
            </LinkContainer>
        </SocialIconsContainer>
    )
}
