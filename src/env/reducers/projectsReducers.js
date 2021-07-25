import { types, constants } from '../utils/access';

// constants
const { projectInitialState } = constants;

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

export const projectReducer = (state = projectInitialState, action) => {
  switch (action.type) {
    case projects.readSuccess:
    case projects.readActiveSuccess:
    case projects.toggleSuccess:
      return { ...action.payload };
    default:
      return state;
  }
};
