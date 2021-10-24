import React from 'react';
import MainNavMUI from './MUI/MainNavMUI';
import MainNavMobileMUI from './MUI/MainNavMobileMUI';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Footer from "./components/Footer";
import { useMediaQuery } from 'react-responsive';

const theme = createTheme({
  palette: {
    primary: {main: '#000000', contrastText: '#FFFFFF'},
    secondary: {main: '#d3d3d3', contrastText: '#FFFFFF'},
    text: {primary: '#d3d3d3', secondary: '#000000', contrastText: '#d3d3d3'},
    action: {active: "#FFFFFF", hover: "#000000", selected: '#d32f2f'  },
    background: {default: "#FFFFFF", secondary: "#000000", contrastText: '#FFFFFF'}
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'],
    color: 'secondary'
  },
  overrides: {},

});

function App() {

  const mobile = useMediaQuery({query: '(max-width: 600px'});

  return (
    <ThemeProvider theme= { theme }>
      <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}> 
        <Box sx={{flex: 1}}>
          <CssBaseline />
          {mobile
          ? <MainNavMobileMUI />
          : <MainNavMUI />}
        </Box>
        <Footer /> 
      </Box>
    </ThemeProvider>
  );
}

export default App;
