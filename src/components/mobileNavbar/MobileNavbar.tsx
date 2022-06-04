import React from 'react';
import { MobileContainer } from '../mobileNavbar/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../logo/Logo';
import Box from '@mui/material/Box';
import LogoIcon from '../logo/LogoIcon';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';



export default function MobileNavbar() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const toggleDrawer =
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setOpen(false);
        };

    const SideList = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <LogoIcon />
            <div style={{ flex: 1, justifyContent: "center", marginBottom: 15 }}>
                <Typography variant="caption" display="block" gutterBottom style={{ textAlign: "center" }}>
                    Web Developer &amp; Freelancer
                </Typography>
            </div>
            <Divider />
            <List>
                <ListItem button key={'Home'} component={Link} to='/'>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button key={'About'} component={Link} to='/about'>
                    <ListItemIcon>
                        <AssignmentIndIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem button key={'Skills'} component={Link} to='/skills'>
                    <ListItemIcon>
                        <EmojiEventsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Skills" />
                </ListItem>
                <ListItem button key={'Portfolio'} component={Link} to='/portfolio'>
                    <ListItemIcon>
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Portfolio" />
                </ListItem>
                <ListItem button key={'Contact'} component={Link} to='/contact'>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
            <Divider />
        </Box>
    );

    return (
        <MobileContainer>
            <MuiAppBar position="fixed" >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo />
                </Toolbar>
            </MuiAppBar>
            <SwipeableDrawer
                anchor={"left"}
                open={open}
                onClose={handleDrawerClose}
                onOpen={handleDrawerOpen}
            >
                <SideList />
            </SwipeableDrawer>
        </MobileContainer>
    );
}
