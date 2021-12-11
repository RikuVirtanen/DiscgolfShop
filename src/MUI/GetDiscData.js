import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import DGlist from "./DGlist";

export default function GetDiscData(props) {
    const { onAdd, type, items } = props;
    const [discs, setDiscs] = useState([]);
    const [msg, setMsg] = useState('Fetching...');

    const fetchAllDiscs = async () => {
        try {
            const response = await fetch('http://localhost:8080/tuotteet/all');
            const json = await response.json();
            setDiscs(json);
            setMsg('');
        } catch (error) {
            setDiscs([]);
            setMsg('Data could not be fetched!');
        }
    }

    useEffect(() => {
        fetchAllDiscs();
    }, []);

    if (msg.length > 0) {
        return (<Typography>{ msg }</Typography>);
    }

    if (discs.length > 0) {
        return (<DGlist onAdd={ onAdd } type={ type } items={ items } discs={ discs } />)
    }

    return ( <Typography>No discs was found</Typography>)
}


