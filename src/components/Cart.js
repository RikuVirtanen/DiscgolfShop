import React from "react";
import { Box, Typography, Grid, Paper } from '@mui/material';

function ShoppingCart() {

    return (
        <Box
            display="flex"
            justify="center"
            minHeight="80vh"
        >
            <Grid 
            container 
            direction='row'
            width={300} 
            justifyContent="center" 
            alignItems='center'
            margin={1} 
            spacing={1} 
            
            >
        </Grid>
        <Grid 
            container 
            justify="center" 
            alignItems='center' 
            margin={1} 
            spacing={1}
        >
            <Paper >
                <Grid container spacing={1} width='150vh' height='80vh'>
                    <Grid item xs={12}>
                        
                    </Grid>
                    <Grid item xs={12}>
                        <Box textAlign='center'>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box></Box>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
        <Grid 
            container 
            width={300} 
            justify="center" 
            alignItems='center' 
            margin={1} 
            spacing={1}
        >
        </Grid>
        </Box>
        
    );
}

export default ShoppingCart;