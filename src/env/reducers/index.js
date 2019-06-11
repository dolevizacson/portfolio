import { combineReducers } from 'redux';

// reducers
import { skillsListReducer } from './skillsListReducers';
import { authReducer } from './authReducers';
import {
  blogPostsReducer,
  currentyWritenBlogPostsReducer,
} from './blogPostsReducers';
import { loadingReducer } from './loadingReducer';
import { errorsReducer } from './errorsReducer';

export default combineReducers({
  skillsList: skillsListReducer,
  blogPostsList: blogPostsReducer,
  blogPost: currentyWritenBlogPostsReducer,
  isLoggedIn: authReducer,
  isLoading: loadingReducer,
  errors: errorsReducer,
});
