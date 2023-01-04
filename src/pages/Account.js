import React from "react";
import { Container, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { AccountMenu } from "../components/Account/AccountMenu";

function Account() {

    return (
        <>
           <Box
                component="main"
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '100%',
                    backgroundColor: "#ffffff",
                    pt: 2,
                    pb: 7
                }}
            >
                <Container
                    maxWidth="sm"
                    sx={{ p: 0 }}
                >
                    <Box sx={{ py: 2 }}
                    >
                        <Typography
                            sx={{
                                textAlign: 'center',
                                pb: 1.5
                            }}
                            component="div"
                            variant="h2"
                        >
                            Your account
                        </Typography>
                    </Box>


                    <Divider
                        sx={{
                            height: 15,
                            backgroundColor: '#f5f6fa'
                        }}
                    />
                    <AccountMenu />
                </Container>
            </Box>
        </>
    )
}

export default Account;