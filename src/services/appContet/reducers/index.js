import {
  loadAboutContentReducer,
  loadMotoContentReducer,
} from './homeContentReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  loadAboutContentReducer,
  loadMotoContentReducer,
});
