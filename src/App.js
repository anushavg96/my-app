import { makeStyles, createTheme } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import React from 'react';
import './App.css';
import Header from './components/Header';
import SideMenuWrapper from './components/SideMenuWrapper';
import { ThemeProvider } from "@material-ui/core";
import PageHeader from './components/PageHeader';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import Employees from './components/Employees';

const custom_theme  = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126"
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526"
    },
    background: {
      default:"#f4f5fd"
    },
    shape: {
      borderRadius: '12px',
    },
  },
    overrides: {
      MuiAppBar: {
        root: {
          transform: 'translateZ(0)'
        }
      }
    },
    props: {
      MuiIcon: {
        disableRipple: true
      }
    }
  
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})  

function App() {
  const classes = useStyles();
  return (
    //react fragment
    <ThemeProvider theme={custom_theme}>
    <SideMenuWrapper />
    <div className={classes.appMain}>
    <Header />
    
    <Employees />
    </div>
    <CssBaseline />
    </ThemeProvider>
  
  );
}

export default App;
