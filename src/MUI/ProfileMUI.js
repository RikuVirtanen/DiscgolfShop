import React from "react";
import { Box, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    
    main: {
        justifyContent: 'center',
    },
    carouselContainer: {
        display: 'block',
        textAlign: 'center',
    },
    container: {
        display: 'block',
        textAlign: 'center',
    },
    paper: {
        marginTop: '0vw',
        padding: '5vw',
        minHeight: '70vh',
    }
});

export default function ProfileMUI() {

    const classes = useStyles();

    return(
        <Grid container spacing={1} className={ classes.main } >
            <Grid item xs >
            </Grid>
            <Grid item xs={8} >
                <Paper className={ classes.paper } >
                    <Box className={ classes.container } >
                        
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs >
            </Grid>
        </Grid>
    );

}