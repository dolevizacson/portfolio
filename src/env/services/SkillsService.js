import { classes, constants, errorHandlers } from '../utils/access';

const { Crud } = classes;

class SkillsService extends Crud {
  constructor() {
    super(constants.server.skills, errorHandlers.skillsListErrorHandler);
  }
}

export default new SkillsService();
