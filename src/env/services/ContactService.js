import { classes, constants, errorHandlers } from '../utils/access';

const { Crud } = classes;

class ContactService extends Crud {
  constructor() {
    super(
      `${constants.server.baseUrl + constants.server.contact}`,
      errorHandlers.contactErrorHandler
    );
  }
}

export default new ContactService();
