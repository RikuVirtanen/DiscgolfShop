import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    imgBtn: {
        width: '6rem',
        height: '6rem'
    },
    img: {
        padding: '0.5rem',
        height: '6rem',
        width: '6rem'
    },
});

export default function LogoMUI() {

    const classes = useStyles();

    return (
        <Button className={ classes.imgBtn } component={ Link } to='/' >
            <img className={ classes.img } src="images/Logo.png" alt="" />
        </Button>
    );
}