import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Paper, Select, InputLabel, MenuItem, TextField, FormControl, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    main: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    paper: {
        display: 'block',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
        paddingTop: '5vh',
        paddingBottom: '5vh'
    },
    typo: {
        color: '#000000'
    },
})

export default function DiscForm(props) {

    const { types, companies } = props;

    const classes = useStyles();

    const [disc, setDisc] = useState({
        name: '',
        company: '',
        plastic: '',
        type: '',
        speed: '',
        glide: '', 
        turn: '',
        fade: ''
    });

    const [msg, setMsg] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setDisc({
            ...disc,
            [name]: value
        });
    }

    const handleReset = (e) => {
        e.preventDefault();
        setDisc({
            name: '',
            company: '',
            plastic: '',
            type: '',
            speed: '',
            glide: '', 
            turn: '',
            fade: ''
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const discData = {
            'name': disc.name,
            'company': disc.company,
            'type': disc.type,
            'speed': disc.speed,
            'glide': disc.glide,
            'turn': disc.turn,
            'fade': disc.fade
        }
        axios.post('http://localhost:8080/tuotteet/save', discData)
        .then(response => {
            if (response.status === 200) {
                handleReset(e);
                setMsg('Lisättiin');
            } else {
                setMsg('Lisäys ei onnnistunut');
            }
        })
    }

    return (

        <Grid container spacing={1} className={ classes.main } >
            <Grid item xs >
            </Grid>
            <Grid item xs={8} >
                <Paper className={ classes.paper }>
                    <Typography variant='h3' className={ classes.typo }>
                        Kiekon lisäys
                    </Typography>
                    <br />
                    <Typography className={ classes.typo }>
                        Admin voi lisätä kiekkoja valikoimiin
                    </Typography>
                    <br />
                    <br />
                    <form onSubmit={handleSubmit}>
                        <FormControl required fullWidth sx={{ maxWidth: 300}}>
                            <TextField 
                                required
                                type='text'
                                label='name' 
                                name='name' 
                                value={ disc.name } 
                                autoComplete='off'
                                onChange={ (e) => handleChange(e) } />
                        </FormControl>
                        <br />
                        <br />
                        <FormControl required fullWidth sx={{ maxWidth: 300}}>
                            <InputLabel id='label-type'>Tyyppi</InputLabel>
                            <Select 
                                labelId='label-type'
                                id="select-type"
                                value={ disc.type }
                                label="Tyyppi"
                                name="type"
                                required
                                onChange={handleChange}   
                            >
                                <MenuItem value=''><em>None</em></MenuItem>
                                { types.map(type => {
                                    return (
                                        <MenuItem key={type.id} value={type.name}>{type.name}</MenuItem>
                                    )
                                })}
                                
                            </Select>
                        </FormControl>
                        <br />
                        <br />
                        <FormControl required fullWidth sx={{ maxWidth: 300}}>
                            <InputLabel id='label-company'>Valmistaja</InputLabel>
                            <Select 
                                labelId='label-company'
                                id="select-company"
                                value={ disc.company }
                                label="Valmistaja"
                                name="company"
                                required
                                onChange={handleChange}   
                            >
                                <MenuItem value=''><em>None</em></MenuItem>
                                { companies.map(company => {
                                    return (
                                        <MenuItem key={company.id} value={company.name}>{company.name}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                        <br />
                        <br />
                        <FormControl required sx={{ maxWidth: 80}}>
                            <TextField 
                                required
                                type='number'
                                label='speed' 
                                name='speed' 
                                value={ disc.speed } 
                                autoComplete='off'
                                onChange={ (e) => handleChange(e) } />
                        </FormControl>
                        <FormControl required sx={{ maxWidth: 80}}>
                            <TextField 
                                required
                                type='number'
                                label='glide' 
                                name='glide' 
                                value={ disc.glide } 
                                autoComplete='off'
                                onChange={ (e) => handleChange(e) } />
                        </FormControl>
                        <FormControl required sx={{ maxWidth: 80}}>
                            <TextField 
                                required
                                type='number'
                                label='turn' 
                                name='turn' 
                                value={ disc.turn } 
                                autoComplete='off'
                                onChange={ (e) => handleChange(e) } />
                        </FormControl>
                        <FormControl required sx={{ maxWidth: 80}}>
                            <TextField 
                                required
                                type='number'
                                label='fade' 
                                name='fade' 
                                value={ disc.fade } 
                                autoComplete='off'
                                onChange={ (e) => handleChange(e) } />
                        </FormControl>
                        <br />
                        <br />
                        <Button type='submit' variant='contained'>Lisää</Button>
                        <Button variant='outlined' onClick={(e) => handleReset(e)} >Reset</Button>
                    </form>
                    {msg.length > 0
                    ? <p>{msg}</p>
                    : null}
                </Paper>
            </Grid>
            <Grid item xs >
            </Grid>
        </Grid>

    );
}