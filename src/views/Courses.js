import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from "react-redux";
import {checkToken} from "../redux/common/checkToken";
import Typography from '@material-ui/core/Typography';
import LearnticLogo from '../assets/img/courses/learntic.png'
import axios from 'axios';

//const link = 'http://54.198.239.79:3001/interface/all-courses';
const link = 'http://34.198.84.251:3001/interface/all-courses';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  table: {
    minWidth: 650,
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
    marginTop:'20px'
  },
});

const Courses = (props) => {
  const classes = useStyles();
  const [rows, setRows] = useState(0);
  //var rows = [];

  async function getCourses() {
    try {
      const isValid = await checkToken();
      if(isValid === false){
         return;
      }
      const course_object = await axios.get(link)
      console.log(course_object.data.data[0].split(', '))
      if (course_object.status === 200) {
        return setRows(course_object.data.data[0].split(', '));
      } else {
        alert("Ups! Something went wrong");
      }
    } catch(err) {
      console.error(err)
    }
  };

  useEffect(() => {
    getCourses()
    console.log(rows);
  }, [] );

  var i = 1;

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h3" style={{display: 'flex', justifyContent: 'center', padding: 15}}>
          <img src={LearnticLogo} alt="LearnticLogo" width="100" height="100"/><div style={{marginTop: '1em'}}>Courses</div>
        </Typography>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell aling="center">ID</StyledTableCell>
            <StyledTableCell align="left">Course</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows ? rows.map(element =>
            <StyledTableRow key= {i}>
            <StyledTableCell component="th" scope="row">
              {i++}
            </StyledTableCell>
            <StyledTableCell align="left">{element}</StyledTableCell>
          </StyledTableRow>) : null}
        </TableBody>
      </Table>
    </div>
  );
}

const mapStateToProps = (state) => { //get user in the store
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
