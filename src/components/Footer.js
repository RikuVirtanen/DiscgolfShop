import React from "react";
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
})

function Footer() {

    const classes = useStyles();
    return (
        <Box padding='20px'>
            <Box className={ classes.box }>
                <Typography variant='h7' fontWeight='bold' >Yhteystiedot</Typography>
            </Box>
            <Box className={ classes.box }>
            <Typography fontSize='12px'>
                ThrowTrue, Eteläesplanadi 20, 00130 Helsinki, SUOMI 
            </Typography>
            </Box>
            <Box className={ classes.box }>
            <Typography fontSize='12px'>CIN: 13254664-1354</Typography>
            </Box>
            
            
        </Box>
    );
}

export default Footer;