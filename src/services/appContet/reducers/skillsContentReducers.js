import content from '../../../confings/appContent';

const { skills } = content;

export const loadSkillsListContentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_SKILLS_LIST_CONTENT':
      return { ...state, skillsContent: skills };
    case 'LOAD_ONE_SKILLS_LIST':
      return {
        ...state,
        skillsContent: {
          skillsList: action.payload.skillList,
          isHidden: action.payload.isHidden,
        },
      };
    default:
      return { skillsContent: skills };
  }
};
