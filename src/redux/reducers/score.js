import axios from 'axios';
import { URL } from "../data/server";
import {type as createscoreType} from "../actions/createscore"

const defaultState = null;

function reducer(state = defaultState, action) {
  switch(action.type) {
    case createscoreType: {
      console.log(action)
       return state = insert_score(action.payload.id_user, action.payload.score, action.payload.date_played, action.payload.id_game)
    }
    default:
      return state;
  };
};


export default reducer;