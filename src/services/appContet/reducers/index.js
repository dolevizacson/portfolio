import {
  loadAboutContentReducer,
  loadMotoContentReducer,
  loadTaskListContentReducer,
} from './homeContentReducers';
import { loadSkillsListContentReducer } from './skillsContentReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  loadAboutContentReducer,
  loadMotoContentReducer,
  loadTaskListContentReducer,
  loadSkillsListContentReducer,
});
