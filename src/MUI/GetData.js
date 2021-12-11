import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import DiscForm from "./DiscForm";

export default function GetData() {
    const [companies, setCompanies] = useState([]);
    const [types, setTypes] = useState([]);

    const [error, setError] = useState('');

    const fetchCompanyData = async () => {
        try {
            const response = await fetch('http://localhost:8080/valmistajat/all');
            const json = await response.json();
            setCompanies(json);
            setError('');
        } catch (error) {
            setCompanies([]);
            setError('Data could not be fetched!');
        }
    }

    const fetchTypeData = async () => {
        try {
            const response = await fetch('http://localhost:8080/tyypit/all');
            const json = await response.json();
            setTypes(json);
            setError('');
        } catch (error) {
            setTypes([]);
            setError('Data could not be fetched!');
        }
    }

    useEffect(() => {
        fetchCompanyData();
        fetchTypeData();
    }, []);

    if (error.length > 0) {
        return (<Typography>{ error }</Typography>);
    }

    return (<DiscForm types={ types } companies={ companies } />)
}