import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { Navigate, Link } from 'react-router-dom';
import * as Yup from 'yup';
import logoDark from '../logo-dark.svg';

function Register() {
    const [confirm, setConfirm] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
            yourName: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email(
                    'Must be a valid email')
                .max(255)
                .required(
                    'Email is required'),
            yourName: Yup
                .string()
                .max(255)
                .required(
                    'Your name is required'),
            password: Yup
                .string()
                .max(255)
                .required(
                    'Password is required')
        }),
        onSubmit: values => {
            setConfirm(true);
            console.log(JSON.stringify(values, null, 2));
        },
    });

    if (confirm) {
        console.log('ok');
        return (
            <Navigate
                to={{
                    pathname: "/",
                }}
            />
        );
    }

    return (
        <>
            <Box
                component="main"
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '100vh',
                    justifyContent: 'center',
                    px: 2,
                    backgroundColor: '#ffffff'
                }}
            >
                <Container maxWidth="sm">
                    <Box sx={{ textAlign: 'center', mb: 5.5 }}>
                        <img style={{ maxWidth: '100%', width: '45px' }} src={logoDark} alt="Logo" />
                        <Typography
                            sx={{ fontWeight: '600', pt: .5 }}
                            /* color="textDark" */
                            variant="subtitle3"
                            component="div"
                            color="GrayText.dark"
                        >
                            MY APP
                        </Typography>
                    </Box>
                    <form onSubmit={formik.handleSubmit}>
                        <Box sx={{ my: 3 }}>
                            <Box sx={{ mb: 2 }}>
                                <Typography
                                    color="primary"
                                    variant="h2"
                                >
                                    Create a account for free
                                </Typography>
                            </Box>

                            <TextField
                                error={Boolean(formik.touched.yourName && formik.errors.yourName)}
                                fullWidth
                                label="Your name"
                                name="yourName"
                                variant="outlined"
                                margin="normal"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.yourName}
                                helperText={formik.touched.yourName && formik.errors.yourName}
                            />

                            <TextField
                                error={Boolean(formik.touched.email && formik.errors.email)}
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                variant="outlined"
                                margin="normal"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                helperText={formik.touched.email && formik.errors.email}
                            />

                            <TextField
                                error={Boolean(formik.touched.password && formik.errors.password)}
                                fullWidth
                                label="Password"
                                name="password"
                                type="password"
                                variant="outlined"
                                margin="normal"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                helperText={formik.touched.password && formik.errors.password}
                            />

                            <Box sx={{ py: 2 }}>
                                <Button
                                    sx={{
                                        textAlign: 'center',
                                        py: 1.3,
                                        fontSize: '1rem'
                                    }}
                                    color="primary"
                                    disabled={formik.isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                >
                                    Sign up
                                </Button>
                            </Box>
                            <Box sx={{ px: 1.5 }}>
                                <Typography
                                    sx={{ textAlign: 'center' }}
                                    color="textSecondary"
                                    variant="body1"
                                >
                                    By creating an account you agree with out&nbsp;
                                    <Typography
                                        sx={{ textDecoration: 'underline' }}
                                        component="span"
                                    >
                                        terms
                                    </Typography>
                                    &nbsp;and&nbsp;
                                    <Typography
                                        sx={{ textDecoration: 'underline' }}
                                        component="span"
                                    >
                                        privacy policy
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box
                                sx=
                                {{
                                    my: 3,
                                    textAlign: 'center'
                                }}
                            >
                                <Typography
                                    color="textPrimary"
                                    variant="body1"
                                    component="span"
                                >
                                    Already have an account?
                                    <Typography
                                        sx={{ fontWeight: 600 }}
                                        component="span"
                                    >
                                        <Link to="/login">&nbsp;Sign in</Link>
                                    </Typography>
                                </Typography>

                            </Box>
                        </Box>
                    </form>
                </Container>
            </Box>
        </>
    )
}

export default Register;
