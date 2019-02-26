import {
  loadAboutContentReducer,
  loadMotoContentReducer,
  loadCurentlyWorkingContentReducer,
} from './homeContentReducers';
import { loadSkillsListContentReducer } from './skillsContentReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  about: loadAboutContentReducer,
  moto: loadMotoContentReducer,
  currentlyWorking: loadCurentlyWorkingContentReducer,
  skillsList: loadSkillsListContentReducer,
});
