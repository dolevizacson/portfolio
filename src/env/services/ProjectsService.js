import { classes, constants, errorHandlers } from '../utils/access';

const { Crud } = classes;

class ProjectsService extends Crud {
  constructor() {
    super(
      `${constants.server.baseUrl + constants.server.projects}`,
      errorHandlers.projectsErrorHandler
    );
  }
}

export default new ProjectsService();
