import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
  },
  paper: {
    display: 'flex',
    margin: 100,
    width: '100%',
    height: 500
  },
  profile_image: {
    width: '100%',
    height: '100%',
  },
  subtitle: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '2em',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  }
}));

const Profile = ({ user }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Grid container direction="row" spacing={2}>
        <Card className={classes.paper}>
          <Grid item xs={3}>
            <CardMedia
              className={classes.profile_image}
              image={user.profile_picture}
              title="Profile picture"
            />
          </Grid>
          <Grid item xs={9}>
            <Grid direction="row" spacing={2}>
              <CardContent style={{marginLeft: '3em'}}>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '2em'}}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1" color="textSecondary" component="p">
                      Username
                    </Typography>
                  </Grid>
                </div>
                <div className={classes.content}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">
                      { user.username }
                    </Typography>
                  </Grid>
                </div>
                <div className={classes.subtitle}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1" color="textSecondary" component="p">
                      Full name
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1" color="textSecondary" component="p">
                      Created at
                    </Typography>
                  </Grid>
                </div>
                <div className={classes.content}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">
                      { user.firstname + ' ' + user.lastname }
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">
                      { user.created_at.slice(0, user.created_at.indexOf('T')) }
                    </Typography>
                  </Grid>
                </div>
                <div className={classes.subtitle}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1" color="textSecondary" component="p">
                      Country
                    </Typography>
                  </Grid>
                </div>
                <div className={classes.content}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">
                      { user.country }
                    </Typography>
                    <img src={user.flag} alt="Logo" height="7%" />
                    <Grid imem xs={3} style={{marginTop: '5em'}}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => history.push({pathname:"/update-user"})}
                      >
                        update
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => { // get user in the redux store
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {})(Profile)
