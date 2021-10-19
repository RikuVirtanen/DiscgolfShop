import React from 'react';
import { ThemeContext } from './ThemeContext';

function Navbar(){
    //static contextType = ThemeContext;
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                    <h1>Navbar</h1>
                    <ul>
                        <li>Home</li>
                        <li>List</li>
                        <li>Add</li>
                    </ul>
                </nav>
            )
        }}</ThemeContext.Consumer>
    
    );
}
 
export default Navbar;
