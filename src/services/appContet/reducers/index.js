import {
  loadAboutContentReducer,
  loadMotoContentReducer,
} from './homeContentReducers';
import { loadSkillsListContentReducer } from './skillsContentReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  about: loadAboutContentReducer,
  moto: loadMotoContentReducer,
  skillsList: loadSkillsListContentReducer,
});
