import React, { useState } from "react";
import { Box, Drawer, List, ListItem, ListItemText, Paper } from '@mui/material';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BackpackIcon from '@mui/icons-material/Backpack';
import AppsIcon from '@mui/icons-material/Apps';
import DGlist from '../components/DGlist';

function DrawerMUI() {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const openDiscs = () => {
        return (
            <DGlist /> 
        )
    }

    return (
        <Box>
            <Paper>
                <List>
                    <ListItem button>
                        <ListItemText><LocalOfferIcon /></ListItemText>
                        <ListItemText secondary='Tarjoukset' /> 
                    </ListItem>
                    <ListItem button onClick={ openDiscs }>
                        <ListItemText><GolfCourseIcon /></ListItemText>
                        <ListItemText secondary='Kiekot' /> 
                    </ListItem>
                    <ListItem button>
                        <ListItemText><BackpackIcon /></ListItemText>
                        <ListItemText secondary='Reput' /> 
                    </ListItem>
                    <ListItem button>
                        <ListItemText><AppsIcon /></ListItemText>
                        <ListItemText secondary='Oheistuotteet' /> 
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
}

export default DrawerMUI;