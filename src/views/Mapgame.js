import React from 'react';
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import Trofeo from '../assets/img/trofeo.jpg'
import axios from 'axios';
import { URL } from "../redux/data/server";
import {checkToken} from "../redux/common/checkToken";

const question_points = 100;
const icons_urls = [
  "https://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png",
  "https://www.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png",
  "https://www.google.com/intl/en_us/mapfiles/ms/micons/green-dot.png",
  "https://www.google.com/intl/en_us/mapfiles/ms/micons/purple-dot.png",
  "https://www.google.com/intl/en_us/mapfiles/ms/micons/pink-dot.png",
  "https://www.google.com/intl/en_us/mapfiles/ms/micons/orange-dot.png",
  "https://www.google.com/intl/en_us/mapfiles/ms/micons/yellow-dot.png"
]

const mapStyles = {
    featureType: "administrative.country",
    elementType: "labels",
    stylers: [
        { visibility: "off" }
    ]
}

const mapStylesFull = {
    featureType: "all",
    elementType: "labels",
    stylers: [
        { visibility: "off" }
    ]
}

const st = {
    "featureType": "all",
    "stylers": [
      { "color": "#aad80e" }
    ]
  }

const GoogleMapComp = withGoogleMap(props => {
  const items = props.options.map((question, i) => {
    const random_icon_index = Math.floor(Math.random() * icons_urls.length);
    return(
      <Marker
        key={"opt"+i}
        icon= {{url: icons_urls[random_icon_index] }}
        title={"option "+i}
        name={"option "+i}
        position={{lat: question.latitude, lng: question.longitude }}
        draggable={false}
        onClick={(e) => {
               props.choose(question)
               }}
       />
     )
  })

  return(
     <GoogleMap
       defaultCenter={props.center}
       defaultZoom={2}
       defaultOptions={{
            zoomControl: false, styles: [mapStylesFull]
        }}>
      {items}
     </GoogleMap>
   )});

class Mapgame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrar_boton_next: false,
      correct_selected: false,
      gameLength: 5,
      score: 0,
      current_question: 0,
      questions: null,
    }
  }

  async getQuestions(){
    const isValid = await checkToken();
    console.log(isValid)
    if(isValid == false){
       return;
    }
    const continent = 1 + Math.floor(Math.random() * 7);
    const questions = await axios.post(URL, {
    query: `
      query {
        countriesByContinent(id_continent: ${continent}) {
          name
          latitude
          longitude
          }
        }
        `
      })
    console.log(questions)
    if(questions &&  questions.data &&  questions.data.data){
      return this.setState({questions: questions.data.data.countriesByContinent})
    }

  }

  async insertScore(id_user, score, date_played, id_game){
    console.log('insert score on map game. score: '+score)
    var insertedScore = await axios.post(URL, {
        query: `
        mutation{
            createScore(score:{
                       ID_User: "${id_user}",
                       Score: ${score},
                       DatePlayed: "${date_played}",
                       ID_Game: "${id_game}"
            }){
                 message
            }
          }

          `
        }
      ).catch(err => {
        console.error(err)
      })
      console.log(insertedScore)
   }

  componentDidMount() {
    this.getQuestions()
    if(!this.props.user){
       return this.props.history.push('/home')
    }

    if(this.props.location.rounds){
       this.setState({gameLength: this.props.location.rounds})
    }

  }


  chooseAnswer(question, answer) {
    console.log(answer)
    let points = 0;
    let acertado = false;
    if(question.latitude === answer.latitude && question.longitude === answer.longitude ){
       points = question_points;
       acertado = true;
    }

    if(this.state.current_question + 1 >= this.state.gameLength){
      //save score
      var username = this.props.user.username;
      var total_score = this.state.score + points + 1;
      var date_played = new Date();
      date_played = date_played.toISOString()
      var id_game = "1";

      this.insertScore(username, total_score, date_played, id_game)

      //...
      //
   }

    this.getQuestions()
    return this.setState({score: this.state.score + points, mostrar_boton_next: true, correct_selected: acertado});
  }

  nextQuestion(){

    return this.setState({current_question: this.state.current_question + 1, mostrar_boton_next: false, correct_selected: false});
  }

  reiniciar(){
    return this.setState({score:0, current_question:0})
  }

  render() {
    var answer = null;
    const question = this.state.questions;
    if(question){
       answer = Math.floor(Math.random() * this.state.questions.length);
    }

    const opbtn = { color: 'white', backgroundColor: '#9C27B0', margin: '1em', padding: '0.7em',
                    boxShadow: '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)'
                  }
    return (
      <div className="map_container">
       <div className="map_flexcontainer" >
          <h2 style={{color: 'white', fontWeight: 600, fontSize: '3em', maxWidth: '25em', margin: '0 auto', marginTop: '1.5em'}}>
            Identify the location on the map by choosing the correct marker
          </h2>

          <h3 className="score">
              <span style={{color: 'white'}}>Current score: </span>
              {this.state.score}
          </h3>

          {
            this.state.current_question >= this.state.gameLength ?
              <Card style={{margin:'0 auto'}} elevation={10}>
                <CardActionArea style={{marginTop: '2em', minWidth: '45em'}}>
                  <CardMedia
                    style={{height: 140, width: 140, margin: '0 auto', borderRadius: '50%'}}
                    image={Trofeo}
                    />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      The game is over. your score is: {this.state.score}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                 <div  style={{textAlign: 'center', margin: '0 auto'}}>
                  <Button size="small" color="primary"  onClick={()=>this.props.history.push("/games")}>
                    Back to main menu
                  </Button>
                  <Button size="small" color="primary"  onClick={()=> this.reiniciar()}>
                    Play again
                  </Button>
                 </div>
                </CardActions>
            </Card>
            : null
          }

          {
             this.state.mostrar_boton_next ?
             <Card style={{margin: '0 auto', width: '20em', padding: '2em', borderRadius: '12px', marginTop: '8em',
                           boxShadow: '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)'
                          }}>
               <div  style={{textAlign: 'center', margin: '0 auto', display: 'flex', flexDirection: 'column'}}>
                 {
                   this.state.correct_selected === true ?
                    <span className="mapGameCorrect">
                        Correct! + {question_points}
                    </span>
                   :
                    <span className="mapGameIncorrect" >
                        Incorrect!
                    </span>
                 }
                <Button size="small" color="primary" style={opbtn} onClick={()=>this.nextQuestion()}>
                  Next question
                </Button>
               </div>
             </Card>
             :
              null
          }

          {
            question && this.state.mostrar_boton_next !== true &&   this.state.current_question < this.state.gameLength ?
             <>
              <h2 style={{color: "#FFEB3B"}}>
                {"Locate "+  this.state.questions[answer].name +" in the map"}
              </h2>
              <GoogleMapComp
                   center = { { lat:  4.6097100, lng: -74.0817500 } }
                   containerElement={ <div style={{ height: '100%', width: '100%' , overflow: 'hidden', margin: '0 auto'}} /> }
                   mapElement={ <div className="map_element" /> }
                   options = {question}
                   /*
                   optionA =  { question[0]}
                   optionB =  { question[1]}
                   optionC =  { question[2]}
                   optionD =  { question[3]}
                   optionE =  { question[4]}
                   */
                   choose ={(option)=>this.chooseAnswer(question[answer], option)}

                 />
              </>
              : null
             }
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

export default connect(mapStateToProps, mapDispatchToProps)(Mapgame);
