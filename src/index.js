import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Chat from './components/Chat/Chat';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import firebase from 'firebase';
// views
import Login from './views/LoginPage';
import Signup from './views/SignupPage';
import Home from './views/HomePage';
import Games from  './views/Games';
import Questions from  './views/Questions';

import Profile from './views/Profile';
import UpdateUser from './views/UpdateUser';
import Mapgame from './views/Mapgame';
import Navbar from './components/Navbar';
import BestScores from  './views/BestScores';
import MyRecords from './views/MyRecords';
import Courses from './views/Courses'


// redux store
import store from  './redux/store';

firebase.initializeApp({
  apiKey: "AIzaSyCUVk6-gHqGlZyiFoPIc_32QuIymP8O82c",
  authDomain: "geosmart-4830e.firebaseapp.com",
  databaseURL: "https://geosmart-4830e.firebaseio.com",
  projectId: "geosmart-4830e",
  storageBucket: "geosmart-4830e.appspot.com",
  messagingSenderId: "715331075251",
  appId: "1:715331075251:web:1cc463262287da9c49c4c6",
  measurementId: "G-T3PHV83EH2"
});

const isAutenticated = () => (localStorage.getItem('user') !== null) ? true : false;

const AuthRoute = (props) => (
  true
  ? <Route {... props}/>
  : <Route {... props}/>
  /*
  isAutenticated()
  ? <Route {... props}/>
  : <Redirect to="/login" />
  */
)

const Root = (
  <Provider store={store}>
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <AuthRoute path="/chat/:chatID/" component={Chat} />
        <AuthRoute path="/games" component={Games} />
        <AuthRoute path="/play/map" component={Mapgame} />
        <AuthRoute path="/play/flags" component={Questions} />
        <AuthRoute path="/play/places" component={Questions} />
        <AuthRoute path="/bestscores" component={BestScores} />
        <AuthRoute path="/profile" component={Profile} />
        <AuthRoute path="/update-user" component={UpdateUser} />
        <AuthRoute path="/myrecords" component={MyRecords} />
        <AuthRoute path="/courses" component={Courses} />
        <Redirect from="/" to="home" />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
