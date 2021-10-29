import React from "react";
import { Box, Tab } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    tab: {
        color: '#d3d3d3',
        '&:hover': {
            color: '#FFFFFF',
        },
    }
});

export default function TabsMUI() {

    const classes = useStyles();

    return (
        <Box>
            <Tab className={ classes.tab } label='Etusivu' component={ Link } to='/' />
            <Tab className={ classes.tab } label='Tuotteet' component={ Link } to='/tuotteet'/>
            <Tab className={ classes.tab } label='Tietoa' component={ Link } to='/tietoa'/>
            <Tab className={ classes.tab } label='Palaute' component={ Link } to='/palaute'/>
        </Box>
    );
}