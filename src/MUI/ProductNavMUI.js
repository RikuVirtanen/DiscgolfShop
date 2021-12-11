import React, { useState } from "react";
import { Box, Tab, Tabs, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import GetDiscData from "./GetDiscData";

const useStyles = makeStyles(theme => ({
    nav: {
        flexGrow: 1,
        bgColor: 'background.paper', 
        display: 'flex',
        position: 'fixed',
        width: '30vh',
        borderBottom: 1,
        borderColor: 'divider',
        backgroundColor: '#FFFFFF',
        [theme.breakpoints.up('xs')]: {
            left: '-6vw'
        },
        [theme.breakpoints.up('sm')]: {
            marginTop:'-10vw',
            left: '0vw'
        },
        [theme.breakpoints.up('md')]: {
            left: '5vw',
            marginTop: '0vw'
        },
        [theme.breakpoints.up('lg')]: {
            left: '5vw',
            marginTop: '0vw'
        },
        
    },
    tabs: {
        borderRight: 1,
        borderColor: 'divider',
        [theme.breakpoints.up('xs')]: {
            marginLeft: '50px',
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: '0',
            width: '100%'
        },
       
    },
    tab: {
        color: 'text.primary',
        [theme.breakpoints.up('xs')]: {
            fontSize: '12px'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '15px'
        },
    },
    main: {
        minHeight: '70vh',
        [theme.breakpoints.only('xs')]: {
            MaxWidth: '80vw',
            minWidth: '40vw',
            marginLeft: '2vw',
            marginTop: '0vw'
        },
        [theme.breakpoints.only('sm')]: {
            MaxWidth: '70vw',
            minWidth: '55vw',
            marginLeft: '-10vw',
            marginTop: '-18vw'
        },
        [theme.breakpoints.only('md')]: {
            MaxWidth: '170vw',
            minWidth: '60vw',
            marginLeft: '7vw',
            marginTop: '-4vw'
        },
        [theme.breakpoints.only('lg')]: {
            MaxWidth: '170vw',
            minWidth: '60vw',
            marginLeft: '7vw',
            marginTop: '-2vw'
        },
        [theme.breakpoints.only('xl')]: {
            MaxWidth: '170vw',
            minWidth: '60vw',
            marginLeft: '15vw',
            marginTop: '-2vw'
        },
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function ProductNavMUI(props) {

    const { onAdd, items, discs } = props;
    const [value, setValue] = useState(0);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        
        <Grid container spacing={0}>
            <Grid item xs>
                <Box className={ classes.nav }> 
                    <Tabs 
                    orientation='vertical'
                    variant='scrollable'
                    value={ value } 
                    onChange={ handleChange } 
                    aria-label="Vertical tabs example"
                    textColor={ 'text.primary' }
                    indicatorColor={ 'primary' } 
                    className={ classes.tabs }>
                        <Tab className={ classes.tab } label='Kaikki' {...a11yProps(0)} />
                        <Tab className={ classes.tab } label='Draiverit' {...a11yProps(1)}/>
                        <Tab className={ classes.tab } label='Väylädraiverit' {...a11yProps(2)}/>
                        <Tab className={ classes.tab } label='Midarit' {...a11yProps(3)}/>
                        <Tab className={ classes.tab } label='Putterit' {...a11yProps(4)}/>
                    </Tabs>
                </Box>
            </Grid>
            <Grid item xs className={ classes.main }>
                <TabPanel value={value} index={0}>
                    <GetDiscData onAdd={ onAdd } type={'all'} items={ items } discs={ discs } />
                </TabPanel> 
                <TabPanel value={value} index={1}>
                    <GetDiscData onAdd={ onAdd } type={'driver'} items={ items } discs={ discs } />
                </TabPanel> 
                <TabPanel value={value} index={2}>
                    <GetDiscData onAdd={ onAdd } type={'fairway driver'} items={ items } discs={ discs } />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <GetDiscData onAdd={ onAdd } type={'midrange'} items={ items } discs={ discs } />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <GetDiscData onAdd={ onAdd } type={'putter'} items={ items } discs={ discs } />
                </TabPanel>
            </Grid>
        </Grid>
        
    );
}

export default ProductNavMUI;