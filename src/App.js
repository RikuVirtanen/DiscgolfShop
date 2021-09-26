import React from 'react';
import DGlist from './components/DGlist';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {

  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <ThemeToggle />
          <Navbar />
          <DGlist />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
