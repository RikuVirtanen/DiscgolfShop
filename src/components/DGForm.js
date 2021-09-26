import React, { useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function DGForm({addDisc}) {

    //const { register, handleSubmit, formState: { errors } } = useForm();

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [speed, setSpeed] = useState('');
    const [glide, setGlide] = useState('');
    const [turn, setTurn] = useState('');
    const [fade, setFade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addDisc(name, company, speed, glide, turn, fade);
        setName('');
        setCompany('');
        setSpeed('');
        setGlide('');
        setTurn('');
        setFade('');
    }

    return  (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;

            return (
                <div className="form-div" style={{ background: theme.ui, color: theme.syntax}}>
                    <h1>Add new disc</h1>
                    <form className="dgform" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name: </label>
                        <input type="text" value={name} required onChange={(e) => setName(e.target.value)}/>
                        <br/>
                        <label htmlFor="company">Company: </label>
                        <select 
                        className="custom-select" required
                        onChange={(e) => {
                            const selectedCompany = e.target.value;
                            setCompany(selectedCompany);
                        }}
                        >
                            <option value=""></option>
                            <option value="Innova">Innova</option>
                            <option value="Discraft">Discraft</option>
                            <option value="Dynamic Discs">Dynamic Discs</option>
                            <option value="Discmania">Discmania</option>
                            <option value="Latitude 64">Latitude 64</option>
                            <option value="MVP">MVP</option>
                            <option value="Prodigy">Prodigy</option>
                            <option value="Westside">Westside</option>
                            <option value="Axiom">Axiom</option>
                            <option value="Kastaplast">Kastaplast</option>
                            <option value="Gateway">Gateway</option>
                            <option value="Infinite Discs">Infinite Discs</option>
                            <option value="Streamline">Streamline</option>
                            <option value="DGA">DGA</option>
                            <option value="Viking Discs">Viking Discs</option>
                        </select>
                        <br/>
                        <h4>Attributes: </h4>
                        <label htmlFor="speed">Speed: </label>
                        <input type="number" min="0" max="16" value={speed} onChange={(e) => setSpeed(e.target.value)}/>
                        <br/>
                        <label htmlFor="glide">Glide: </label>
                        <input type="number" min="0" max="6" value={glide} onChange={(e) => setGlide(e.target.value)}/>
                        <br/>
                        <label htmlFor="turn">Turn: </label>
                        <input type="number" min="-6" max="3" value={turn} onChange={(e) => setTurn(e.target.value)}/>
                        <br/>
                        <label htmlFor="fade">Fade: </label>
                        <input type="number" min="0" max="6" value={fade} onChange={(e) => setFade(e.target.value)}/>
                        <br/>
                        <br/>
                        <input type="submit"/><input type="reset"/>
                    </form>
                </div>
            )
        }}</ThemeContext.Consumer>
    );
}

export default DGForm;