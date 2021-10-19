import React from "react";
import { Box, Grid, Paper, Typography } from '@mui/material'

function Info() {
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
        <Grid container justify="center" alignItems='center' margin={1} spacing={1}>
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
        <Grid container width={300} justify="center" alignItems='center' margin={1} spacing={1}>
            {/*<Grid item xs={12}>
                <Item>one</Item>
            </Grid>
            <Grid item xs={12}>
                <Item>two</Item>
            </Grid>
            <Grid item xs={12}>
                <Item>three</Item>
        </Grid>*/}
        </Grid>
        </Box>
        
    );
}

export default Info;