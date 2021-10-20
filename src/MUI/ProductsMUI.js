import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ProductNavMUI from './ProductNavMUI';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    main: {
        justifyContent: 'center',
    },
});

function Products(props) {

    const { onAdd } = props;

    const classes = useStyles();

    return (
        <Grid container spacing={1} className={ classes.main } >
            <Grid item xs >
            </Grid>
            <Grid item xs={8} >
                <ProductNavMUI onAdd={ onAdd }/>
            </Grid>
            <Grid item xs >
            </Grid>
        </Grid>
    );
}

export default Products;