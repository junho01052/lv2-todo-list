import { createStore } from 'redux';
import { combineReducers } from 'redux';
import addItem from '../modules/addItem';

const rootReducer = combineReducers({
  addItem,
});

const store = createStore(rootReducer);

export default store;
