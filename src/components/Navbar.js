import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import logoWhite from '../card-killer-logo-white.jpg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Navbar = (props) => {
    const { onSidebarOpen } = props;

    return (
        <>
            <AppBar position="fixed">
                <Toolbar sx={{ minHeight: '48px !important', height: '48px !important' }}>
                    <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Link
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                            to="/"
                        >
                            <img style={{ maxWidth: '100%', width: '32px' }} src={logoWhite} alt="Logo" />
                        </Link>
                        <IconButton
                            onClick={onSidebarOpen}
                            color="inherit"
                            aria-label="Menu"
                            sx={{
                                p: 0,
                            }}
                        >
                            <MenuIcon sx={{ color: '#ffffff' }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

Navbar.propTypes = {
    onSidebarOpen: PropTypes.func
};