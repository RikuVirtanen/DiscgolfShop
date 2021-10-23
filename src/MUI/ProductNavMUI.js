import React, { useState } from "react";
import { Box, Tab, Tabs, Paper, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import DGlist from '../components/DGlist';

const useStyles = makeStyles({
    paper: {
        height: '100%',
    },
    nav: {
        position: 'fixed',
        width: '25vh',
        left: 260,
        backgroundColor: '#FFFFFF',
    },
    main: {
        marginTop: 0
    }
})

function ProductNavMUI(props) {

    const { onAdd } = props;
    const [value, setValue] = useState(0);

    const handleChange = (e, val) => {
        setValue(val);
    }

    

    const classes = useStyles();

    return (
        
        <Grid container spacing={1}>
            <Grid item xs={3} >
                <Paper className={ classes.paper }>
                    <Box className={ classes.nav }> 
                        <Tabs 
                        orientation='vertical'
                        value={ value } 
                        onChange={ handleChange } 
                        textColor={ 'primary' }
                        indicatorColor={ 'primary' } >
                            <Tab label='Kaikki' />
                            <Tab label='Draiverit' />
                            <Tab label='Väylädraiverit' />
                            <Tab label='Midarit' />
                            <Tab label='Putterit' />
                        </Tabs>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs className={ classes.main }>
            <Box>
                { value === 0 && <DGlist onAdd={ onAdd } type={'all'} /> }
                { value === 1 && <DGlist onAdd={ onAdd } type={'driver'} /> }
                { value === 2 && <DGlist onAdd={ onAdd } type={'fairway driver'} /> }
                { value === 3 && <DGlist onAdd={ onAdd } type={'midrange'} /> }
                { value === 4 && <DGlist onAdd={ onAdd } type={'putter'} /> } 
            </Box>
            </Grid>
        </Grid>
        
    );
}

export default ProductNavMUI;