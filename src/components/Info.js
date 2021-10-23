import React from "react";
import { Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    main: {
        justifyContent: 'center',
    },
    paper: {
        minHeight: '100vh',
    }
});

function Info() {

    const classes = useStyles();

    return (
        <Grid container spacing={1} className={ classes.main } >
            <Grid item xs >
            </Grid>
            <Grid item xs={8} >
                <Paper className={ classes.paper } >
                    <Grid container spacing={1} >
                        <Grid item xs={12}>
                            
                        </Grid>
                        <Grid item xs={12}>
                            
                        </Grid>
                        <Grid item xs={12}>
                            
                        </Grid>
                        <Grid item xs={12}>
                            
                        </Grid>
                        <Grid item xs={12}>
                            
                        </Grid>
                        <Grid item xs={12}>
                            
                        </Grid>
                        <Grid item xs={12}>
                            
                        </Grid>
                        <Grid item xs={12}>
                            
                        </Grid>
                        <Grid item xs={12}>
                            
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs >
            </Grid>
        </Grid>
    );
}

export default Info;