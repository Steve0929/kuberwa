import { URL } from "../data/server";
import axios from 'axios';
import logoutUser from '../actions/logoutUser';
import store from '../store'


function dispatchLogout(){
  store.dispatch({type:"logoutUser"});
}

export async function checkToken() {
  const token = localStorage.getItem('token');
  if(!token){
     console.log('No token on storage')
     return dispatchLogout();
  }
  console.log("cheking token ");
  const resp = await axios.post(URL, {
                query: `
                query {
                    validateToken(token: ${token.trim()}) {
                      valid
                    }
                  }
                `
              })

  console.log(resp)
  const valid = resp.data.data.validateToken.valid;
  if(valid == true){
     return true;
  }
  return false;
}
