import React, { useState } from "react";
import { Box, Drawer, List, ListItem, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    icon: {
        color: 'inherit',
        '&:hover': {
            color: '#FFFFFF'
        }
    },
    list: {
        width: '20rem'
    },
    close: {
        width: '3rem',
        height: '3rem',
        top: 20,
        alignSelf: 'center',
    }
});

function DrawerMUI() {

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <Box>
            <IconButton className={ classes.icon } onClick={ handleOpen }><ShoppingCartIcon /></IconButton>
            <Drawer className={ classes.anchor } anchor='right' open={ open } >
                <IconButton className={ classes.close } onClick={ handleClose }><CloseIcon /></IconButton>
                <List className={ classes.list }>
                    <ListItem>

                    </ListItem>
                </List>
            </Drawer>
        </Box>
        
    );
}

export default DrawerMUI;