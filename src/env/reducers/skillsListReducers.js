import { types } from '../utils/access';

// types
const { skills } = types;

export const skillsListReducer = (state = [], action) => {
  switch (action.type) {
    case skills.readAllSuccess:
      return [...action.payload];
    case skills.deleteSuccess:
      return state.filter(skillsList => skillsList._id !== action.payload._id);
    default:
      return state;
  }
};
