import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container';

export const NavContainer = styled(Container)`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2em;
    @media only screen and (max-width: 1024px){
        display: none;
    }
    z-index: 999;
`

export const NavMenu = styled('nav')`
    display: flex;
    align-items: center;
`



