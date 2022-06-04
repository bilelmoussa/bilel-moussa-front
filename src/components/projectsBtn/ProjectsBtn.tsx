import React from 'react'
import { styled } from '@mui/material/styles'
import { NavLink } from "react-router-dom"
import ButtonBase from '@mui/material/ButtonBase'
import ThLargeIcon from './ThLarge'

const BtnLink = styled(NavLink)`
    text-decoration: none;
    margin: auto 0 auto auto;
    padding: 0;
`

const StyledWorkIcon = styled(ThLargeIcon)`
    color: #FFF;
    margin-right: 15px;
    font-size: 18px;
    margin-left: 5px;
    @media only screen and (max-width: 900px){
        margin-right: 7px;
        margin-left: 0;
    }
`

const ColorButton = styled(ButtonBase)`
    font-family: "Segoe UI";
    letter-spacing: 0.5px;
    color: #FFF;
    font-size: 18px;
    background-color: #0F7C04;
    text-transform: uppercase;
    transition: 0.3s;
    font-weight: 600;
    &:hover {
        background-color: #159107;
        outline-color: #159107
    }
    padding-right: 20px;
    padding-left: 15px;
    padding-block: 10px;
    outline-width: 1px;
    outline-style: solid;
    outline-color: #0F7C04;
    border-radius: 3px;
    @media only screen and (max-width: 900px){
        padding-right: 7px;
        padding-block: 6px;
    }
    @media only screen and (max-width: 600px){
        font-size: 12px;
    }
`

export default function ProjectsBtn() {
    return (
        <BtnLink to="/portfolio">
            <ColorButton focusRipple>
                <StyledWorkIcon />
                View All
            </ColorButton>
        </BtnLink>
    )
}
