import { services, constants, functions, types } from '../utils/access';

// types
const { projects: projectsTypes } = types;

// constants
const { projectsRoute } = constants;

// services
const { projectsService } = services;

// functions
const { reduxActions } = functions;

export const getActiveProjects = () =>
  reduxActions.getActiveItems(projectsTypes, projectsService);

export const getProjects = () =>
  reduxActions.getItems(projectsTypes, projectsService);

export const getProject = (id) =>
  reduxActions.getItem(projectsTypes, projectsService, id);

export const getActiveProject = (id) =>
  reduxActions.getActiveItem(projectsTypes, projectsService, id);

export const postProject = (project, ownProps) =>
  reduxActions.postItem(projectsTypes, projectsService, project, ownProps, {
    route: projectsRoute,
    withID: true,
  });

export const updateProject = (id, project, ownProps) =>
  reduxActions.updateItem(
    projectsTypes,
    projectsService,
    id,
    project,
    ownProps,
    {
      route: projectsRoute,
      withID: true,
    }
  );

export const toggleProject = (id) =>
  reduxActions.toggleItem(projectsTypes, projectsService, id);

export const deleteProject = (id, ownProps) =>
  reduxActions.deleteItem(projectsTypes, projectsService, id, ownProps, {
    route: projectsRoute,
  });
