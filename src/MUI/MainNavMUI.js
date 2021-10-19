import React, { useState, useEffect } from "react";
import { Box, Tab, Tabs, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Products from './ProductsMUI'
import MainPage from '../components/MainPage'
import ShoppingCart from "../components/Cart";
import Info from "../components/Info";

const useStyles = makeStyles({
    mainContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    header: {
        display: 'block',
        width: '100%',
        backgroundColor: 'black',
        position: 'fixed',
        height: '13vh',
        zIndex: 1
    },
    navContainer: {
        padding: 10,
    },
    nav: {
        width: '100vh',
    },
    container: {
        flexGrow: 1,
        marginTop: '7rem',
        marginBottom: '1rem'
    },
    logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '1rem',
        height: '1rem'
    },
    img: {
        height: '5rem',
        width: '5rem'
    }

})

function MainNavMUI() {
    const [value, setValue] = useState(0);

    /*const [show, setShow] = useState(true);

    const handleNavbar = () => {
        if(window.scrollY > 100) {
            setShow(false);
        } else {
            setShow(true);
        }
    }*/

    const handleChange = (e, val) => {
        setValue(val);
    }

    const classes = useStyles();

    /*useEffect( () => {
        window.addEventListener('scroll', 
        handleNavbar)
        return () => {
            window.removeEventListener('scroll',
            handleNavbar)
        }
    }, [] );*/

    return (
        <Box className={ classes.mainContainer } >
            <Box className={ classes.header } >
                <Grid container spacing={15} className={ classes.navContainer } >
                    <Grid item sx={1} >
                        <img className={ classes.img } src="images/Logo.png" alt="" />
                    </Grid>
                    <Grid item sx={1} className={ classes.nav }> 
                        <Tabs 
                        value={ value } 
                        onChange={ handleChange } 
                        variant='fullWidth' 
                        textColor={ '#FFFFFF' }
                        indicatorColor={ 'secondary' }
                        centered >
                            <Tab label='Etusivu'/>
                            <Tab label='Tuotteet'/>
                            <Tab label='Ostoskori'/>
                            <Tab label='Tietoa'/>
                        </Tabs>
                    </Grid>
                </Grid>
            </Box>
            <Box className={ classes.container } >
                { value === 0 && <MainPage /> }
                { value === 1 && <Products /> }
                { value === 2 && <ShoppingCart /> }
                { value === 3 && <Info /> }
            </Box>
        </Box>
    );
}

export default MainNavMUI;