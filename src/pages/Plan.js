import React, { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Link,
    Typography
} from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

function Plan() {
    const [selectedValue, setSelectedValue] = useState('free');
    const [changeIcon, setchangeIcon] = useState(false);
    const handleSubmit = () => { }
    const handleChange = (event) => {

        setSelectedValue(event.target.value);
        console.log(selectedValue)
        if (!changeIcon) {
            setchangeIcon(false)
        } else {
            setchangeIcon(true)
        }
    };

    const preventDefault = (event) => event.preventDefault();

    return (
        <>
            <Box
                sx={{
                    pt: 2,
                    pb: 9,
                    display: 'flex',
                    flexDirection: 'column',
                    ".hoverPlan": {
                        borderColor: '#265cb4'
                    }
                }}
            >

                <Typography
                    component="div"
                    variant="h2"
                >
                    Pick your plan
                </Typography>
                <Box sx={{ mt: 3, mb: 0 }}>
                    <form className="plan-form" onSubmit={handleSubmit}>
                        <label>
                            <input
                                type="radio"
                                value="free"
                                name="plan"
                                checked={selectedValue === 'free'}
                                onChange={handleChange}
                            />
                            <Card
                                sx={{
                                    mb: 3,
                                    '&:hover': {
                                        borderColor: '#265cb4 !important',
                                        cursor: 'pointer'
                                    }
                                }}
                            >
                                <CardContent
                                    sx={{
                                        py: 3.2,
                                        px: 2.5,
                                        position: 'relative'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            pb: 1.5
                                        }}
                                        component="div"
                                        variant="h5"
                                    >
                                        FREE
                                    </Typography>
                                    <Typography
                                        sx={{ pb: 2.5 }}
                                        component="div"
                                        variant="h5"
                                    >
                                        $0
                                    </Typography>
                                    <Typography
                                        component="div"
                                        variant="body3"
                                    >
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit leo, metus lacinia suspendisse integer sapien litora suscipit vel
                                    </Typography>
                                </CardContent>
                            </Card>
                        </label>


                        <label>
                            <input
                                type="radio"
                                value="pro"
                                name="plan"
                                checked={selectedValue === 'pro'}
                                onChange={handleChange}
                            />
                            <Card
                                sx={{
                                    '&:hover': {
                                        borderColor: '#265cb4 !important',
                                        cursor: 'pointer'
                                    }
                                }}
                            >
                                <CardContent
                                    sx={{
                                        py: 3.2,
                                        px: 2.5,
                                        position: 'relative'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            pb: 1.5
                                        }}
                                        component="div"
                                        variant="h5"
                                    >
                                        PRO
                                    </Typography>
                                    <Typography
                                        sx={{ pb: 2.5 }}
                                        component="div"
                                        variant="h5"
                                    >
                                        $6
                                    </Typography>
                                    <Typography
                                        component="div"
                                        variant="body3"
                                    >
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit leo, metus lacinia suspendisse integer sapien litora suscipit vel
                                    </Typography>
                                </CardContent>
                            </Card>
                        </label>

                        <Box sx={{ pt: 5 }}>
                            <Button
                                sx={{
                                    textAlign: 'center',
                                    py: 1.3,
                                    fontSize: '1rem'
                                }}
                                color="primary"
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                Sign Up For Free ${(selectedValue === 'free') ? 0 : 6}
                            </Button>
                        </Box>
                    </form>
                </Box>
                <Box sx={{ textAlign: 'center', pt: 5 }}>
                    <Link href="#" variant="body1" color="textSecondary" onClick={preventDefault}>
                        Compare Plans
                    </Link>
                </Box>
            </Box>
        </>
    )
}

export default Plan;