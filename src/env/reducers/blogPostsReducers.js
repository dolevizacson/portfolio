import { blog } from '../types/types';

export const blogPostsReducer = (state = [], action) => {
  switch (action.type) {
    case blog.readAllSuccess:
      return [...action.payload];
    default:
      return state;
  }
};
