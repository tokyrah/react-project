import React, { useState } from 'react';
import { FormControl, MenuItem, Select, Switch, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import MenuIcon from '@mui/icons-material/Menu';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import UploadIcon from './UploadIcon';
import PropTypes from 'prop-types';

export default function LinkItem({ link, onDelete }) {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [ToggleInput, setToggleInput] = useState(false);
    const [NbrView, setNbrView] = useState(link.view);
    const [values, setValues] = useState({
        title: link.title,
        category: link.category
    });
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };
    const editTitle = () => {
        if (!ToggleInput) {
            setToggleInput(true);
        } else {
            setToggleInput(false);
        }
    }
    const CountNbrView = () => {
        setNbrView((prevState) => prevState + 1)
    }

    const title = (link.title) ? link.title : "Title";

    return (
        <>
            <Card
                sx={{
                    display: 'flex',
                    mb: 1,
                    borderRadius: '0'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '30px',
                        minWidth: '30px'
                    }}
                >
                    <MenuIcon
                        sx={{
                            padding: '4px',
                            fontSize: '1.4rem'
                        }}
                        fontSize='medium'
                    />
                    <Divider
                        orientation="vertical"
                        flexItem
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                    <CardContent
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '7px 10px 4px 10px',
                            '&:last-child': {
                                paddingBottom: '32px'
                            }
                        }}
                    >
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    pb: .5
                                }}
                            >
                                {ToggleInput ?
                                    <Box sx={{
                                        "input": {
                                            border: 0,
                                            margin: 0,
                                            padding: 0,
                                            fontSize: '0.95rem',
                                            fontWeight: '600',
                                            lineHeight: '1.57',
                                            letterSpacing: '-.4px',
                                            outline: 'none',
                                            maxWidth: '50px'
                                        }
                                    }}
                                    >
                                        <input
                                            type="text"
                                            label="Title"
                                            name="title"
                                            onChange={handleChange}
                                            value={(values.title) ? values.title : "Title"}
                                        />
                                    </Box>
                                    :
                                    <Typography
                                        variant="subtitle1"
                                    >
                                        {title}
                                    </Typography>
                                }

                                <IconButton
                                    aria-label="Edit"
                                    onClick={editTitle}
                                >
                                    <EditIcon
                                        color="secondary"
                                        sx={{ fontSize: '1rem' }} />
                                </IconButton>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'start',
                                    marginTop: '-5px'
                                }}
                            >
                                <Typography
                                    variant="body3"
                                    color="text.dark"
                                    component="div"
                                >
                                    http
                                </Typography>
                                <IconButton
                                    sx={{ marginTop: '-6px' }}
                                    aria-label="Url"
                                    onClick={CountNbrView}
                                >
                                    <InsertLinkIcon
                                        color="secondary"
                                        sx={{ fontSize: '1rem' }}
                                    />
                                </IconButton>
                            </Box>
                        </Box>
                        <Box>
                            <Switch {...label} defaultChecked />
                        </Box>

                    </CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            padding: '0 7px',
                            marginTop: '-6px'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%'
                            }}
                        >
                            <UploadIcon />
                            <BarChartIcon
                                sx={{
                                    fontSize: '1rem',
                                    pl: .5,
                                    pr: .5
                                }}
                                color="secondary"
                            />
                            <Typography
                                variant="body2"
                                component="div"
                            >
                                {NbrView} click
                            </Typography>
                            <IconButton
                                aria-label="Move card"
                                sx={{ pl: .2, pr: .5 }}
                            >
                                <ArrowRightAltIcon
                                    sx={{
                                        fontSize: '.9rem',
                                        transform: 'rotate(-90deg)'
                                    }}
                                    color='action'
                                />
                            </IconButton>
                            <FormControl
                                variant="standard"
                                sx={{
                                    mt: 0,
                                    mb: 0,
                                    pl: 1,
                                    minWidth: 120
                                }}
                            >
                                <Select
                                    labelId="category-links-label"
                                    id="category-links"
                                    disableUnderline={true}
                                    value="Social Network"
                                    onChange={handleChange}
                                    name="category"
                                    sx={{ fontSize: '0.85rem', color: '#000000', fontWeight: '600' }}
                                >
                                    <MenuItem value="Social Network">Social Network</MenuItem>
                                    <MenuItem value="Portfolio">Portfolio</MenuItem>
                                    <MenuItem value="Links">Links</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        >
                            <IconButton
                                aria-label="Delete link"
                                onClick={() => onDelete(link.id)}
                            >
                                <DeleteOutlineIcon fontSize='small' />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </>
    )
}

LinkItem.propTypes = {
    link: PropTypes.object.isRequired
};