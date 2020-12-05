import {type as loginUserType} from '../actions/loginUser';
import {type as updateUserType} from '../actions/updateUser';
import {type as logOutUserType} from '../actions/logoutUser';

const defaultState = JSON.parse(localStorage.getItem('user'));

function reducer(state = defaultState, action) {
  switch(action.type) {
    case loginUserType: {
      console.log(action.payload.user_object);
      localStorage.setItem('user', JSON.stringify(action.payload.user_object));
      localStorage.setItem('token', JSON.stringify(action.payload.user_object.token));
      return state = action.payload.user_object; //se establece en el estado el objeto del user ya logeado
    }
    case updateUserType: {
      console.log(action);
      localStorage.setItem('user', JSON.stringify(action.payload.user_object));
      return state = action.payload.user_object;
    }
    case logOutUserType:{
      console.log("Log out user");
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      return state = null;
    }
    default:
      return state;
  };
};

export default reducer;
