import React from 'react'
import styled from "styled-components"
import { NavLink } from "react-router-dom";
import LogoIconImg from '../../assets/logo-mobile.webp'

export const LogoContainer = styled(NavLink)`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 1em;
`

const Img = styled.img`
    width: 100%;
    height: auto;
    max-width: 218px;
    aspect-ratio: 218 / 149;
`

export default function LogoIcon() {
    return (
        <LogoContainer to="/">
            <Img width={218} height={149} src={LogoIconImg} alt="logo" />
        </LogoContainer>
    )
}
