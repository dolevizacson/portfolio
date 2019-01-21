import content from '../../../confings/appContent';

const skills = content.skills;

export const loadSkillsListContent = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_SKILLS_LIST_CONTENT':
      return { ...state, skillsListContent: action.payload };
    default:
      return { skillsListContent: skills };
  }
};
