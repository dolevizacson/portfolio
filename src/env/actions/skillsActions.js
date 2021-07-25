import { services, constants, functions, types } from '../utils/access';

// types
const { skills: skillsTypes } = types;

// constants
const { skillsRoute } = constants;

// services
const { skillsService } = services;

// functions
const { reduxActions } = functions;

export const getSkillsLists = () =>
  reduxActions.getItems(skillsTypes, skillsService);

export const getActiveSkillsLists = () =>
  reduxActions.getActiveItems(skillsTypes, skillsService);

export const getSkillsList = (id) =>
  reduxActions.getItem(skillsTypes, skillsService, id);

export const postSkillsList = (skillsList, ownProps) =>
  reduxActions.postItem(skillsTypes, skillsService, skillsList, ownProps, {
    route: skillsRoute,
  });

export const updateSkillsList = (id, skillsList, ownProps) =>
  reduxActions.updateItem(
    skillsTypes,
    skillsService,
    id,
    skillsList,
    ownProps,
    { route: skillsRoute }
  );

export const deleteSkillsList = (id, ownProps) =>
  reduxActions.deleteItem(skillsTypes, skillsService, id, ownProps, {
    route: skillsRoute,
  });

export const toggleSkillsList = (id) =>
  reduxActions.toggleItem(skillsTypes, skillsService, id);
