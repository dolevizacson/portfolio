import {
  loadAboutContentReducer,
  loadMotoContentReducer,
} from './homeContentReducers';
import { loadSkillsListContent } from './skillsContentReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  loadAboutContentReducer,
  loadMotoContentReducer,
  loadSkillsListContent,
});
