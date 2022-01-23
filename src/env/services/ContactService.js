import { classes, constants, errorHandlers } from '../utils/access';

const { Crud } = classes;

class ContactService extends Crud {
  constructor() {
    super(constants.server.contact, errorHandlers.contactErrorHandler, 5000);
  }
}

export default new ContactService();
