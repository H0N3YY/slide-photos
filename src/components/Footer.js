import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { brown } from '@mui/material/colors';

const Footer = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: brown[400],
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="white" variant="h5">
                            © Website created by H0N33Y
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="white" variant="subtitle1">
                            {`${new Date().getFullYear()} | React | Material UI `}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;


