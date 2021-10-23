import React from "react";
import { Box, Typography, Grid, Paper } from '@mui/material';
import CarouselMUI from '../MUI/CarouselMUI';
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
        marginTop: 50
    },
    paper: {
        marginTop: '2vw',
        padding: '2vw',
        minHeight: '70vh',
    }
});

function MainPage() {

    const classes = useStyles();

    return (
        <Grid container spacing={1} className={ classes.main } >
            <Grid item xs >
            </Grid>
            <Grid item xs={8} >
                <Box className={ classes.carouselContainer } >
                    <CarouselMUI />
                </Box>
                <Paper className={ classes.paper } >
                    <Box className={ classes.container } >
                        <Typography color='text.secondary' variant='h5'>Tervetuloa</Typography>
                        <Typography color='text.secondary'>Suomen suurimpaan frisbeegolfkauppaan</Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs >
            </Grid>
        </Grid>
    );
}

export default MainPage;