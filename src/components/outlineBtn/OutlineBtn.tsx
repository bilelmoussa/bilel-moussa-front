import * as React from 'react'
import { NavLink } from "react-router-dom"
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import AssignmentIcon from '@mui/icons-material/Assignment'

const BtnLink = styled(NavLink)`
    text-decoration: none;
    margin-top: 20px;
    padding: 0;
`

const StyledAssignmentIcon = styled(AssignmentIcon)`
    color: #FFF;
    margin-right: 15px;
    font-size: 25px;
    margin-left: 5px;
    @media only screen and (max-width: 900px){
        margin-right: 7px;
        margin-left: 0;
    }
`

const ColorButton = styled(Button)`
    background-color: rgba(25,118,210,0.0);
    &:hover {
        background-color: #0F7C04;
    }
    padding-right: 15px;
    padding-block: 10px;
    outline-width: 1px;
    outline-style: solid;
    outline-color: #0F7C04;
    border-radius: 0;
    font-family: "Segoe UI";
    letter-spacing: 1px;
    color: #FFF;
    font-size: 18px;
    text-decoration: none;
    @media only screen and (max-width: 600px){
        font-size: 12px;
    }
    @media only screen and (max-width: 900px){
        padding-right: 7px;
        padding-block: 6px;
    }
`

export default function OutlineBtn() {
    return (
        <BtnLink to="/portfolio" >
            <ColorButton>
                <StyledAssignmentIcon />
                My Projects
            </ColorButton>
        </BtnLink>
    )
}
