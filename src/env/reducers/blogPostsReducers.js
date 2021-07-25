import { types, constants } from '../utils/access';

// constants
const { blogPostInitialState } = constants;

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

export const blogPostReducer = (state = blogPostInitialState, action) => {
  switch (action.type) {
    case blog.readSuccess:
    case blog.readActiveSuccess:
    case blog.toggleSuccess:
      return { ...action.payload };
    default:
      return state;
  }
};
