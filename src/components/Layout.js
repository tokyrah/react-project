import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Share from './EmailSignature/Share';
import { AccountMenu } from './Account/AccountMenu'
import { Navbar } from './Navbar';
import { createBrowserHistory, History } from 'history';

export const Layout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const history = window.location.pathname;
    console.log(history)
    return (
        <>
            <Navbar
                onSidebarOpen={() => setSidebarOpen(true)}
            />
            <AccountMenu
                onClose={() => setSidebarOpen(false)}
                open={isSidebarOpen}
            />
            <Box
                component="main"
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '100%',
                    pt: 7
                }}
            >
                <Container maxWidth="sm">
                    {(history !== '/plan') ? <Share /> : ''}
                    <Outlet />
                </Container>
            </Box>
        </>
    )
}
