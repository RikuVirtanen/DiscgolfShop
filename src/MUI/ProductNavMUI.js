import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { makeStyles } from '@mui/styles';
import DGlist from '../components/DGlist';

const useStyles = makeStyles({
    box: {
        width: '150vh',
        height: '80vh',
        backgroundColor: '#FFFFFF',
    },
    nav: {
        height: 50,
        backgroundColor: '#FFFFFF',

    },
    label: {
        fontSize: '10px'
    },
    
})

function ProductNavMUI() {
    const [value, setValue] = useState(0);

    const handleChange = (e, val) => {
        setValue(val);
    }

    const classes = useStyles();

    return (
        <Box className={ classes.box }>
            <Box className={ classes.nav}> 
                <Tabs className={ classes.text }
                value={ value } 
                onChange={ handleChange } 
                variant='fullWidth' 
                textColor={ 'primary' }
                indicatorColor={ 'primary' }
                centered
                >
                    <Tab className={ classes.label } label='Tarjoukset' />
                    <Tab className={ classes.label } label='Draiverit' />
                    <Tab className={ classes.label } label='Väylädraiverit' />
                    <Tab className={ classes.label } label='Midarit' />
                    <Tab className={ classes.label } label='Putterit' />
                    <Tab className={ classes.label } label='Reput' />
                    <Tab className={ classes.label } label='Oheistuotteet' />
                </Tabs>
            </Box>
            <Box>
                { value === 0   }
                { value === 1 && <DGlist type={'driver'} /> }
                { value === 2 && <DGlist type={'fairway driver'} /> }
                { value === 3 && <DGlist type={'midrange'} /> }
                { value === 4 && <DGlist type={'putter'} /> } 
                { value === 5   } 
            </Box>
        </Box>
    );
}

export default ProductNavMUI;