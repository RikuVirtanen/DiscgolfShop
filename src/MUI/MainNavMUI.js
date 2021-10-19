import React, { useState, useEffect } from "react";
import { Box, Tab, Tabs, Grid, Button, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Products from './ProductsMUI'
import MainPage from '../components/MainPage'
import ShoppingCart from "../components/Cart";
import Info from "../components/Info";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
        paddingLeft: 200,
        
    },
    nav: {
        width: '100vh',
        
    },
    container: {
        flexGrow: 1,
        marginTop: '7rem',
        marginBottom: '1rem'
    },
    img: {
        height: '5rem',
        width: '5rem'
    },
    cart: {
        left: '1rem',
        '&:hover': {
            color: '#FFFFFF'
        }
    },
    login: {
        '&:hover': {
            color: '#FFFFFF'
        }
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

    const handleLogo = () => {
        setValue(0);
    }

    const handleCart = () => {
        setValue(3);
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
                <Grid container spacing={30} className={ classes.navContainer } >
                    <Grid item sx={3} >
                        <Button onClick={ handleLogo }>
                            <img className={ classes.img } src="images/Logo.png" alt="" />
                        </Button>
                    </Grid>
                    <Grid item sx={3} className={ classes.nav }> 
                        <Tabs 
                        value={ value } 
                        onChange={ handleChange } 
                        variant='fullWidth' 
                        textColor={ '#FFFFFF' }
                        indicatorColor={ 'secondary' }
                        centered >
                            <Tab label='Etusivu'/>
                            <Tab label='Tuotteet'/>
                            <Tab label='Tietoa'/>
                            <Tab label='Ostoskori'/>
                        </Tabs>
                    </Grid>
                    <Grid item sx={3} >
                        <Button onClick={ handleCart } className={ classes.cart } startIcon={<ShoppingCartIcon />}>
                        </Button>
                        <Button className={ classes.login }>
                            <Typography fontSize="12px">Login</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box className={ classes.container } >
                { value === 0 && <MainPage /> }
                { value === 1 && <Products /> }
                { value === 3 && <Info /> }
                { value === 2 && <ShoppingCart /> }
            </Box>
        </Box>
    );
}

export default MainNavMUI;