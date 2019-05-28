import { combineReducers } from 'redux';

// reducers
import { getSkillsListReducer } from './skillsListReducers';
import { authReducer } from './authReducers';
import { blogPostsReducer } from './blogPostsReducers';

export default combineReducers({
  skillsList: getSkillsListReducer,
  isLoggedIn: authReducer,
  blogPostsList: blogPostsReducer,
});
