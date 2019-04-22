import {
  getAboutContentReducer,
  getMotoContentReducer,
  getCurentlyWorkingContentReducer,
} from './homeContentReducers';
import { getSkillsListContentReducer } from './skillsContentReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  aboutContent: getAboutContentReducer,
  motoContent: getMotoContentReducer,
  currentlyWorkingContent: getCurentlyWorkingContentReducer,
  skillsListContent: getSkillsListContentReducer,
});
