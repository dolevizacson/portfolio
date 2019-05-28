import { blog } from '../types/types';
import { services } from '../utils/access';

const blogService = services.blogService;

// get blog posts
const getBlogPosts = () => async (dispatch, getState) => {
  let response;
  try {
    response = await blogService.getPosts();
  } catch (err) {
    console.log(err);
  }
  dispatch({
    type: blog.readAll,
    payload: response,
  });
};

export default {
  getBlogPosts,
};
