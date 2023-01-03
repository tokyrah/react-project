
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Typography } from '@mui/material';

export default function CreateLink() {
    const [drawerDirection, setDrawerDirection] = useState({
        bottom: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerDirection({ ...drawerDirection, [anchor]: open });
    };

    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);

    };

    const list = (anchor) => (
        <Box
            sx={{
                pt: 1,
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                width: 'bottom' ? 'auto' : 250
            }}
        >

            <Typography
                sx={{ pb: 2.5 }}
                component="div"
                variant="h2"
                color="text.dark"
            >
                Create Link Category
            </Typography>

            <List
                sx={{ pb: 6 }}
                component="nav"
                aria-label="main mailbox folders"
            >
                {['Social Nework', 'Portfolio', 'Link'].map((category, index) => (
                    <ListItemButton
                        key={index}
                        selected={selectedIndex === index}
                        onClick={(event) => handleListItemClick(event, index)}
                        sx={{
                            borderBottom: '1px solid #D1D5DB',
                            marginBottom: 0,
                            color: '#9CA3AF',
                            "&:first-of-type": {
                                borderTop: '1px solid #D1D5DB'
                            },
                            "&.Mui-selected": {
                                backgroundColor: '#265cb4 !important',
                                color: '#ffffff',
                                ".MuiSvgIcon-root": {
                                    color: '#ffffff'
                                }
                            }
                        }}
                    >
                        <ListItemText sx={{ textAlign: "center" }} primary={category} />

                        {(selectedIndex === index) ?
                            <ListItemIcon
                                sx={{
                                    position: 'absolute',
                                    right: '5px'
                                }}
                            >
                                <EditIcon
                                    sx={{ fontSize: '1.1rem' }}
                                    color="secondary"
                                />
                                <DeleteOutlineIcon
                                    sx={{ ml: 1.5, fontSize: '1.1rem' }}
                                    color="secondary"
                                />
                            </ListItemIcon>
                            : ''
                        }
                    </ListItemButton>

                ))}
            </List>
            <Button
                variant="text"
                fullWidth
                size="large"
                sx={{
                    backgroundColor: '#D1D5DB !important',
                    borderRadius: 0,
                    color: '#979797',
                    fontSize: '1rem',
                    textTransform: 'initial'
                }}
            >
                Add Category
            </Button>
        </Box >
    );

    return (
        <div>
            <Button
                sx={{ textTransform: 'initial' }}
                onClick={toggleDrawer("bottom", true)}
                size="small"
                color="primary"
                aria-label="Add new link"
                variant="contained"
                component="div"
                startIcon={
                    <AddCircleOutlineIcon
                        fontSize='small'
                        sx={{ color: '#ffffff', textTransform: 'initial' }}
                    />
                }
            >
                Add New Link
            </Button>
            <Drawer
                anchor="bottom"
                open={drawerDirection["bottom"]}
                onClose={toggleDrawer("bottom", false)}
                className="BorderRadiusTop"
            >
                {list("bottom")}
            </Drawer>
        </div>
    );
}