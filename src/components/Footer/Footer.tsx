import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FooterSocialMedia from '../footerSocialMedia/FooterSocialMedia';


const StyledFooter = styled('footer')`
    width: 100%;
    margin-top: 200px;
    background-color: #0D0D0D;
    @media only screen and (max-width: 900px){
        margin-top: 100px;
    }
`

const FooterContainer = styled(Container)`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 1.5em;
    flex-wrap: wrap;
    @media only screen and (max-width: 900px){
        flex-direction: column-reverse;
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <FooterContainer >
                <Typography fontFamily="Segoe UI" variant="body1" display="block" style={{ textAlign: "center" }}>
                    © Copyright 2022 by <b>Bilel Moussa</b> . All rights reserved.
                </Typography>
                <FooterSocialMedia />
            </FooterContainer>
        </StyledFooter>
    );
}
