import { types } from '../utils/access';

// types
const { taskList } = types;

export const taskListreducer = (state = [], action) => {
  switch (action.type) {
    case taskList.readAllSuccess:
      return [...action.payload];
    case taskList.toggleSuccess:
      return state.map(blogPost => {
        return blogPost._id === action.payload._id ? action.payload : blogPost;
      });
    case taskList.deleteSuccess:
      return state.filter(blogPost => blogPost._id !== action.payload._id);
    default:
      return state;
  }
};
