import React, { useState } from "react";
import { Box, Tab, Tabs, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import DGlist from '../components/DGlist';

const useStyles = makeStyles(theme => ({
    nav: {
        position: 'fixed',
        width: '25vh',
        marginTop: '2.5vh',
        left: '8vw',
        backgroundColor: '#FFFFFF',
        [theme.breakpoints.up('xs')]: {
            left: '-6vw'
        },
        [theme.breakpoints.up('sm')]: {
            left: '5vw'
        },
        [theme.breakpoints.up('md')]: {
            left: '15vw'
        },
        
    },
    tabs: {
        [theme.breakpoints.up('xs')]: {
            marginLeft: '50px',
            width: '100px'
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: '0',
            width: '100%'
        },
       
    },
    tab: {
        [theme.breakpoints.up('xs')]: {
            fontSize: '10px'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '15px'
        },
    },
    main: {
        [theme.breakpoints.up('xs')]: {
            MaxWidth: '70vw',
            minWidth: '40vw',
            marginLeft: '-1vw',
        },
        [theme.breakpoints.up('sm')]: {
            MaxWidth: '70vw',
            minWidth: '55vw',
            marginLeft: '-4vw',
        },
        [theme.breakpoints.up('md')]: {
            MaxWidth: '170vw',
            minWidth: '60vw',
            marginLeft: '7vw',
        }
    }
}));

function ProductNavMUI(props) {

    const { onAdd, items } = props;
    const [value, setValue] = useState(0);

    const handleChange = (e, val) => {
        setValue(val);
    }

    

    const classes = useStyles();

    return (
        
        <Grid container spacing={-10}>
            <Grid item xs={12} >
                <Box className={ classes.nav }> 
                    <Tabs 
                    orientation='vertical'
                    value={ value } 
                    onChange={ handleChange } 
                    textColor={ 'primary' }
                    indicatorColor={ 'primary' } 
                    className={ classes.tabs }>
                        <Tab className={ classes.tab } label='Kaikki' />
                        <Tab className={ classes.tab } label='Draiverit' />
                        <Tab className={ classes.tab } label='Väylädraiverit' />
                        <Tab className={ classes.tab } label='Midarit' />
                        <Tab className={ classes.tab } label='Putterit' />
                    </Tabs>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} sm={10} className={ classes.main }>
                { value === 0 && <DGlist onAdd={ onAdd } type={'all'} items={ items } /> }
                { value === 1 && <DGlist onAdd={ onAdd } type={'driver'} /> }
                { value === 2 && <DGlist onAdd={ onAdd } type={'fairway driver'} /> }
                { value === 3 && <DGlist onAdd={ onAdd } type={'midrange'} /> }
                { value === 4 && <DGlist onAdd={ onAdd } type={'putter'} /> } 
            </Grid>
        </Grid>
        
    );
}

export default ProductNavMUI;