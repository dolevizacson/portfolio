import content from '../../../confings/appContent';

const { skills } = content;

export const loadSkillsListContentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_SKILLS_LIST_CONTENT':
      return {
        ...state,
        skillsListContent: {
          skillsList: action.payload.skillList,
          isHidden: action.payload.isHidden,
        },
      };
    default:
      return { skillsListContent: skills };
  }
};
