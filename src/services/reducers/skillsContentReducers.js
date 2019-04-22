import { skills } from '../../confing/types';

export const getSkillsListContentReducer = (state = {}, action) => {
  switch (action.type) {
    case skills.skillsList:
      return { ...state, content: action.payload };
    default:
      return state;
  }
};
