import { types, constants } from '../utils/access';

// constants
const { skillsListInitialState } = constants;

// types
const { skills } = types;

export const skillsListsReducer = (state = [], action) => {
  switch (action.type) {
    case skills.readAllActiveSuccess:
    case skills.readAllSuccess:
      return [...action.payload];
    case skills.toggleSuccess:
      return state.map((skillsList) =>
        skillsList._id === action.payload._id ? action.payload : skillsList
      );
    case skills.deleteSuccess:
      return state.filter(
        (skillsList) => skillsList._id !== action.payload._id
      );
    default:
      return state;
  }
};

export const skillsListReducer = (state = skillsListInitialState, action) => {
  switch (action.type) {
    case skills.readSuccess:
      return { ...action.payload };
    default:
      return state;
  }
};
