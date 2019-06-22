import { skills } from '../types/types';

export const skillsListReducer = (state = [], action) => {
  switch (action.type) {
    case skills.readAllSuccess:
      return [...action.payload];
    case skills.createSuccess:
      return [...state, action.payload];
    case skills.updateSuccess:
      return state.map(skillslist => {
        return skillslist._id === action.payload._id
          ? action.payload
          : skillslist;
      });
    case skills.deleteSuccess:
      return state.filter(skillsList => skillsList._id !== action.payload._id);
    default:
      return state;
  }
};
