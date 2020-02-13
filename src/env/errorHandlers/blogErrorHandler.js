import { functions, classes } from '../utils/access';

const { GeneralErrorHandlerMessagesObject } = classes;

const blogErrorsObject = new GeneralErrorHandlerMessagesObject();

export default error =>
  functions.errorHandlers.generalErrorHandler(error, blogErrorsObject);
