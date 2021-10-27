import React from "react";
import { Box, Typography, Grid, Paper } from '@mui/material';
import CarouselMUI from './CarouselMUI';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    
    main: {
        justifyContent: 'center',
    },
    carouselContainer: {
        display: 'block',
        textAlign: 'center',
    },
    container: {
        display: 'block',
        textAlign: 'center',
    },
    paper: {
        marginTop: '2vw',
        padding: '5vw',
        minHeight: '70vh',
    }
});

function MainPage() {

    const classes = useStyles();

    return (
        <Grid container spacing={1} className={ classes.main } >
            <Grid item xs >
            </Grid>
            <Grid item xs={8} >
                <Box className={ classes.carouselContainer } >
                    <CarouselMUI />
                </Box>
                <Paper className={ classes.paper } >
                    <Box className={ classes.container } >
                        <Typography color='text.secondary' variant='h3'>ThrowTrue</Typography>
                        <br />
                        <Typography color='text.secondary'>Tervetuloa Suomen suurimpaan frisbeegolfkauppaan</Typography>
                        <br />
                        <Typography color='text.secondary'>Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet 
                            käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, 
                            jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan. 
                            Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, 
                            jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-
                            paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen 
                            julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista.</Typography>
                        <br />
                        <Typography color='text.secondary'>Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet 
                            käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, 
                            jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan. 
                            Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, 
                            jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-
                            paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen 
                            julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista.</Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs >
            </Grid>
        </Grid>
    );
}

export default MainPage;