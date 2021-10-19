import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import ProductNavMUI from './ProductNavMUI';

function Products() {

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
                margin={1} 
                spacing={1}>
                <Paper>
                    <ProductNavMUI />
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

export default Products;