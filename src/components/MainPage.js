import React from "react";
//import { styled } from '@mui/material/styles'
import { Box, Typography, Grid, Paper } from '@mui/material';
import CarouselMUI from '../MUI/CarouselMUI';
import Footer from "./Footer";

/*const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));*/

function MainPage() {

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
            {/*<Grid item xs={12} >
                <Item>one</Item>
            </Grid>
            <Grid item xs={12}>
                <Item>two</Item>
            </Grid>
            <Grid item xs={12}>
                <Item>three</Item>
            </Grid>*/}
        </Grid>
        <Grid 
            container 
            justify="center" 
            alignItems='center' 
            margin={1} 
            spacing={1}
        >
            <Paper >
                <Grid 
                    container 
                    spacing={1} 
                    width='150vh' 
                    height='80vh'
                >
                    <Grid item xs={12}>
                        <CarouselMUI />
                    </Grid>
                    <Grid item xs={12}>
                        <Box textAlign='center'>
                            <Typography color='text.secondary' variant='h5'>Tervetuloa</Typography>
                            <Typography color='text.secondary'>Suomen suurimpaan frisbeegolf kauppaan</Typography>
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

export default MainPage;