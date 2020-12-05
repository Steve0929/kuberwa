import { createStore,  combineReducers } from 'redux';
import user from './reducers/user';

const reducer =  combineReducers({
  user,
});

const store = createStore(reducer);

console.log(store.getState())

export default store;