import React from 'react';
import { connect } from "react-redux";

import GameCard from '../components/gameSelection/GameCard';
import MapImage from '../assets/img/map.jpg'
import FlagImage from '../assets/img/flag.png'
import PlaceImage from '../assets/img/place.jpg'
import {checkToken} from "../redux/common/checkToken";


class Games extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      map_rounds: "5",
      flag_continent: "Global",
      place_continent: "Global"
    };
  }

  componentDidMount() {
    checkToken();
    //console.log("Usuario "+JSON.stringify(this.props.user))

  }

  componentWillReceiveProps(props) {}

  componentWillUnmount() {}

  handle_map_rounds(e){
    const value = e.target.value;
    this.setState({map_rounds: value})
  }

  handle_flag_continent(e){
    const value = e.target.value;
    this.setState({flag_continent: value})
  }

  handle_place_continent(e){
    const value = e.target.value;
    this.setState({place_continent: value})
  }

  render() {
    if(!this.props.user){
      return(
        <div style={{margin: "10em",fontSize: "20px", fontWeight: 600,textAlign: "center"}}>
         La sesión ha expirado
        </div>
      )
    }
    return (
      <div style={{width: '100%',backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)', minHeight: '100vh'}}>
        <div style={{display: 'flex'}}>
          <GameCard
            gameName="Recognize the flag"
            gameDescription="Recognize to which country the indicated flag belongs"
            handleFunctionContinent={(e) => this.handle_flag_continent(e)}
            gameImage={FlagImage}
            gameValue={this.state.flag_continent}
            onClickMyRecords={() => this.props.history.push({pathname: "/myrecords", gametype: "2"})}
            onClickLeaderboard={() => this.props.history.push({pathname: "/bestscores", gametype: "2"})}
            onClickConfiguration={() => this.props.history.push({pathname: "/play/flags", filter: this.state.flag_continent, gametype: "flags"})}
            />

          <GameCard
            mapGame={true}
            gameName="Locate the country"
            gameDescription="Locate the indicated country on our interactive map on a given series of rounds"
            handleFunctionContinent={(e) => this.handle_map_rounds(e)}
            gameImage={MapImage}
            gameValue={this.state.map_rounds}
            onClickMyRecords={() => this.props.history.push({pathname: "/myrecords", gametype: "1"})}
            onClickLeaderboard={() => this.props.history.push({pathname: "/bestscores", gametype: "1"})}
            onClickConfiguration={() => this.props.history.push({pathname: "/play/map", rounds: this.state.map_rounds})}
            />

          <GameCard
            gameName="Recognize the place"
            gameDescription="Recognize to which country the indicated representative place belongs"
            handleFunctionContinent={(e) => this.handle_place_continent(e)}
            gameImage={PlaceImage}
            gameValue={this.state.place_continent}
            onClickMyRecords={() => this.props.history.push({pathname: "/myrecords", gametype: "3"})}
            onClickLeaderboard={() => this.props.history.push({pathname: "/bestscores", gametype: "3"})}
            onClickConfiguration={() => this.props.history.push({pathname: "/play/places", filter: this.state.place_continent, gametype: "places"})}
            />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { //get user in the store
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  //loginUser: (username, password) => dispatch(loginUser(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);
