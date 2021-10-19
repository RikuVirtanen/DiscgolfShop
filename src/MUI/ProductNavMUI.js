import React, { useState } from "react";
import { Box, Tab, Tabs, Paper, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import DGlist from '../components/DGlist';

const useStyles = makeStyles({
    paper: {
        minHeight: '150vh',
    },
    box: {
        backgroundColor: '#FFFFFF',
    },
    nav: {
        position: 'fixed',
        left: 325,
        backgroundColor: '#FFFFFF',
    },
})

function ProductNavMUI() {
    const [value, setValue] = useState(0);

    const handleChange = (e, val) => {
        setValue(val);
    }

    const classes = useStyles();

    return (
        <Paper className={ classes.paper }>
            <Grid container spacing={1}>
                <Grid item xs={3} >
            <Box className={ classes.nav}> 
                <Tabs 
                orientation='vertical'
                value={ value } 
                onChange={ handleChange } 
                variant='scrollable' 
                textColor={ 'primary' }
                indicatorColor={ 'primary' }
                centered >
                    <Tab label='Kaikki' />
                    <Tab label='Draiverit' />
                    <Tab label='Väylädraiverit' />
                    <Tab label='Midarit' />
                    <Tab label='Putterit' />
                </Tabs>
            </Box>
            </Grid>
            <Grid item xs >
            <Box>
                { value === 0 && <DGlist type={'all'} /> }
                { value === 1 && <DGlist type={'driver'} /> }
                { value === 2 && <DGlist type={'fairway driver'} /> }
                { value === 3 && <DGlist type={'midrange'} /> }
                { value === 4 && <DGlist type={'putter'} /> } 
            </Box>
            </Grid>
            </Grid>
        </Paper>
    );
}

export default ProductNavMUI;