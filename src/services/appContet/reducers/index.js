import { loadHomeContentReducer } from './homeContentReducers';
import { loadSkillsListContentReducer } from './skillsContentReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  loadHomeContentReducer,
  loadSkillsListContentReducer,
});
