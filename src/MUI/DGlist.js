import React from "react";
import { Grid } from '@mui/material';
import DiscCard from "./DiscCard";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(e => ({
    container: {
        [e.breakpoints.only('xs')]: {
            margin: '-10px',
            marginBottom: '20px',
            marginTop: '-5vh', 
        },
        [e.breakpoints.only('sm')]: {
            marginBottom: '20px',
            marginTop: '1vh', 
        },
        [e.breakpoints.only('md')]: {
            margin: '15vh',
            marginBottom: '20px',
            marginTop: 0, 
        },
        [e.breakpoints.only('lg')]: {
            marginLeft: '-15vw'
        },
        [e.breakpoints.only('xl')]: {
            marginLeft: '-15vw'
        },
        
    },
    item: {
        [e.breakpoints.up('xs')]: {
            marginLeft: '-10px'
        },
        [e.breakpoints.up('sm')]: {
            marginLeft: '-20px'
        },
        [e.breakpoints.up('md')]: {
        }
    }
}));

function DGlist(props) {

    const classes = useStyles();

    const { onAdd, type, items, discs } = props;

    if (type === 'all') {
        return (
            <Grid container className={ classes.container } rowSpacing={{ xs: 2, sm: 2, md: 2}} columnSpacing={{ xs: 2, sm: 4, md: 0 }} >
                {discs.map( (disc) => (
                    <Grid container item className={ classes.item } key={disc.id} xs={12} sm={6} md={3}  >
                        <DiscCard onAdd={ onAdd } disc={disc} items={ items } />
                    </Grid> ))}
            </Grid>
        );
    }

    return (
        <Grid container className={ classes.container } spacing={2} >
            {discs.map( (disc) => (
                disc.type.toLowerCase() === type 
                ? 
                (<Grid item className={ classes.item } key={disc.id} xs={12} sm={6} md={3} >
                    <DiscCard onAdd={ onAdd } disc={disc} items={ items } />
                </Grid>) 
                : null
                ))}

        </Grid>
    );
}
 
export default DGlist;
