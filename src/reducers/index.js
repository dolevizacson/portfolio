import { getSkillsListContentReducer } from './skillsContentReducers';
import { authReducer } from './authReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  skillsListContent: getSkillsListContentReducer,
  isLoggedIn: authReducer,
});
