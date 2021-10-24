import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DGForm from './DGForm';

const useStyles = makeStyles({
    main: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    paper: {
        display: 'block',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
        paddingTop: '10vh'
    },
    typo: {
        color: '#000000'
    }
})

function FormPage() {

    const classes = useStyles();

    return (
        <Grid container spacing={1} className={ classes.main } >
            <Grid item xs >
            </Grid>
            <Grid item xs={8} >
                <Paper className={ classes.paper }>
                    <Typography className={ classes.typo }>
                        Puuttuuko valikoimistamme joku kiekko
                    </Typography>
                    <DGForm />
                </Paper>
            </Grid>
            <Grid item xs >
            </Grid>
        </Grid>
    );
}

export default FormPage;