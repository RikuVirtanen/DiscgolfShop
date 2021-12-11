import React, { useState } from 'react';
import MainNavMUI from './MUI/MainNavMUI';
import MainNavMobileMUI from './MUI/MainNavMobileMUI';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import Footer from "./MUI/Footer";
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './MUI/MainPage';
import GetData from './MUI/GetData';
import Info from './MUI/Info';
import FormPage from './MUI/FormPage';
import ProfileMUI from './MUI/ProfileMUI';
import ProductNavMUI from './MUI/ProductNavMUI';

const theme = createTheme({
  palette: {
    primary: {main: '#000000', contrastText: '#FFFFFF'},
    secondary: {main: '#d3d3d3', contrastText: '#FFFFFF'},
    text: {primary: '#000000', secondary: '#d3d3d3', contrastText: '#FFFFFF'},
    action: {active: "#000000", hover: "#d3d3d3", selected: '#d32f2f'  },
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

  const [total, setTotal] = useState(0);

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
    setTotal(total + product.price);
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
    setTotal(total - product.price);
};

  const mobile = useMediaQuery({query: '(max-width: 900px'});

  return (
    <BrowserRouter>
      <ThemeProvider theme= { theme }>
        <CssBaseline />
        {mobile
        ? <Box>
            <MainNavMobileMUI onAdd={ onAdd } onRemove={ onRemove } cartItems={ cartItems } total={ total } />
            <Box sx={{minHeight: '64.5vh', marginTop: '30vw', marginBottom: '2vw'}}>
              <Switch>
                <Route exact path='/'><MainPage /></Route>
                <Route path='/tuotteet'><ProductNavMUI onAdd={ onAdd } onRemove={ onRemove } cartItems={ cartItems } total={ total }/></Route>
                <Route path='/tietoa'><Info /></Route>
                <Route path='/palaute'><FormPage /></Route>
                <Route path='/profile'><ProfileMUI /></Route>
                <Route path='/lisaa'><GetData /></Route>
                <Route path='/*'><MainPage /></Route>
              </Switch>
            </Box>
            <Footer />
          </Box>
        : <Box>
            <MainNavMUI onAdd={ onAdd } onRemove={ onRemove } cartItems={ cartItems } total={ total } />
            <Box sx={{minHeight: '100vh', marginTop: '15vh', marginBottom: '5vh'}}>
              <Switch>
                <Route exact path='/'><MainPage /></Route>
                <Route path='/tuotteet'><ProductNavMUI onAdd={ onAdd } onRemove={ onRemove } cartItems={ cartItems } total={ total } /></Route>
                <Route path='/tietoa'><Info /></Route>
                <Route path='/palaute'><FormPage /></Route>
                <Route path='/profile'><ProfileMUI /></Route>
                <Route path='/lisaa'><GetData /></Route>
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
