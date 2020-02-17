import { combineReducers } from 'redux';

// reducers
import { skillsListReducer } from './skillsListReducers';
import { authReducer } from './authReducers';
import { blogPostsReducer, blogPostReducer } from './blogPostsReducers';
import { loadingReducer } from './loadingReducer';
import { errorsReducer } from './errorsReducer';
import { taskListreducer } from './taskListReducers';
import { projectsReducer, projectReducer } from './projectsReducers';
import { initReducer } from './initReducer';

export default combineReducers({
  skillsList: skillsListReducer,
  blogPostsList: blogPostsReducer,
  blogPost: blogPostReducer,
  isLoggedIn: authReducer,
  isLoading: loadingReducer,
  errors: errorsReducer,
  taskList: taskListreducer,
  projectsList: projectsReducer,
  project: projectReducer,
  init: initReducer,
});
