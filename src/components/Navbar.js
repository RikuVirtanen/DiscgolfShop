import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends React.Component {
    //static contextType = ThemeContext;
    render() { 
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <nav style={{ background: theme.ui, color: theme.syntax }}>
                        <h1>Navbar</h1>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">List</a></li>
                            <li><a href="#">Add</a></li>
                        </ul>
                    </nav>
                )
            }}</ThemeContext.Consumer>
        
        );
    }
}
 
export default Navbar;
