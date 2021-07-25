import { classes, constants, errorHandlers } from '../utils/access';

const { Crud } = classes;

class TaskListService extends Crud {
  constructor() {
    super(constants.server.taskList, errorHandlers.taskListErrorHandler);
  }
}

export default new TaskListService();
