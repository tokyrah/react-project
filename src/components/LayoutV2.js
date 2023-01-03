import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AccountMenu } from './Account/AccountMenu';
import { Navbar } from './Navbar';

export const LayoutV2 = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

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
                    <Outlet />
                </Container>
            </Box>
        </>
    )
}