import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Copyright from '../components/elfooter/Copyright';
import Styles from '../assets/JSS/userManagement/Styles';
import { URL } from '../redux/data/server';

const SignupPage = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [country, setCountry] = useState('');

  const classes = Styles();

  async function handleSubmit(event) {
    event.preventDefault();

    if(firstname.trim().length === 0 ||
      lastname.trim().length === 0 ||
      username.trim().length === 0 ||
      password.trim().length === 0 ||
      cpassword.trim().length === 0 ||
      country.trim().length === 0
      ) {
        alert("All field must be filled");
    } else if(password.trim() !== cpassword.trim()) {
      alert("The password and confirm password fields must be the same");
    } else {
      // create new user
      try {
        const flag = await axios.get(
          `https://restcountries.eu/rest/v2/name/${country}`
        );

        const message_object = await axios.post(URL, {
          query: `
            mutation {
              createUser(user: {
                firstname: "${firstname.trim()}"
                lastname: "${lastname.trim()}"
                username: "${username.trim()}"
                password: "${password.trim()}"
                country: "${country.trim()}"
                flag: "${flag.data[0].flag}"
                profile_picture: "https://github.com/nicrodriguezval/images/blob/main/3382926.jpg?raw=true"
              }) {
                message
              }
            }
          `
        });

        //Creates contact for chat application
        const contact_object = await axios.post(URL, {
            query: `
            mutation {
              createContact(contact: {
                username: "${username.trim()}",
                firstname: "${firstname.trim()}",
                lastname: "${lastname.trim()}",
                friends: []}) {
                username
              }
            }
            `
          });
          console.log("Contact " + contact_object.data.data.createContact.username + " created ")
        //Get all participants in the general chat (provisional query, must have getChatById query! )
        const participantes_object = await axios.post(URL, {
            query: `
            query{
              getChatsByUsername(
                username: "dummyuser"
              ) {
                participantes
              }
            }
            `
          });
        //Retrieves all participants from this chat
        var parts = participantes_object.data.data.getChatsByUsername[0].participantes;
        //Adds the current user to the participants list
        parts.push(contact_object.data.data.createContact.username)
        //Updates the chat general to have the recently created user
        const update_parts_object = await axios.post(URL, {
          query: `
          mutation{
            updateChat(
              id: "general",
              chat: {id: "general",
              participantes: ${JSON.stringify(parts)},
              }){
              id
            }
          }
          `
        });
        console.log("User joined chatroom " + update_parts_object.data.data.updateChat.id + " successfully ")

        alert(message_object.data.data.createUser.message);
      } catch(err) {
        console.log(err);
      }
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
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  autoComplete="fname"
                  name="firstName"
                  id="firstName"
                  label="First Name"
                  onChange={(e) => setFirstname(e.target.value)}
                  fullWidth
                  required
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
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
                />
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    autoComplete="password"
                    name="password"
                    variant="outlined"
                    id="password"
                    label="Password"
                    type="password"
                    required
                    fullWidth
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    variant="outlined"
                    id="cpassword"
                    label="Confirm Password"
                    type="password"
                    name="cpassword"
                    autoComplete="confirm-password"
                    required
                    fullWidth
                    onChange={(e) => setCpassword(e.target.value)}
                  />
                </Grid>
                <TextField
                  margin="normal"
                  variant="outlined"
                  required
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                  autoComplete="country"
                  onChange={(e) => setCountry(e.target.value)}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={(e) => handleSubmit(e)}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/login" variant="body2">
                      Already have an account? Login
                    </Link>
                  </Grid>
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
}

export default SignupPage;
