import React, { useState } from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MenuList } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

function MenuMUI () {

    const [anchorNavi, setOpenNavi] = useState(null);
   
    const handleMenu = (e) => {
     setOpenNavi(e.currentTarget);
    };
   
    const handleClose = () => {
     setOpenNavi(null);
    }
   
     return (
       <Box>
         <IconButton onClick={ handleMenu } color='inherit'>
            <MenuIcon />
          </IconButton>
          <MenuList>
            <Menu
              anchorEl={ anchorNavi }
              open={ Boolean(anchorNavi) }
              onClose={ handleClose }>
                <MenuItem onClick= { handleClose }>
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText secondary='Menu Etusivu' />
                </MenuItem>
                <MenuItem onClick= { handleClose }>
                  <ListItemIcon><CreateIcon /></ListItemIcon>
                  <ListItemText secondary='Lisää' />
                </MenuItem>
                <MenuItem onClick= { handleClose }>
                  <ListItemIcon><ListIcon /></ListItemIcon>
                  <ListItemText secondary='Listaa' />
                </MenuItem>
                <MenuItem onClick= { handleClose }>
                  <ListItemIcon><CloudQueueIcon /></ListItemIcon>
                  <ListItemText secondary='Sää' />
                </MenuItem>
              </Menu>
            </MenuList>
       </Box>
     );
   }

export default MenuMUI;