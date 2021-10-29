import React, { useState } from "react";
import { Box, Tab, Tabs, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import DGlist from './DGlist';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    nav: {
        flexGrow: 1,
        bgColor: 'background.paper', 
        display: 'flex',
        position: 'fixed',
        width: '30vh',
        borderBottom: 1,
        borderColor: 'divider',
        
        left: '8vw',
        backgroundColor: '#FFFFFF',
        [theme.breakpoints.up('xs')]: {
            left: '-5vw'
        },
        [theme.breakpoints.up('sm')]: {
            marginTop:'-10vw',
            left: '5vw'
        },
        [theme.breakpoints.up('md')]: {
            left: '15vw',
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
        [theme.breakpoints.up('xs')]: {
            fontSize: '12px'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '15px'
        },
    },
    main: {
        minHeight: '70vh',
        [theme.breakpoints.up('xs')]: {
            MaxWidth: '70vw',
            minWidth: '40vw',
            marginLeft: '5vw',
            marginTop: '-12vw'
        },
        [theme.breakpoints.up('sm')]: {
            MaxWidth: '70vw',
            minWidth: '55vw',
            marginLeft: '-4vw',
            marginTop: '-18vw'
        },
        [theme.breakpoints.up('md')]: {
            MaxWidth: '170vw',
            minWidth: '60vw',
            marginLeft: '7vw',
            marginTop: '-4vw'
        }
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

    const { onAdd, items } = props;
    const [value, setValue] = useState(0);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        
        <Grid container spacing={0}>
            <Grid item xs={12} >
                <Box className={ classes.nav }> 
                    <Tabs 
                    orientation='vertical'
                    variant='scrollable'
                    value={ value } 
                    onChange={ handleChange } 
                    aria-label="Vertical tabs example"
                    textColor={ 'primary' }
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
            <Grid item xs={12} md={6} sm={10} className={ classes.main }>
                <TabPanel value={value} index={0}>
                    <DGlist onAdd={ onAdd } type={'all'} items={ items } />
                </TabPanel> 
                <TabPanel value={value} index={1}>
                    <DGlist onAdd={ onAdd } type={'driver'} />
                </TabPanel> 
                <TabPanel value={value} index={2}>
                    <DGlist onAdd={ onAdd } type={'fairway driver'} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <DGlist onAdd={ onAdd } type={'midrange'} />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <DGlist onAdd={ onAdd } type={'putter'} />
                </TabPanel>
            </Grid>
        </Grid>
        
    );
}

export default ProductNavMUI;