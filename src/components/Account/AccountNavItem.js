import React, { useEffect, useState } from "react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Navigate, useHref, useNavigate } from "react-router-dom";
import { LocalConvenienceStoreOutlined } from "@mui/icons-material";

export const AccountNavItem = ({ title, icon, href, subtitle, onClose }) => {
    const navigate = useNavigate();
    const goToUrl = () => {
        navigate(href)
        onClose()
    }

    return (
        <ListItem
            disableGutters
            sx={{
                display: 'flex',
                p: 0
            }}
        >
            <ListItemButton
                disabled={href === '#' ? true : false}
                onClick={goToUrl}
                sx={{
                    py: '7px',
                    borderBottom: '3.5px solid #f5f6fa',
                    backgroundColor: '#ffffff',
                    fontWeight: '600',
                    "&.Mui-disabled": {
                        backgroundColor: '#f5f6fa',
                        opacity: 1,
                        color: '#9CA3AF'
                    }
                }}
            >
                <ListItemText primary={title} />

                {icon &&
                    <ListItemIcon sx={{ justifyContent: 'end', alignItems: 'center' }} color='secondary'>
                        {subtitle &&
                            <Typography component="div" color="text.light" variant="body3" sx={{ fontWeight: 600, pr: 2 }}>
                                {subtitle}
                            </Typography>
                        }
                        {icon}
                    </ListItemIcon>
                }

            </ListItemButton>

        </ListItem >
    );
}
