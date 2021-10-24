import React, { useState } from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MenuList, Typography } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  typo: {
    color: '#000000',
    '&:hover': {
      color: '#FFFFFF'
    }
  }
})

function MenuMUI () {

  const classes = useStyles();

    const [anchorNavi, setOpenNavi] = useState(null);
   
    const handleMenu = (e) => {
     setOpenNavi(e.currentTarget);
    };

    const handleClick = (e, val) => {
      handleClose();
    }
   
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
              open={ Boolean(anchorNavi) }>
                <MenuItem onClick={handleClick}>
                  <ListItemText><Typography className={ classes.typo }>Etusivu</Typography></ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClick}>
                  <ListItemText><Typography className={ classes.typo }>Tuotteet</Typography></ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClick}>
                  <ListItemText><Typography className={ classes.typo }>Tietoa</Typography></ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClick}>
                  <ListItemText><Typography className={ classes.typo }>Palaute</Typography></ListItemText>
                </MenuItem>
              </Menu>
            </MenuList>
       </Box>
     );
   }

export default MenuMUI;