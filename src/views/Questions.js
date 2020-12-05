import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import Trofeo from '../assets/img/trofeo.jpg';
import Loader from '../components/Loader/Loader.js';

import axios from 'axios';
import { URL } from "../redux/data/server";


const question_points = 100;

class Questions extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      mostrar_boton_next: false,
      correct_selected: false,
      score: 0,
      current_question: 0,
      questions: null,
      questionsx: [
        {
          _id: "someid",
          statement: "¿A que lugar pertenece esta bandera?",
          image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
          optionA: "Colombia",
          optionB: "Brasil",
          optionC: "Ecuador",
          optionD: "Perú",
          ans: "Brasil",
          category: "flags",
          continent: "America",
          created_at: "somedate",
          Updated_at: "otherdate"
        },
        {
          _id: "someid",
          statement: "¿A que lugar pertenece esta bandera?",
          image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Peru_%28state%29.svg",
          optionA: "Colombia",
          optionB: "Brasil",
          optionC: "Ecuador",
          optionD: "Perú",
          ans: "Perú",
          category: "flags",
          continent: "America",
          created_at: "somedate",
          Updated_at: "otherdate"
        },
        {
        _id: "someid",
        statement: "¿A que lugar pertenece esta bandera?",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
        optionA: "Colombia",
        optionB: "Brasil",
        optionC: "Japón",
        optionD: "Perú",
        ans: "Japón",
        category: "flags",
        continent: "America",
        created_at: "somedate",
        Updated_at: "otherdate"
        }
      ]
    };
  }
  async insertScore(id_user, score, date_played, id_game){
  const scoreRequest = await axios.post(URL, {
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
    console.log(scoreRequest)

   }

async getQuestions(){
  console.log(this.props.location.gametype)
  console.log(this.props.location.filter)
  const category = this.props.location.gametype;
  let continent = this.props.location.filter;
  if(continent === "Global"){
     continent = ""; //no continent in particular
  }

  const questions = await axios.post(URL, {
  query: `
    query {
      gameQuestions(category: "${category}", continent: "${continent}") {
        categoria
        ERROR
        preguntas{
          _id
          statement
          optionA
          optionB
          optionC
          optionD
          continent
          image
          ans
        }
       }
      }
      `
    })
  console.log(questions)
  if(questions &&  questions.data &&  questions.data.data){
    return this.setState({questions: questions.data.data.gameQuestions.preguntas})
  }

 }


  componentDidMount() {
      console.log(this.props.location)
      if(!this.props.location.gametype){
         return this.props.history.push('/games')
      }
      if(!this.props.user){
         return this.props.history.push('/home')
      }
      this.getQuestions();

    }

  componentDidUpdate(props) {


  }

  componentWillUnmount() {}


  chooseAnswer(question, answer) {
    let points = 0;
    let acertado = false;
    if(question.ans === answer){
       points = question_points;
       acertado = true;
    }

    return this.setState({score: this.state.score + points, mostrar_boton_next: true, correct_selected: acertado});
  }

  reiniciar(){
    return this.setState({score:0, current_question:0})
  }

  nextQuestion(){

    if(this.state.current_question + 1 >= this.state.questions.length){
       //save score
       var username = this.props.user.username;
       var total_score = this.state.score + 1;
       var date_played = new Date();
       date_played = date_played.toISOString()
       var id_game = "2";
       if(this.props.location.gametype === "places"){
          id_game = "3";
       }
       console.log(date_played)
       this.insertScore(username, total_score, date_played, id_game);

       //...
       //
    }


    return this.setState({current_question: this.state.current_question + 1, mostrar_boton_next: false, correct_selected: false})
  }

  render() {
    if(this.state.questions == null || this.state.questions == null){
      return(
        <Loader/>
      )
    }
    const question = this.state.questions[this.state.current_question];
    const opbtn = {color: 'white', backgroundColor: '#00bcd4', margin: '1em'}
    const comp_style_flags = { backgroundImage: 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)',
                               width: '100%', minHeight: '50em', fontFamily: 'system-ui'}

    const comp_style_places = { backgroundImage: 'linear-gradient(to top, #09203f 0%, #537895 100%)',
                                width: '100%', minHeight: '50em', fontFamily: 'system-ui'}

    return (
      <div style={this.props.location.gametype && this.props.location.gametype === "flags" ? comp_style_flags : comp_style_places}>
       <div style={{display: 'flex', textAlign: 'center', flexDirection: 'column'}}>

          {
            this.props.location.gametype === "flags" ?
              <h2 style={{color: 'white', marginTop: '1.5em', fontWeight: 600, fontSize: '3em'}}>Identify which country the flag belongs to</h2>
            :
              <h2 style={{color: 'white', marginTop: '1.5em', fontWeight: 600, fontSize: '3em'}}>Identify which country the place belongs to</h2>
          }

          <h3 className="score">
              <span style={{color: 'white'}}>Current score: </span>
              {this.state.score}
          </h3>

          {
            this.state.current_question >= this.state.questions.length ?
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
           question ?
              <Card style={{margin:'0 auto'}} elevation={10}>
                <CardActionArea style={{marginTop: '2em', minWidth: '45em'}}>
                  <CardMedia
                    style={{height: 140, width: 200, margin: '0 auto'}}
                    image={question.image}
                    title="Contemplative Reptile"/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Question {this.state.current_question}
                    </Typography>
                    {
                      this.state.mostrar_boton_next === true ?
                      <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: '18px'}}>
                        {
                          this.state.correct_selected === true ?
                           <span style={{color: '#07d607', fontWeight: 600}}>Correct! + {question_points}</span>
                          :
                           <span style={{color: 'red', fontWeight: 600}}>Incorrect!</span>
                        }
                      </Typography>
                      :
                      <Typography variant="body2" color="textSecondary" component="p">
                        {question.statement}
                      </Typography>
                    }

                  </CardContent>
                </CardActionArea>

                <CardActions>
                {
                  this.state.mostrar_boton_next === true ?
                  <div  style={{textAlign: 'center', margin: '0 auto'}}>
                   <Button size="small" color="primary" style={opbtn} onClick={()=>this.nextQuestion()}>
                     Next question
                   </Button>
                  </div>

                  :
                  <div  style={{textAlign: 'center', margin: '0 auto'}}>
                   <Button size="small" color="primary"  style={opbtn} onClick={()=>this.chooseAnswer(question, question.optionA)}>
                     {question.optionA}
                   </Button>
                   <Button size="small" color="primary"  style={opbtn} onClick={()=>this.chooseAnswer(question, question.optionB)}>
                     {question.optionB}
                   </Button>
                   <Button size="small" color="primary"  style={opbtn} onClick={()=>this.chooseAnswer(question, question.optionC)}>
                     {question.optionC}
                   </Button>
                   <Button size="small" color="primary"  style={opbtn}  onClick={()=>this.chooseAnswer(question, question.optionD)}>
                     {question.optionD}
                   </Button>
                  </div>
                }

                </CardActions>
            </Card>

            : null
          }

          {
            this.props.location.filter && this.props.location.filter !== 'global' ?
            <h3 style={{color: 'white', fontWeight: 600, fontSize: '2em'}}>Only questions from: {this.props.location.filter}</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
