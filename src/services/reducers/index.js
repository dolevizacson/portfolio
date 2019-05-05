import { getSkillsListContentReducer } from './skillsContentReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  skillsListContent: getSkillsListContentReducer,
});
