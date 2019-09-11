import { taskList } from '../types/types';

export const taskListreducer = (state = [], action) => {
  switch (action.type) {
    case taskList.readAllSuccess:
      return [...action.payload];
    case taskList.createSuccess:
      return [...state, action.payload];
    case taskList.toggleSuccess:
    case taskList.updateSuccess:
      return state.map(blogPost => {
        return blogPost._id === action.payload._id ? action.payload : blogPost;
      });
    case taskList.deleteSuccess:
      return state.filter(blogPost => blogPost._id !== action.payload._id);
    default:
      return state;
  }
};
