import React, { useState } from 'react';
import MainNavMUI from './MUI/MainNavMUI';
import MainNavMobileMUI from './MUI/MainNavMobileMUI';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import Footer from "./MUI/Footer";
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './MUI/MainPage';
import ProductsMUI from './MUI/ProductsMUI';
import Info from './MUI/Info';
import FormPage from './MUI/FormPage';
import ProfileMUI from './MUI/ProfileMUI';

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

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exists = cartItems.find((x) => x.id === product.id);
    if (exists) {
        setCartItems(
            cartItems.map((x) => 
            x.id === product.id ? {...exists, qty: exists.qty + 1 } : x
            )
        );
    } else {
        setCartItems([...cartItems, {...product, qty: 1}]);
    }
};

const onRemove = (product) => {
    const exists = cartItems.find((x) => x.id === product.id);
    if(exists.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
        setCartItems(
            cartItems.map((x) => 
            x.id === product.id ? {...exists, qty: exists.qty - 1 } : x
            )
        );
    }
};

  const mobile = useMediaQuery({query: '(max-width: 900px'});

  return (
    <BrowserRouter>
      <ThemeProvider theme= { theme }>
        <CssBaseline />
        {mobile
        ? <Box>
            <MainNavMobileMUI onAdd={ onAdd } onRemove={ onRemove } cartItems={ cartItems } />
            <Box sx={{minHeight: '64.5vh', marginTop: '30vw', marginBottom: '2vw'}}>
              <Switch>
                <Route exact path='/'><MainPage /></Route>
                <Route path='/tuotteet'><ProductsMUI onAdd={ onAdd } onRemove={ onRemove } cartItems={ cartItems } /></Route>
                <Route path='/tietoa'><Info /></Route>
                <Route path='/palaute'><FormPage /></Route>
                <Route path='/*'><MainPage /></Route>
              </Switch>
            </Box>
            <Footer />
          </Box>
        : <Box>
            <MainNavMUI onAdd={ onAdd } onRemove={ onRemove } cartItems={ cartItems } />
            <Box sx={{minHeight: '100vh', marginTop: '10vw', marginBottom: '2vw'}}>
              <Switch>
                <Route exact path='/'><MainPage /></Route>
                <Route path='/tuotteet'><ProductsMUI onAdd={ onAdd } onRemove={ onRemove } cartItems={ cartItems } /></Route>
                <Route path='/tietoa'><Info /></Route>
                <Route path='/palaute'><FormPage /></Route>
                <Route path='/profile'><ProfileMUI /></Route>
                <Route path='/*'><MainPage /></Route>
              </Switch>
            </Box>
            <Footer />
          </Box>}
      </ThemeProvider>
    </BrowserRouter>
    
  );
}

export default App;
