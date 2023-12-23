// reducers/index.js
import { combineReducers } from 'redux';
import cartReducer from './counterReducer';

export default combineReducers({
  counter: cartReducer
});
