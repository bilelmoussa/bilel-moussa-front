import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const LogoContainer = styled.div`
    display: flex;
    height: 33px;
    @media only screen and (max-width: 1024px){
        height: 28px;
    }
`

const Img = styled.img`
    width: 100%;
    height: auto;
    max-width: 222px;
    aspect-ratio: 222 / 33;
`


export default function Logo() {
    return (
        <LogoContainer>
            <NavLink to="/" style={{ display: "flex", width: "100%" }}>
                <Img
                    srcSet="../img/logo_188x28.webp 188w, ../img/logo.webp 222w"
                    sizes="(max-width: 1025px) 188px, 222px"
                    src="../img/logo.webp"
                    alt="bilel moussa logo"
                />
            </NavLink>
        </LogoContainer>
    )
}
