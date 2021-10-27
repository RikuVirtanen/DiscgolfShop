import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';
import ShoppingCart from "./ShoppingCartMUI";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        color: '#d3d3d3',
    },
    icon: {
        width: 10,
        height: 10,
        padding: 20,
        color: 'inherit',
        '&:hover': {
            color: '#FFFFFF'
        }
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
            <IconButton className={ classes.icon } component={ Link } to='' color='inherit'>
                <AccountCircleIcon />
            </IconButton>
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