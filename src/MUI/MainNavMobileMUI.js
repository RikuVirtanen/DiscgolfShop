import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import MenuMUI from "./MenuMUI";
import { Link } from 'react-router-dom';
import NavButtonsMUI from "./NavButtonsMUI";
import LogoMUI from "./LogoMUI";

const useStyles = makeStyles({
    nav: {
        display: 'flex',
        width: '100%',
        top: 0,
        backgroundColor: 'black',
        position: 'fixed',
        height: '100px',
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

function MainNavMobileMUI(props) {

    const { onAdd, onRemove, cartItems } = props;

    const classes = useStyles();

    return (
        <Grid container spacing={0} className={ classes.nav } >
            <Grid item xs={4} >
                <MenuMUI />
            </Grid>
            <Grid item xs={4} > 
                <LogoMUI />
            </Grid>
            <Grid item xs={3} >
                <NavButtonsMUI
                    onAdd={ onAdd } 
                    onRemove={ onRemove } 
                    cartItems = {cartItems} 
                />
            </Grid>
        </Grid>
    );
}

export default MainNavMobileMUI;