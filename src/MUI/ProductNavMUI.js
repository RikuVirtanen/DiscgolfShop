import React, { useState } from "react";
import { Box, Tab, Tabs, Paper } from "@mui/material";
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
            <Box className={ classes.nav}> 
                <Tabs 
                value={ value } 
                onChange={ handleChange } 
                variant='fullWidth' 
                textColor={ 'primary' }
                indicatorColor={ 'primary' }
                centered >
                    <Tab label='Draiverit' />
                    <Tab label='Väylädraiverit' />
                    <Tab label='Midarit' />
                    <Tab label='Putterit' />
                </Tabs>
            </Box>
            <Box>
                { value === 0 && <DGlist type={'driver'} /> }
                { value === 1 && <DGlist type={'fairway driver'} /> }
                { value === 2 && <DGlist type={'midrange'} /> }
                { value === 3 && <DGlist type={'putter'} /> } 
            </Box>
        </Paper>
    );
}

export default ProductNavMUI;