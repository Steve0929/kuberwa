// based on https://material-ui.com/getting-started/templates/sign-in-side/

import React from 'react';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../assets/img/homePage/Geosmartlogo.png';
import logobw from '../assets/img/homePage/BWLogo.png';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    border: 'black',
    background: '#3497d4',
  },
  item: {
    width: '100%',
    background: '#3F51B5',
    'textAlign': 'center',
    'borderRadius': '5px',
    'marginTop': '120px'
  },
  center: {
    cursor: 'pointer',
    display: 'center',
    justifyContent: 'center',
    'margin': 'auto',
    width: '250px',
    'float': 'left'
  },
  table:{
    width:'100%',
    display:'table'
  },
  top:{
    display: 'table-cell',
    position: 'relative',
    width:'100%',
    height: '100px',
    'background-color': 'rgba(89,144,222,.6)',
    'vertical-align':'middle'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const HomePage = () => {
  const history = useHistory();
  const routeChange1 = () =>{
    const path = '/login';
    history.push(path);
  };

  const routeChange2 = () =>{
    const path = '/signup';
    history.push(path);
  };

  const routeChange3 = () =>{
    const path = '/play/map';
    history.push(path);
  };

  const classes = useStyles();
  return (
    <div style={{height: "100vh"}}>
      <Grid container className={classes.container}>
        <font color = "white" size = "80">
          <h1 style={{fontFamily: 'system-ui'}}>
            Welcome to Geosmart app.
          </h1>
        </font>
        <Grid item m={12} className={classes.item} >
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className ={classes.center}>
              <img src={logo} alt="Logo" width="308" height="300" onClick={routeChange1} />
            </div>
            <div className ={classes.center}>
              <img src={logobw} alt="Logo2" width="328" height="320" onClick={routeChange2} />
            </div>
            <a onClick={routeChange3} style={{fontSize: '2px'}}>Test map</a>
          </div>
        </Grid>
        <Grid>
          <font color = "white" face = "Garamond">
            <h2 style={{fontFamily: 'system-ui'}}>
              Learn Geography by Playing!
            </h2>
            <h2 style={{fontFamily: 'system-ui'}}>
              Click the color logo to login, or the black and white logo to sign up.
            </h2>
          </font>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
