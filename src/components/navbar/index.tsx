import * as React from 'react';
import { NavContainer, NavMenu } from './styles'
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'
import MailIcon from '@mui/icons-material/Mail';
import Logo from '../logo/Logo'

const ActiveLink = styled(NavLink)`
    font-family: "Verdana";
    position: relative;
    color: #FFF;
    font-size: 21px;
    margin: 0 18px;
    letter-spacing: 1px;
    text-decoration: none;
    transition: ease-in 0.3s;
    &:hover {
        opacity: 0.8;
    }
    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1.5px;
        background-color: #19C706;
        bottom: -8px;
        left: 0;
    }
`

const Link = styled(NavLink)`
    font-family: "Verdana";
    color: #FFF;
    font-size: 21px;
    letter-spacing: 1px;
    margin: 0 18px;
    text-decoration: none;
    transition: ease-in 0.3s;
    &:hover {
        opacity: 0.8;
    }
`
const BtnLink = styled(NavLink)`
    text-decoration: none;
    padding: 0;
    margin: 0;
`
const StyledMailIcon = styled(MailIcon)`
    color: #FFF;
    margin-right: 15px;
    font-size: 25px;
    margin-left: 5px;
`

const IsActiveLink = ({ isActive, to, value }: any) => {
    if(isActive === value){
        return <ActiveLink to={to}>{value}</ActiveLink>
    } else {
        return <Link to={to}>{value}</Link>
    }
}

const ColorButton = styled(Button)`
    font-family: "Segoe UI";
    letter-spacing: 1px;
    color: #FFF;
    font-size: 21px;
    background-color: rgba(25,118,210,0.0);
    &:hover {
        background-color: #19C706;
    }
    margin-left: 50px;
    padding-right: 15px;
    padding-block: 5px;
    outline-width: 1px;
    outline-style: solid;
    outline-color: #19C706;
    border-radius: 0;
`

export default function Index({ isActive }: any) {
    return (
        <>
            <NavContainer maxWidth='xl'>
                <Logo />
                <NavMenu>
                    <IsActiveLink isActive={isActive} to='/' value="Home" />
                    <IsActiveLink isActive={isActive} to='/about' value="About" />
                    <IsActiveLink isActive={isActive} to='/skills' value="Skills" />
                    <IsActiveLink isActive={isActive} to='/portfolio' value="Portfolio" />
                    <BtnLink to="/contact" >
                        <ColorButton>
                            <StyledMailIcon />
                            Contact Me
                        </ColorButton>
                    </BtnLink>
                </NavMenu>
            </NavContainer>
        </>
    )
}



