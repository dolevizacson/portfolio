import { functions, classes } from '../utils/access';

const { GeneralErrorHandlerMessagesObject } = classes;

const taskListErrorsObject = new GeneralErrorHandlerMessagesObject();

export default error =>
  functions.errorHandlers.generalErrorHandler(error, taskListErrorsObject);
