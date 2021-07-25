import { types, constants } from '../utils/access';

//constants
const { taskInitialState } = constants;

// types
const { taskList } = types;

export const taskListReducer = (state = [], action) => {
  switch (action.type) {
    case taskList.readAllSuccess:
    case taskList.readAllActiveSuccess:
      return [...action.payload];
    case taskList.updateSuccess:
    case taskList.toggleSuccess:
      return state.map((task) => {
        return task._id === action.payload._id ? action.payload : task;
      });
    case taskList.deleteSuccess:
      return state.filter((blogPost) => blogPost._id !== action.payload._id);
    default:
      return state;
  }
};

export const taskReducer = (state = taskInitialState, action) => {
  switch (action.type) {
    case taskList.readSuccess:
      return { ...action.payload };
    default:
      return state;
  }
};
