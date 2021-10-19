import React from 'react';
import { Grid } from '@mui/material';
import ProductNavMUI from './ProductNavMUI';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    main: {
        justifyContent: 'center',
    },
});

function Products() {

    const classes = useStyles();

    return (
        <Grid container spacing={1} className={ classes.main } >
            <Grid item xs >
            </Grid>
            <Grid item xs={8} >
                <ProductNavMUI />
            </Grid>
            <Grid item xs >
            </Grid>
        </Grid>
    );
}

export default Products;