import { blog } from '../types/types';

export const blogPostsReducer = (state = [], action) => {
  switch (action.type) {
    case blog.readAllSuccess:
      return [...action.payload];
    case blog.createSuccess:
      return [...state, ...action.payload];
    case blog.deleteSuccess:
      return state.filter(blogPost => blogPost._id !== action.payload._id);
    default:
      return state;
  }
};
