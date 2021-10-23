import React, { useState } from "react";
import { Box, Drawer, List, ListItem, IconButton, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const useStyles = makeStyles({
    icon: {
        color: 'inherit',
        '&:hover': {
            color: '#FFFFFF'
        }
    },
    anchor: {
        textAlign: 'center',
    },
    title: {
        marginTop: '20px',
        color: '#000000',
    },
    company: {
        color: 'darkgrey',
        fontSize: '13px'
    },
    name: {
        color: '#000000'
    },
    typoRight: {
        marginLeft: '100px',
        color: '#000000',
    },
    empty: {
        marginTop: '20px',
        color: '#d3d3d3'
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

function ShoppingCart(props) {

    const { onAdd, onRemove, cartItems } = props;

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
                <Typography className={ classes.title } variant='h5'>Ostoskori</Typography>
                {props.cartItems.length === 0 && 
                <List className={ classes.list }>
                    <Typography variant='h6' className={ classes.empty }>Ostoskorisi on tyhjä</Typography>
                </List>}
                    {cartItems.map((item) => (
                        <List key={item.id} className={ classes.list }>
                            <hr />
                            <ListItem>
                                <Typography className={ classes.company } >
                                    {item.company}
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography className={ classes.name } >
                                    {item.name}
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Button color='primary' onClick={ () => onAdd(item) }>
                                    <AddIcon />
                                </Button>
                                <Button color='primary' onClick={ () => onRemove(item) }>
                                    <RemoveIcon />
                                </Button>
                                <Typography className={ classes.typoRight } >{item.qty} kpl</Typography>
                            </ListItem>
                            <ListItem>
                                
                            </ListItem>
                            {/*<ListItem>
                                {item.qty} x ${item.price.toFixed(2)}
                            </ListItem>*/}
                            <hr />
                            {/*<CashierMUI />*/}
                        </List>
                    ))}
                
            </Drawer>
        </Box>
        
    );
}

export default ShoppingCart;