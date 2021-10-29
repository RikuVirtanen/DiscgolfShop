import { Box, Divider, Fade, IconButton, ListItemText, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    icon: {
        width: 10,
        height: 10,
        padding: 20,
        color: 'inherit',
        '&:hover': {
            color: '#FFFFFF'
        }
    },
});

export default function UserDropMenuMUI() {

    const classes = useStyles();
    
    const [ anchorEl, setAnchorEl ] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(false);
    }

    return (
        <Box>
            <IconButton 
                id="fade-button"
                aria-controls="fade-menu"
                aria-haspopup="true"
                aria-expanded={ open ? 'true' : undefined}
                className={ classes.icon } 
                onClick={ handleClick } 
                color="inherit"
            >
                <AccountCircleIcon />
            </IconButton>
            <Menu
                anchorEl={ anchorEl }
                open={ open }
                onClose={ handleClose }
                TransitionComponent={Fade}
            >
                <MenuItem onClick={ handleClose } disableRipple component={ Link } to="/profile" >
                    <ListItemText primary="Profiili"></ListItemText>
                </MenuItem>
                <MenuItem onClick={ handleClose } disableRipple component={ Link } to="/" >
                    <ListItemText primary="Omat tilaukset"></ListItemText>
                </MenuItem>
                <MenuItem onClick={ handleClose } disableRipple component={ Link } to="/" >
                    <ListItemText primary="Asetukset"></ListItemText>
                </MenuItem>
                <Divider light />
                <MenuItem onClick={ handleClose } disableRipple component={ Link } to="/" >
                    <ListItemText primary="Logout"></ListItemText>
                </MenuItem>
            </Menu>
        </Box>
    );
}