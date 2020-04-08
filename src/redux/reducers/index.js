import { combineReducers } from 'redux';
import activityReducer from './activity';
import nameReducer from './name';
import addCatReducer from './cats';

export default combineReducers({ cats: addCatReducer, activity: activityReducer, name: nameReducer });
