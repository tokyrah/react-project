import React from 'react'
import { Button, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import IosShareIcon from '@mui/icons-material/IosShare';
import LockIcon from '@mui/icons-material/Lock';

export default function Share() {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography
                    variant="body3"
                    component="div"
                >
                    Share My Card Killer Link
                </Typography>
                <Typography
                    color="neutral.400"
                    component="div"
                    variant="body2"
                    sx={{ fontWeight: 400 }}
                >
                    http:peipei@cardkiller.com
                </Typography>
                <IconButton aria-label="Share My Card Killer Link">
                    <IosShareIcon color="inherit" sx={{ fontSize: 17 }} />
                </IconButton>
            </Box>
            <Box sx={{ mb: 4 }}>
                <Button size="large" sx={{ borderColor: '#D1D5DB', lineHeight: '1.5', padding: '0 40px' }} color="inherit" aria-label="upload picture" variant="outlined" component="span" startIcon={<LockIcon fontSize='small' color="secondary" />}>
                    General Email Signature
                </Button>
            </Box>
        </>
    )
}