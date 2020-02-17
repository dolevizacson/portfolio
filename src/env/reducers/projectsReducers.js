import { types } from '../utils/access';

// types
const { projects } = types;

export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case projects.readAllActiveSuccess:
    case projects.readAllSuccess:
      return [...action.payload];
    default:
      return state;
  }
};

export const projectReducer = (state = {}, action) => {
  switch (action.type) {
    case projects.readSuccess:
    case projects.toggleSuccess:
      return { ...action.payload };
    default:
      return state;
  }
};
