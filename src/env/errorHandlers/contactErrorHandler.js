import { functions, classes } from '../utils/access';

const { GeneralErrorHandlerMessagesObject } = classes;

const contactErrorsObject = new GeneralErrorHandlerMessagesObject();

export default error =>
  functions.errorHandlers.generalErrorHandler(error, contactErrorsObject);
