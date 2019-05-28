import { skills } from '../types/types';

export const getSkillsListReducer = (state = [], action) => {
  switch (action.type) {
    case skills.readAll:
      return [...action.payload];
    default:
      return state;
  }
};
