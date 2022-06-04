import * as React from 'react'
import { NavLink } from "react-router-dom"
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import WorkIcon from '@mui/icons-material/Work'

const BtnLink = styled(NavLink)`
    text-decoration: none;
    margin-right: 25px;
    margin-top: 20px;
    padding: 0;
    @media only screen and (max-width: 1024px){
        margin-right: 15px;
    }
`

const StyledWorkIcon = styled(WorkIcon)`
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
    background-color: #0F7C04;
    &:hover {
        background-color: #159107;
        outline-color: #159107
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
    @media only screen and (max-width: 600px){
        font-size: 12px;
    }
    @media only screen and (max-width: 900px){
        padding-right: 7px;
        padding-block: 6px;
    }
`

export default function ContainedBtn() {
    return (
        <BtnLink to="/contact" >
            <ColorButton>
                <StyledWorkIcon />
                Work with me
            </ColorButton>
        </BtnLink>
    )
}
