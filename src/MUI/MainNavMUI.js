import React, { useState } from "react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Products from './ProductsMUI'
import MainPage from '../components/MainPage'
import ShoppingCart from "../components/Cart";
import Info from "../components/Info";
import Footer from "../components/Footer";

const useStyles = makeStyles({
    box: {
        width: '100%',
        height: '10vh',
        backgroundColor: 'black',
    },
    mainNav: {
        width: '100vh',
        height: '10vh',
        backgroundColor: 'black',
    },
    tab: {
        color: '#FFFFFF',
        fontSize: '12px'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30vh',
        height: '8vh',
        margin: 8,
        marginLeft: '20vh',
    },
    logo: {
        height: '10vh',
        width: '10vh'
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        height: '20vh'
    }
})

function MainNavMUI() {
    const [value, setValue] = useState(1);

    const handleChange = (e, val) => {
        setValue(val);
    }

    const classes = useStyles();

    return (
        <Box className={ classes.box }>
            <Box className={ classes.mainNav }> 
                <Tabs 
                value={ value } 
                onChange={ handleChange } 
                variant='fullWidth' 
                textColor={ '#FFFFFF' }
                indicatorColor={ 'secondary' }
                centered
                >
                    <Button onClick={ value === 1 && <MainPage /> } className={ classes.container }>
                        <img className={ classes.logo} src="images/Logo.png" alt="logo" />
                    </Button>
                    <Tab className={ classes.tab } label='Etusivu'/>
                    <Tab className={ classes.tab } label='Tuotteet'/>
                    <Tab className={ classes.tab } label='Ostoskori'/>
                    <Tab className={ classes.tab } label='Tietoa'/>
                </Tabs>
            </Box>
            <Box>
                { value === 1 && <MainPage /> }
                { value === 2 && <Products /> }
                { value === 3 && <ShoppingCart /> }
                { value === 4 && <Info /> }
                { value === 5   } 
                { value === 6   } 
            </Box>
            <Box className={ classes.footer }>
                <Footer />
            </Box>
        </Box>
    );
}

export default MainNavMUI;