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

export default {
  getBlogPosts,
};
