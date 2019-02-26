import { skills } from '../../../confings/types';

export const loadSkillsListContentReducer = (state = {}, action) => {
  switch (action.type) {
    case skills.skillsList:
      return { ...state, skillsListContent: action.payload };
    default:
      return state;
  }
};
