import { functions, classes } from '../utils/access';

const { GeneralErrorHandlerMessagesObject } = classes;

const authErrorsObject = new GeneralErrorHandlerMessagesObject();

export default function authErrorHandler(error) {
  return functions.errorHandlers.generalErrorHandler(error, authErrorsObject);
}
