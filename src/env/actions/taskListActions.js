import { services, constants, functions, types } from '../utils/access';

// types
const { taskList: taskListTypes } = types;

// constants
const { tasksRoute } = constants;

// services
const { taskListService } = services;

// functions
const { reduxActions } = functions;

export const getTaskList = () =>
  reduxActions.getItems(taskListTypes, taskListService);

export const getActiveTaskList = () =>
  reduxActions.getActiveItems(taskListTypes, taskListService);

export const getTask = (id) =>
  reduxActions.getItem(taskListTypes, taskListService, id);

export const postTask = (task, ownProps) =>
  reduxActions.postItem(taskListTypes, taskListService, task, ownProps, {
    route: tasksRoute,
  });

export const updateTask = (id, task, ownProps) =>
  reduxActions.updateItem(taskListTypes, taskListService, id, task, ownProps, {
    route: tasksRoute,
  });

export const toggleTask = (id) =>
  reduxActions.toggleItem(taskListTypes, taskListService, id);

export const deleteTask = (id, ownProps) =>
  reduxActions.deleteItem(taskListTypes, taskListService, id, ownProps, {
    route: tasksRoute,
  });
