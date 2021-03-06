import React from "react";
import { Card, CardContent, Typography, Grid, Button, Box, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const useStyle = makeStyles(theme => ({
    cardMain: {
        borderRadius: 0,
        [theme.breakpoints.only('xs')]: {
            width: '150px',
            height: '230px',
        },
        [theme.breakpoints.only('sm')]: {
            width: '170px',
            height: '230px',
        },
        [theme.breakpoints.only('md')]: {
            width: '170px',
            height: '230px',
        },
        [theme.breakpoints.up('md')]: {
            width: '200px',
            height: '230px',
        },
        [theme.breakpoints.only('xl')]: {
            width: '200px',
            height: '230px',
        },
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
    boxBottom: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 30,
        marginTop: 0,
        [theme.breakpoints.down('xl')]: {
            paddingLeft: 20, 
        }
    },
    boxAtr: {
        marginTop: -50,
    },
    button: {
        color: '#d3d3d3',
        float: 'right',
        '&:hover': {
            color: '#000000'
        }
    },
    imageBtn: {
        borderRadius: '100%',
    },
}));

function DiscCard(props) {

    const { onAdd, disc } = props;

    const classes = useStyle();
    
    return (
        <Card className={ classes.cardMain }>
            <CardContent className={ classes.content }>
                <Typography fontSize='12px' color='primary'>{disc.company}</Typography>  
                <Typography fontSize='18px' fontWeight='bold' color='primary'>{disc.name}</Typography>  
            </CardContent>
            <CardContent className={ classes.box }>
                <Button className={ classes.imageBtn }>
                    <img src={disc.image} alt="disc" width='80vw' />
                </Button>
            </CardContent>
            <CardContent>
                <Box className={ classes.boxAtr }>
                    <Grid container justifyContent='center' spacing={3}>  
                        <Grid item xs={2}>
                            <Typography color='primary' className={ classes.attributes } >{disc.speed}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography color='primary' className={ classes.attributes } >{disc.glide}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography color='primary' className={ classes.attributes } >{disc.turn}</Typography>
                        </Grid>
                        <Grid item xs={2}>            
                            <Typography color='primary' className={ classes.attributes } >{disc.fade}</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={ classes.boxBottom }>
                    <Typography>{disc.price.toFixed(2).toString().replace('.', ',')} ???</Typography>
                    <IconButton onClick={ (e) => onAdd(disc) } className={ classes.button }>
                        <AddShoppingCartIcon />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
}

export default DiscCard;