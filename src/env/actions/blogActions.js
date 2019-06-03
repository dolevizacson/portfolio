import { blog } from '../types/types';
import { services } from '../utils/access';

const blogService = services.blogService;

// get blog posts
const getBlogPosts = () => async (dispatch, getState) => {
  dispatch({ type: blog.readAllRequest });
  let response;
  try {
    response = await blogService.getPosts();
    dispatch({
      type: blog.readAllSuccess,
      payload: response,
    });
  } catch (err) {
    dispatch({ type: blog.readAllFail, payload: err });
  }
};

// post blog post
const postBlogPost = post => async (dispatch, getState) => {
  dispatch({ type: blog.createRequest });
  let response;
  try {
    response = await blogService.postPost(post);
    dispatch({
      type: blog.createSuccess,
      payload: response,
    });
  } catch (err) {
    dispatch({ type: blog.createFail, payload: err });
  }
};

export default {
  getBlogPosts,
  postBlogPost,
};
