import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router,
  Route } from 'react-router-dom';
import { Routing } from './routes/routes';
import history from './services/history'
// import { login } from './components/login';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';  
// const theme = createMuiTheme({
//   
// });hi

const theme = createTheme({
  palette: {
    primary: {
      main: '#bd6b2d', // Replace with your custom primary color
    },
    secondary: {
      main: '#2d9ebd', // Replace with your custom secondary color
    },
  },
});

export const SettingsContext = createContext();


export class App extends React.Component {
  render(){
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Routing />
          </Router>
        </ThemeProvider>
        
      </div>
    );
  } 
}

export default App;