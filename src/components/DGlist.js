import React, {useState} from "react";
import { Grid } from '@mui/material';
import DiscCard from "./DiscCard";
import Discs from '../discs.json';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(e => ({
    container: {
        [e.breakpoints.up('xs')]: {
            margin: '-10px',
            marginBottom: '20px',
            marginTop: 0, 
        },
        [e.breakpoints.up('sm')]: {
            margin: '-40px',
            marginBottom: '20px',
            marginTop: 0, 
        },
        [e.breakpoints.up('md')]: {
            margin: '15vh',
            marginBottom: '20px',
            marginTop: 0, 
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
            marginLeft: '-30px'
        }
    }
}));

function DGlist(props) {

    const classes = useStyles();

    const { onAdd, type, items } = props;

    const [ discs ] = useState(Discs);

    if (type === 'all') {
        return (
            <Grid container className={ classes.container } spacing={2} >
                {discs.map( (disc) => (
                    <Grid item className={ classes.item } key={disc.id} xs={8} md={3} sm={6} >
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
                (<Grid item className={ classes.item } key={disc.id} xs={8} md={3} sm={6}>
                    <DiscCard onAdd={ onAdd } disc={disc} items={ items } />
                </Grid>) 
                : null
                ))}

        </Grid>
    );
}
 
export default DGlist;
