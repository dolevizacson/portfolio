import { functions, classes } from '../utils/access';

const { GeneralErrorHandlerMessagesObject } = classes;

const skillsListErrorsObject = new GeneralErrorHandlerMessagesObject();

export default error =>
  functions.errorHandlers.generalErrorHandler(error, skillsListErrorsObject);
