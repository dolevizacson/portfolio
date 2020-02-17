import { types } from '../utils/access';

// types
const { blog } = types;

export const blogPostsReducer = (state = [], action) => {
  switch (action.type) {
    case blog.readAllActiveSuccess:
    case blog.readAllSuccess:
      return [...action.payload];
    default:
      return state;
  }
};

export const blogPostReducer = (state = {}, action) => {
  switch (action.type) {
    case blog.readSuccess:
    case blog.toggleSuccess:
      return { ...action.payload };
    default:
      return state;
  }
};
