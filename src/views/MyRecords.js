// based on https://material-ui.com/getting-started/templates/sign-in-side/

import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";

import {checkToken} from "../redux/common/checkToken";
import axios from 'axios';
import { URL } from "../redux/data/server";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const MyRecords = (props) => {
  const classes = useStyles();
  const [rows, setRows] = useState(0);
  //var rows = [];

  async function getScores() {
    var gametype = 1;
    if(props.location.gametype){
       gametype = props.location.gametype;
    }
    var username = props.user.username;

    try {
      const isValid = await checkToken();
      console.log(isValid)
      if(isValid == false){
         return;
      }
      const score_object = await axios.post(URL, {
        query: `
        query{
            bestScoreByUserandGame(ID_User: "${username}", ID_Game: "${gametype}"){
               ID
               ID_User
               Score
               DatePlayed
               ID_Game

            }
          }


       `
      })
      console.log(score_object)
      if (score_object.status === 200) {
        return setRows(score_object.data.data.bestScoreByUserandGame);
      } else {
        alert("Ups! Something went wrong");
      }
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getScores()
    console.log(rows);
  }, [] )


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell align="right">Score</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Game</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows ? rows.map(element =>
            <StyledTableRow key={element.ID}>
            <StyledTableCell component="th" scope="row">
              {element.ID}
            </StyledTableCell>
            <StyledTableCell align="right">{element.ID_User}</StyledTableCell>
            <StyledTableCell align="right">{element.Score-1}</StyledTableCell>
            <StyledTableCell align="right">{element.DatePlayed}</StyledTableCell>

            {element.ID_Game == "1" ?   <StyledTableCell align="right">Recognize the location</StyledTableCell> : null}
            {element.ID_Game == "2" ?   <StyledTableCell align="right">Recognize the flag</StyledTableCell> : null}
            {element.ID_Game == "3" ?   <StyledTableCell align="right">Recognize the place</StyledTableCell> : null}


          </StyledTableRow>) : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state) => { //get user in the store
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyRecords);
