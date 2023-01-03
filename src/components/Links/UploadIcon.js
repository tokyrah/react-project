import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Divider, IconButton, Typography } from '@mui/material';
import { EditNotifications, PhotoCamera } from '@mui/icons-material';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { styled } from '@mui/material/styles';

export default function UploadIcon() {
    const [state, setState] = useState({
        bottom: false
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ bottom: open });
    };

    const Input = styled('input')({
        display: 'none',
    });

    const content = (anchor) => (
        <Box
            sx={{
                pt: 4.5,
                pb: 5,
                px: 5,
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                width: 'bottom' ? 'auto' : 250
            }
            }
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <Box sx={{ pb: 4 }} >
                <Typography
                    sx={{ pb: 1, color: '#000000' }}
                    component="div"
                    variant="body3"
                >
                    Upload the icon for your link
                </Typography>
                <IconButton aria-label="The link" >
                    <EditNotifications
                        color="secondary"
                        fontSize='small'
                    />
                </IconButton>
                <Box sx={{ pt: 2.5, pb: 3 }}>
                    <label htmlFor="contained-button-file">
                        <Input
                            accept="image/*"
                            id="contained-button-file"
                            type="file"
                        />
                        <Button
                            sx={{
                                borderRadius: '25px',
                                fontSize: '.9rem',
                                fontWeight: '600',
                                textTransform: 'initial'
                            }}
                            aria-label="upload picture"
                            variant="contained"
                            component="span"
                            startIcon={
                                <PhotoCamera
                                    fontSize='medium'
                                    sx={{ color: '#ffffff' }}
                                />}
                        >
                            Use Camera
                        </Button>
                    </label>
                </Box>
                <Divider
                    sx={{
                        maxWidth: '250px',
                        margin: '0 auto'
                    }}
                    component="div"
                >
                    Or
                </Divider>
            </Box>
            <Box>
                <label htmlFor="contained-button-file">
                    <Input
                        accept="image/*"
                        id="contained-button-file"
                        type="file"
                    />
                    <Button
                        sx={{ borderColor: '#E6E8F0' }}
                        size="large"
                        color="inherit"
                        aria-label="upload picture"
                        variant="outlined"
                        component="span"
                        fullWidth
                        startIcon={
                            <InsertPhotoOutlinedIcon />
                        }
                    >
                        Select the picture from library
                    </Button>
                </label>
            </Box>
        </Box>
    );

    return (
        <div>
            <React.Fragment key="bottom">
                <IconButton aria-label="add icon link" onClick={toggleDrawer(true)}>
                    <InsertPhotoOutlinedIcon sx={{ fontSize: '1.125rem' }} color="secondary" />
                </IconButton>
                <Drawer
                    anchor="bottom"
                    open={state['bottom']}
                    onClose={toggleDrawer(false)}
                    className="BorderRadiusTop"
                >
                    {content('bottom')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}

