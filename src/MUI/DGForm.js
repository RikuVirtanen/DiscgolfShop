import React, { useState } from 'react';
import { Select, InputLabel, MenuItem, TextField, FormControl, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

const useStyles = makeStyles({
    main: {
        justifyContent: 'center'
    },
    paper: {
        textAlign: 'center',
        minHeight: '70vh',
        paddingTop: '5vh'
    },
    container: {
        display: 'flex-box',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5vw',
        paddingTop: '5vw',
    },
    select: {
        justifyContent: 'center',
        maxWidth: '15vw',
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30vh',
    },
    typo: {
        color: 'text.primary'
    },
    input: {
        color: 'text.primary'
    }
});


function DGForm() {

    const classes = useStyles();

    const [request, setRequest] = useState('');
    const [msg, setMsg] = useState('');

    const [disc, setDisc] = useState({
        name: '',
        company: ''
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setDisc({
            ...disc,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setRequest(`Kiekko: ${disc.name} \nValmistaja: ${disc.company}`);
        axios.post('http://localhost:8080/palaute/save', request)
        .then(response => {
            if (response.status === 200) {
                setMsg('Lisättiin');
                console.log(msg);
                setRequest(`Pyrimme lisäämään ${disc.name} kiekon valmistajalta ${disc.company} valikoimiimme mahdollisimman pian!`);
            } else {
                setMsg('Lisäys ei onnnistunut');
                console.log(msg);
            }
        })
        handleReset(e);
        
        // methodi, joka lisää kiekon tietokantaan
    }

    const handleReset = (e) => {
        e.preventDefault();
        setDisc({
            name: '',
            company: ''
        });
    }

   

    return (
        <form onSubmit={handleSubmit} className={ classes.container }>
            <TextField 
                required
                label='name' 
                name='name' 
                value={ disc.name } 
                autoComplete='off'
                InputProps={{
                    className: classes.input
                }} 
                onChange={ (e) => handleChange(e) } />
            <br />
            <br />
            <FormControl required fullWidth sx={{ maxWidth: 250}}>
                <InputLabel id='label-company'>Valmistaja</InputLabel>
                <Select 
                    labelId='label-company'
                    id="select-company"
                    value={ disc.company }
                    label="Valmistaja"
                    name="company"
                    required
                    onChange={handleChange}
                    sx={{
                        className: classes.select
                    }}   
                >
                    <MenuItem className={ classes.typo } value=""><em>None</em></MenuItem>
                    <MenuItem className={ classes.typo } value="Innova">Innova</MenuItem>
                    <MenuItem className={ classes.typo } value="Discraft">Discraft</MenuItem>
                    <MenuItem className={ classes.typo } value="Dynamic Discs">Dynamic Discs</MenuItem>
                    <MenuItem className={ classes.typo } value="Discmania">Discmania</MenuItem>
                    <MenuItem className={ classes.typo } value="Latitude 64">Latitude 64</MenuItem>
                    <MenuItem className={ classes.typo } value="MVP">MVP</MenuItem>
                    <MenuItem className={ classes.typo } value="Prodigy">Prodigy</MenuItem>
                    <MenuItem className={ classes.typo } value="Westside">Westside</MenuItem>
                    <MenuItem className={ classes.typo } value="Axiom">Axiom</MenuItem>
                    <MenuItem className={ classes.typo } value="Kastaplast">Kastaplast</MenuItem>
                    <MenuItem className={ classes.typo } value="Gateway">Gateway</MenuItem>
                    <MenuItem className={ classes.typo } value="Infinite Discs">Infinite Discs</MenuItem>
                    <MenuItem className={ classes.typo } value="Streamline">Streamline</MenuItem>
                    <MenuItem className={ classes.typo } value="DGA">DGA</MenuItem>
                    <MenuItem className={ classes.typo } value="Viking Discs">Viking Discs</MenuItem>
                </Select>
            </FormControl>
            <br />
            <br />
            <Button type='submit' variant='contained'>Lisää</Button>
            <Button variant='outlined' onClick={(e) => handleReset(e)} >Reset</Button>
            <br />
            <br />
            <br />
            <br />
            {request.length > 0
                ? <Typography>{request}</Typography>
                : null}
        </form>
    )

}

export default DGForm;