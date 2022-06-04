import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Navbar from '../components/navbar';
import MobileNavbar from '../components/mobileNavbar/MobileNavbar';
import Footer from '../components/Footer/Footer';


const MainContainer = styled(Container)`
    position: relative;
    @media only screen and (max-width: 900px){
        padding: 32px 16px !important;
    }
`

export default function AppLayout({ children }: any) {
    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
    });


    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CssBaseline />

                <Navbar />

                <MobileNavbar />

                <MainContainer maxWidth="lg" style={{ flexGrow: 1, padding: theme.spacing(3) }}>
                    {children}
                </MainContainer>

                <Footer />
            </Box>
        </ThemeProvider>
    )
}
