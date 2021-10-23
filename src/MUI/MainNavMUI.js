import React, { useState } from "react";
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
    },
    header: {
        display: 'block',
        width: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        position: 'fixed',
        height: '100px',
        zIndex: 1,
    },
    navContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    container: {
        flexGrow: 1,
        marginTop: '16vh',
        marginBottom: '1rem',
    },
    imgBtn: {
        width: '6rem',
        height: '6rem'
    },
    img: {
        padding: '0.5rem',
        height: '6rem',
        width: '6rem'
    },
    buttons: {
        display: 'flex',
        marginLeft: '1vh',
    },
    login: {
        color: '#d3d3d3',
        '&:hover': {
            color: '#FFFFFF'
        }
    },
    tab: {
        width: 200,
    }
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

    const handleChange = (e, val) => {
        setValue(val);
    }

    const handleLogo = () => {
        setValue(0);
    }

    const classes = useStyles();

    return (
        <Box className={ classes.mainContainer } >
            <Box className={ classes.header } >
                <Grid container spacing={10} className={ classes.navContainer } >
                    <Grid item xs={2} >
                        <Button className={ classes.imgBtn } onClick={ handleLogo }>
                            <img className={ classes.img } src="images/Logo.png" alt="" />
                        </Button>
                    </Grid>
                    <Grid item xs={5} className={ classes.nav }> 
                        <Tabs 
                        value={ value } 
                        onChange={ handleChange } 
                        variant='fullWidth' 
                        textColor={ 'inherit' }
                        indicatorColor={ 'secondary' } >
                            <Tab className={ classes.tab } label='Etusivu'/>
                            <Tab className={ classes.tab } label='Tuotteet'/>
                            <Tab className={ classes.tab } label='Tietoa'/>
                        </Tabs>
                    </Grid>
                    <Grid item xs={3} className={ classes.buttons } >
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