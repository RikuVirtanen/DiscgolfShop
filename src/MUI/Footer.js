import React from "react";
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    footer: {
        flex: 1,
        padding: '2rem',
        bottom: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        height: '9rem',
        width: '100%'
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

function Footer() {

    const classes = useStyles();
    return (
        <Box className={ classes.footer } >
            <Box className={ classes.box }>
                <Typography variant='h7' color='text.secondary' fontWeight='bold' >Yhteystiedot</Typography>
            </Box>
            <Box className={ classes.box }>
                <Typography color='text.secondary' fontSize='12px'>
                    ThrowTrue 
                </Typography>
            </Box>
            <Box className={ classes.box }>
                <Typography color='text.secondary' fontSize='12px'>
                    Eteläesplanadi 20
                </Typography>
            </Box>
            <Box className={ classes.box }>
                <Typography color='text.secondary' fontSize='12px'>
                    00130 Helsinki, SUOMI 
                </Typography>
            </Box>
            <Box className={ classes.box }>
                <Typography color='text.secondary' fontSize='12px'>CIN: 13254664-1354</Typography>
            </Box>
        </Box>
    );
}

export default Footer;