import { functions, classes } from '../utils/access';

const { GeneralErrorHandlerMessagesObject } = classes;

const authErrorsObject = new GeneralErrorHandlerMessagesObject();

export default error =>
  functions.errorHandlers.generalErrorHandler(error, authErrorsObject);
