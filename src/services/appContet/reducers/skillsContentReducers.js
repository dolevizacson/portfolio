import content from '../../../confings/appContent';

const { skills } = content;

export const loadSkillsListContentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_SKILLS_LIST_CONTENT':
      return { ...state, skillsContent: skills };
    default:
      return { skillsContent: skills };
  }
};
