import { combineReducers } from 'redux';
import Kalijs from './Kalijs'
import Auth from './Auth';
import About from './About';
import Room from './Room';
import Gallery from './gallery';
export const reducers = combineReducers({ Kalijs, Auth, About, Room, Gallery });