import { services, constants, functions, types } from '../utils/access';

// types
const { skills: skillsTypes } = types;

// constants
const { skillsRoute } = constants;

// services
const { skillsService } = services;

// functions
const { reduxActions } = functions;

export default {
  getSkillsLists: () => reduxActions.getItems(skillsTypes, skillsService),
  postSkillsList: (skillsList, ownProps) =>
    reduxActions.postItem(
      skillsList,
      ownProps,
      skillsTypes,
      skillsService,
      skillsRoute
    ),
  updateSkillsList: (id, skillsList, ownProps) =>
    reduxActions.updateItem(
      id,
      skillsList,
      ownProps,
      skillsTypes,
      skillsService,
      skillsRoute
    ),
  deleteSkillsList: (id, ownProps) =>
    reduxActions.deleteItem(
      id,
      ownProps,
      skillsTypes,
      skillsService,
      skillsRoute
    ),
};
