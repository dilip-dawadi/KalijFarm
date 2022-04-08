import { combineReducers } from 'redux';
import Kalijs from './Kalijs'
import Auth from './Auth';
import About from './About';
export const reducers = combineReducers({ Kalijs, Auth, About });