import React from 'react';
import { Grid } from '@mui/material';
import ProductNavMUI from './ProductNavMUI';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    main: {
        justifyContent: 'center',
    },
});

function Products(props) {

    const { onAdd, items } = props;

    const classes = useStyles();

    return (
        <Grid container spacing={5} className={ classes.main } >
            <Grid item xs >
            </Grid>
            <Grid item xs={2} md={8} sm={2} >
                <ProductNavMUI onAdd={ onAdd } items={ items } />
            </Grid>
            <Grid item xs >
            </Grid>
        </Grid>
    );
}

export default Products;