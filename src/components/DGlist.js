import React, {useState} from "react";
import { Box, Grid } from '@mui/material';
import DiscCard from "./DiscCard";
import Discs from '../discs.json';

function DGlist(props) {

    const { onAdd, type } = props;

    const [ discs ] = useState(Discs);

    if (type === 'all') {
        return (
            <Box>
                <Grid container spacing={3} >
                    {discs.map( (disc) => (
                        <Grid item key={disc.id} xs={12} md={4} sm={6}>
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
                    (<Grid item key={disc.id} xs={12} md={4} sm={6}>
                        <DiscCard onAdd={ onAdd } disc={disc} />
                    </Grid>) 
                    : null
                    ))}

            </Grid>
        </Box>
        
    );
}
 
export default DGlist;
