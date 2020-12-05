import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import logoutUser from '../redux/actions/logoutUser';

const outItemLeft = {
  marginLeft: '0.6em', marginRight: '1em', color: '#dfdada', textDecoration: 'none', marginTop: '0.8em',
  fontWeight: 600, fontSize: '26px', cursor: 'pointer'
}
const outItemRight = {
  marginLeft: 'auto', marginRight: '1em', color: '#dfdada', textDecoration: 'none', marginTop: '0.8em',
  fontWeight: 600, fontSize: '26px', cursor: 'pointer'
}


class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    console.log("Usuario "+JSON.stringify(this.props.user))
  }

  logOut(){
    this.props.logoutUser();
  }

  render() {
    if(this.props.user == null){ //this.props.user == null
       return(
         <div style={{width: '100%', backgroundColor: '#192023', minHeight: '5em', fontFamily: 'system-ui'}}>
           <div style={{display: 'flex', flexDirection: 'row'}}>
             <Link style={outItemLeft} to="/home">Home</Link>
             <Link style={outItemRight}to="/login">Login</Link>
             <Link style={outItemLeft} to="/signup">Sign up</Link>
           </div>
         </div>
       )
    }

    return (
      <div style={{width: '100%', backgroundColor: '#192023', minHeight: '5em', fontFamily: 'system-ui'}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Link className="navbtn" to="/games">Games</Link>
          <Link className="navbtn" to="/profile">Profile</Link>
          <Link className="navbtn" to="/update-user">Update info</Link>
          <Link className="navbtn" to="/chat/lobby" replace >Chat</Link>
          <Link className="navbtn" to="/courses" replace >Learntic courses</Link>

          <Link style={{marginLeft: 'auto', marginRight: '1em', color: '#e91e63', textDecoration: 'none', marginTop: '0.8em',
                        fontWeight: 600, fontSize: '26px', cursor: 'pointer'}}
                onClick={() => this.logOut()} to="/home">
                Log out
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { // get user in the redux store
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({ // update user in the redux store
  //
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
