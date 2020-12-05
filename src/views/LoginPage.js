// based on https://material-ui.com/getting-started/templates/sign-in-side/

import React, { useState } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from "react-router-dom";
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Copyright from '../components/elfooter/Copyright';
import Styles from '../assets/JSS/userManagement/Styles';
import loginUser from '../redux/actions/loginUser';
import { URL } from "../redux/data/server";

import {checkToken} from "../redux/common/checkToken";

const LoginPage = ({ loginUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const classes = Styles();
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    if(username.trim().length === 0 || password.trim().length === 0) {
      alert("All fields must be filled");
    } else {
      //logear al usuario
      axios.post(URL, {
        query: `
          mutation {
            loginUser(user: {
              username: "${username.trim()}"
              password: "${password.trim()}"
            }) {
              _id
              firstname
              lastname
              username
              country
              profile_picture
              created_at
              flag
              token
            }
          }
        `
      })
      .then(response => {
        if (response.status === 200) {
          console.log("USUARIO: "+response.data.data.loginUser)
          loginUser(response.data.data.loginUser);

          history.push({pathname:"/games"})
        } else {
          alert("Ups! Something went wrong");
        }
      })
      .catch(() => {
        alert("Ups! Something went wrong");
      });
    }

    return;
  }

  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={(e) => handleSubmit(e)}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    {"Login as guest"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => { //get user in the store
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
