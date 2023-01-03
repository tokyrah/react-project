import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { Navigate, Link } from 'react-router-dom';
import * as Yup from 'yup';
import logoDark from '../card-killer-logo-dark.jpg';

const Login = (props) => {
    const [confirm, setConfirm] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
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
        return (
            <Navigate
                to={{
                    pathname: '/',
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
                            color="textDark"
                            variant="subtitle3"
                            component="div"
                        >
                            CARD KILLER
                        </Typography>
                    </Box>
                    <form onSubmit={formik.handleSubmit}>
                        <Box sx={{ my: 3 }}>
                            <Box sx={{ mb: 2 }}>
                                <Typography
                                    color="primary"
                                    variant="h2"
                                >
                                    Sign in
                                </Typography>
                            </Box>

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
                                    Sign in
                                </Button>
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
                                    Don't have an account?
                                    <Typography
                                        sx={{ fontWeight: 600 }}
                                        component="span"
                                    >
                                        <Link to="/register">&nbsp;Sign up</Link>
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

export default Login; 