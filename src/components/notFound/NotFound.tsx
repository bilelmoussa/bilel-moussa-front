import React from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import { NavLink } from "react-router-dom"

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1024px){
        margin-top: 50px;
    }
`

const ImgNotFound = styled('img')`
    display: flex;
    width: 50%;
    height: auto;
    max-width: 700px;
    min-width: 400px;
    @media only screen and (max-width: 600px){
        width: 80%;
        min-width: 250px;
    }
`

const TitleHeader = styled(Typography)`
    font-family: 'Verdana';
    letter-spacing: 2.5px;
    font-size: 45px;
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
    @media only screen and (max-width: 900px){
        font-size: 35px;
    }
    @media only screen and (max-width: 600px){
        font-size: 25px;
    }
`

const Titledisc = styled(Typography)`
    font-family: 'Verdana';
    letter-spacing: 0.5px;
    color: #C8C8C8;
    font-size: 18px;
    max-width: 600px;
    text-align: center;
    margin-bottom: 30px;
    @media only screen and (max-width: 900px){
        font-size: 16px;
    }
    @media only screen and (max-width: 600px){
        margin-bottom: 20px;
    }
`

const BtnLink = styled(NavLink)`
    text-decoration: none;
    margin: 0 auto 30px auto;
    padding: 0;
`

const HomeBtn = styled(ButtonBase)`
    font-family: "Segoe UI";
    letter-spacing: 0.5px;
    color: #FFF;
    font-size: 18px;
    background-color: #19C706;
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
    outline-color: #19C706;
    border-radius: 3px;
    @media only screen and (max-width: 900px){
        padding-right: 7px;
        padding-block: 6px;
    }
    @media only screen and (max-width: 600px){
        font-size: 12px;
    }
`

export default function NotFound() {
    return (
        <Container>
            <TitleHeader variant='h1'>404 - page not found</TitleHeader>
            <Titledisc variant='body1'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</Titledisc>
            <BtnLink to="/">
                <HomeBtn focusRipple>
                    Go To Homepage
                </HomeBtn>
            </BtnLink>
            <ImgNotFound src="https://res.cloudinary.com/bilel-moussa/image/upload/v1644273430/bilel-moussa/page-not-found_t5vjdr.png" />
        </Container>
    )
}
