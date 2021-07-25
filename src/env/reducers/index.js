import { combineReducers } from 'redux';

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
  projectsList: projectsReducer,
  project: projectReducer,
  skillsLists: skillsListsReducer,
  skillsList: skillsListReducer,
  taskList: taskListReducer,
  task: taskReducer,
  blogPostsList: blogPostsReducer,
  blogPost: blogPostReducer,
  messageSent: contactReducer,
  isLoggedIn: authReducer,
  isLoading: loadingReducer,
  errors: errorsReducer,
  init: initReducer,
});
