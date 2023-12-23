// store.js
import { createStore } from 'redux';
import rootReducer from './Index';

const store = createStore(rootReducer);

export default store;
