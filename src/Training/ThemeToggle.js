import React, { Component } from 'react';
import { ThemeContext } from './ThemeContext';

class ThemeToggle extends React.Component {
    static contextType = ThemeContext;
    render() { 
        const { toggleTheme } = this.context;
        return (
            <button className="toggle" onClick={toggleTheme}>Toggle the theme</button>
        )
    }
}
 
export default ThemeToggle;