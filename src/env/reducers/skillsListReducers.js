import { skills } from '../types/types';

export const skillsListReducer = (state = [], action) => {
  switch (action.type) {
    case skills.readAllSuccess:
      return [...action.payload];
    default:
      return state;
  }
};
