import React from "react";
import { Grid } from "@mui/material";
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
        height: '170px',
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
});

function MainNavMUI(props) {

    const { onAdd, onRemove, cartItems, total } = props;

    const classes = useStyles();

    return (
        <Grid container spacing={12} className={ classes.nav } >
            <Grid item xs={2} >
                <LogoMUI />
            </Grid>
            <Grid item xs={7} > 
                <TabsMUI />
            </Grid>
            <Grid item xs={3} sx={{float: 'left'}} >
                <NavButtonsMUI 
                    onAdd = { onAdd } 
                    onRemove = { onRemove } 
                    cartItems = {cartItems} 
                    total = { total }
                />
            </Grid>
        </Grid>
    );
}

export default MainNavMUI;