import { combineReducers } from 'redux';
import types from '../types/types';

// reducers
import { skillsListsReducer, skillsListReducer } from './skillsListReducers';
import { authReducer } from './authReducers';
import { blogPostsReducer, blogPostReducer } from './blogPostsReducers';
import { loadingReducer } from './loadingReducer';
import { errorsReducer } from './errorsReducer';
import { taskListReducer, taskReducer } from './taskListReducers';
import { projectsReducer, projectReducer } from './projectsReducers';
import { initReducer } from './initReducer';
import { contactReducer } from './contactReducers';

export default combineReducers({
  [types.projects.stateName]: projectsReducer,
  project: projectReducer,
  [types.skills.stateName]: skillsListsReducer,
  skillsList: skillsListReducer,
  [types.taskList.stateName]: taskListReducer,
  task: taskReducer,
  [types.blog.stateName]: blogPostsReducer,
  blogPost: blogPostReducer,
  messageSent: contactReducer,
  isLoggedIn: authReducer,
  isLoading: loadingReducer,
  errors: errorsReducer,
  init: initReducer,
});
