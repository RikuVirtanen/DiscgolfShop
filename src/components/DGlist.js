import React, {useState, useEffect} from "react";
import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import VerticalTabs from '../MUI/TabPanelMUI';
import DiscCard from "./DiscCard";
import Discs from '../discs.json';

function DGlist(props) {

    const [discs, setDiscs] = useState(Discs);

    // Function to add disc in later use

    /*const addDisc = (name, company, speed, glide, turn, fade) => {
        setDiscs([...discs, {
            name: name, 
            company: company, 
            speed: speed, 
            glide: glide, 
            turn: turn, 
            fade: fade, 
            id: discs.length + 1}]);
    }*/

    return (
        <Box margin='20px'>
            <Grid container spacing={3} >
                {discs.map( (disc) => (
                    disc.type.toLowerCase() === props.type 
                    ? 
                    (<Grid item key={disc.id} xs={2.8}>
                        <DiscCard disc={disc} />
                    </Grid>) 
                    : null
                    ))}

            </Grid>
        </Box>
        
    );
}
 
export default DGlist;
