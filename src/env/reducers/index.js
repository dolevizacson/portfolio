import { combineReducers } from 'redux';

// reducers
import { skillsListReducer } from './skillsListReducers';
import { authReducer } from './authReducers';
import { blogPostsReducer } from './blogPostsReducers';
import { loadingReducer } from './loadingReducer';
import { errorsReducer } from './errorsReducer';
import { taskListreducer } from './taskListReducers';

export default combineReducers({
  skillsList: skillsListReducer,
  blogPostsList: blogPostsReducer,
  isLoggedIn: authReducer,
  isLoading: loadingReducer,
  errors: errorsReducer,
  taskList: taskListreducer,
});
