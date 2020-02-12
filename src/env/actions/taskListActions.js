import { services, constants, functions, types } from '../utils/access';

// types
const { taskList: taskListTypes } = types;

// constants
const { projectsRoute } = constants;

// services
const { taskListService } = services;

// functions
const { reduxActions } = functions;

export default {
  getTaskList: () => reduxActions.getItems(taskListTypes, taskListService),
  postTask: (task, ownProps) =>
    reduxActions.postItem(
      task,
      ownProps,
      taskListTypes,
      taskListService,
      projectsRoute
    ),
  updateTask: (id, task, ownProps) =>
    reduxActions.updateItem(
      id,
      task,
      ownProps,
      taskListTypes,
      taskListService,
      projectsRoute
    ),
  toggleTask: id => reduxActions.toggleItem(id, taskListTypes, taskListService),
  deleteTask: (id, ownProps) =>
    reduxActions.deleteItem(
      id,
      ownProps,
      taskListTypes,
      taskListService,
      projectsRoute
    ),
};
