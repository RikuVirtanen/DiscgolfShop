import React, {useState, useEffect} from "react";
import { Box, Grid } from '@mui/material';
import DiscCard from "./DiscCard";
import Discs from '../discs.json';

function DGlist(props) {

    const { onAdd, type } = props;

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

    if (type === 'all') {
        return (
            <Box>
                <Grid container spacing={3} >
                    {discs.map( (disc) => (
                        <Grid item key={disc.id} xs={4}>
                            <DiscCard onAdd={ onAdd } disc={disc} />
                        </Grid> ))}
                </Grid>
            </Box>
        );
    }

    return (
        <Box>
            <Grid container spacing={3} >
                {discs.map( (disc) => (
                    disc.type.toLowerCase() === type 
                    ? 
                    (<Grid item key={disc.id} xs={4}>
                        <DiscCard onAdd={ onAdd } disc={disc} />
                    </Grid>) 
                    : null
                    ))}

            </Grid>
        </Box>
        
    );
}
 
export default DGlist;
