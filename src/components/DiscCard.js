import React from "react";
import { Card, CardContent, Typography, Grid, Button, CardMedia, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
//import { Link as RouterLink } from 'react-router-dom';
//import Link from '@material-ui/core/Link';

const useStyle = makeStyles({
    cardMain: {
        width: '30vh',
        height: '15vh',
        borderRadius: 0,
    },
    paper: {
       width: '2vh'
    },
    attributes: {
        fontSize: '10px',
        color: 'primary'
    },
    box: {
        marginTop: '5px'
    }
});

function DiscCard(props) {

    const classes = useStyle();

    return (
        <Button className={ classes.button }>
            <Card button onClick={''} className={ classes.cardMain }>
                <CardContent>
                    <CardMedia />
                </CardContent>
                <CardContent>
                    <Typography fontSize='8px' color='primary'>{props.disc.company}</Typography>  
                    <Typography fontSize='12px' fontWeight='bold' color='primary'>{props.disc.name}</Typography>  
                    <Box className={ classes.box }>
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
                </CardContent>
            </Card>
        </Button>
    );
}

export default DiscCard;