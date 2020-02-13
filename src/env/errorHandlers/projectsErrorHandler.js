import { functions, classes } from '../utils/access';

const { GeneralErrorHandlerMessagesObject } = classes;

const projectErrorsObject = new GeneralErrorHandlerMessagesObject();

export default error =>
  functions.errorHandlers.generalErrorHandler(error, projectErrorsObject);
