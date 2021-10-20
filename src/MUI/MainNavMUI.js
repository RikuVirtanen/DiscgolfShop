import React, { useState, useEffect } from "react";
import { Box, Tab, Tabs, Grid, Button, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Products from './ProductsMUI'
import MainPage from '../components/MainPage'
import Info from "../components/Info";
import ShoppingCart from "./ShoppingCartMUI";

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
    buttons: {
        display: 'flex',
        marginLeft: '7rem',
    },
    login: {
        '&:hover': {
            color: '#FFFFFF'
        }
    },
});

function MainNavMUI() {
    const [value, setValue] = useState(0);

    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exists = cartItems.find((x) => x.id === product.id);
        if (exists) {
            setCartItems(
                cartItems.map((x) => 
                x.id === product.id ? {...exists, qty: exists.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, {...product, qty: 1}]);
        }
    };

    const onRemove = (product) => {
        const exists = cartItems.find((x) => x.id === product.id);
        if(exists.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) => 
                x.id === product.id ? {...exists, qty: exists.qty - 1 } : x
                )
            );
        }
    };

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
                        </Tabs>
                    </Grid>
                    <Grid item sx={3} >
                        <Box className={ classes.buttons }>
                            <ShoppingCart onAdd={ onAdd } onRemove={ onRemove } cartItems = {cartItems} /> 
                            <Button className={ classes.login } >
                                <Typography fontSize="12px">Login</Typography>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box className={ classes.container } >
                { value === 0 && <MainPage /> }
                { value === 1 && <Products onAdd={ onAdd } /> }
                { value === 2 && <Info /> }
            </Box>
        </Box>
    );
}

export default MainNavMUI;