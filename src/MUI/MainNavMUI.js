import React from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import TabsMUI from "./TabsMUI";
import LogoMUI from "./LogoMUI";
import NavButtonsMUI from "./NavButtonsMUI";

const useStyles = makeStyles({
    nav: {
        display: 'flex',
        top: 0,
        width: '110vw',
        backgroundColor: 'black',
        position: 'fixed',
        height: '200px',
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
});

function MainNavMUI(props) {

    const { onAdd, onRemove, cartItems } = props;

    const classes = useStyles();

    return (
        <Grid container spacing={10} className={ classes.nav } >
            <Grid item xs={1} >
                <LogoMUI />
            </Grid>
            <Grid item xs={8} > 
                <TabsMUI />
            </Grid>
            <Grid item xs={2} >
                <NavButtonsMUI 
                    onAdd={ onAdd } 
                    onRemove={ onRemove } 
                    cartItems = {cartItems} 
                />
            </Grid>
        </Grid>
    );
}

export default MainNavMUI;