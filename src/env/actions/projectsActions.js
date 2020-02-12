import { services, constants, functions, types } from '../utils/access';

// types
const { projects: projectsTypes } = types;

// constants
const { projectsRoute } = constants;

// services
const { projectsService } = services;

// functions
const { reduxActions } = functions;

export default {
  getActiveProjects: () =>
    reduxActions.getActiveItems(projectsTypes, projectsService),
  getProjects: () => reduxActions.getItems(projectsTypes, projectsService),
  getProject: id => reduxActions.getItem(id, projectsTypes, projectsService),
  postProject: (project, ownProps) =>
    reduxActions.postItem(
      project,
      ownProps,
      projectsTypes,
      projectsService,
      projectsRoute,
      true
    ),
  updateProject: (id, project, ownProps) =>
    reduxActions.updateItem(
      id,
      project,
      ownProps,
      projectsTypes,
      projectsService,
      projectsRoute,
      true
    ),
  toggleProject: id =>
    reduxActions.toggleItem(id, projectsTypes, projectsService),
  deleteProject: (id, ownProps) =>
    reduxActions.deleteItem(
      id,
      ownProps,
      projectsTypes,
      projectsService,
      projectsRoute
    ),
};
