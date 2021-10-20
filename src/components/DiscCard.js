import React from "react";
import { Card, CardContent, Typography, Grid, Button, CardMedia, Box, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//import { Link as RouterLink } from 'react-router-dom';
//import Link from '@material-ui/core/Link';

const useStyle = makeStyles({
    cardMain: {
        width: '25vh',
        height: '30vh',
        borderRadius: 0,
        margin: '15px',
    },
    content: {
        textAlign: 'center',
        marginTop: -10,
    },
    attributes: {
        fontSize: '10px',
        color: 'primary'
    },
    box: {
        textAlign: 'center',
        marginTop: -30
    },
    boxBtn: {
        marginTop: 0
    },
    boxAtr: {
        marginTop: -50
    },
    button: {
        color: '#000000',
        float: 'right',
    },
    imageBtn: {
        minHeight: '100px',
        borderRadius: 100,
    },
    
});

function DiscCard(props) {

    const classes = useStyle();

    return (
        <Card button onClick={''} className={ classes.cardMain }>
            <CardContent className={ classes.content }>
                <Typography fontSize='12px' color='primary'>{props.disc.company}</Typography>  
                <Typography fontSize='18px' fontWeight='bold' color='primary'>{props.disc.name}</Typography>  
            </CardContent>
            <CardContent className={ classes.box }>
                <Button className={ classes.imageBtn }>
                    <img src={props.disc.image} alt="disc" width='100px' />
                </Button>
            </CardContent>
            <CardContent>
                <Box className={ classes.boxAtr }>
                    <Grid container justifyContent='center' spacing={3}>  
                        <Grid item xs={2}>
                            <Typography color='primary' className={ classes.attributes } >{props.disc.speed}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography color='primary' className={ classes.attributes } >{props.disc.glide}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography color='primary' className={ classes.attributes } >{props.disc.turn}</Typography>
                        </Grid>
                        <Grid item xs={2}>            
                            <Typography color='primary' className={ classes.attributes } >{props.disc.fade}</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={ classes.boxBtn }>
                    <IconButton className={ classes.button }><AddShoppingCartIcon /></IconButton>
                </Box>
            </CardContent>
        </Card>
    );
}

export default DiscCard;