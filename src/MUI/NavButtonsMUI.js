import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';
import ShoppingCart from "./ShoppingCartMUI";
import UserDropMenuMUI from "./UserDropMenuMUI";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        color: '#d3d3d3',
    },
    login: {
        color: '#d3d3d3',
        '&:hover': {
            color: '#FFFFFF'
        }
    },
});

export default function NavButtonsMUI(props) {

    const { onAdd, onRemove, cartItems } = props;
    
    const classes = useStyles();

    return (
        <Box className={ classes.container }>
            <UserDropMenuMUI />
            <ShoppingCart 
                onAdd={ onAdd } 
                onRemove={ onRemove } 
                cartItems = {cartItems} 
            /> 
            <Box>
                <Button className={ classes.login } component={ Link } to="/" >
                    <Typography fontSize="9px">Login</Typography>
                </Button>
                <br />
                <Button className={ classes.login } component={ Link } to="/" >
                    <Typography fontSize="9px">Signup</Typography>
                </Button>
            </Box>
        </Box>
    );

}