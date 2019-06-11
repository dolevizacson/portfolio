import { blog } from '../types/types';
import { services, constants } from '../utils/access';

// services
const { blogService } = services;

// constants
const { blogPostInitialState } = constants;

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

// put blog post
const updateBlogPost = (id, post) => async (dispatch, getState) => {
  dispatch({ type: blog.updateRequest });
  let response;
  try {
    response = await blogService.updatePost(id, post);
    dispatch({
      type: blog.updateSuccess,
      payload: response,
    });
  } catch (err) {
    dispatch({ type: blog.updateFail, payload: err });
  }
};

// delete blog post
const deleteBlogPost = id => async (dispatch, getState) => {
  dispatch({ type: blog.deleteRequest });
  let response;
  try {
    response = await blogService.deletePost(id);
    dispatch({
      type: blog.deleteSuccess,
      payload: response,
    });
  } catch (err) {
    dispatch({ type: blog.deleteFail, payload: err });
  }
};

// change blog post
const changeBlogPost = newBlogPost => async (dispatch, getState) => {
  dispatch({
    type: blog.change,
    payload: newBlogPost,
  });
};

// reset blog post
const resetBlogPost = () => async (dispatch, getState) => {
  dispatch({
    type: blog.reset,
    payload: blogPostInitialState,
  });
};

export default {
  getBlogPosts,
  postBlogPost,
  updateBlogPost,
  deleteBlogPost,
  changeBlogPost,
  resetBlogPost,
};
