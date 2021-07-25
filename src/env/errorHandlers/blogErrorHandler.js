import { functions, classes } from '../utils/access';

const { GeneralErrorHandlerMessagesObject } = classes;

const blogErrorsObject = new GeneralErrorHandlerMessagesObject();

export default function blogErrorHandler(error) {
  return functions.errorHandlers.generalErrorHandler(error, blogErrorsObject);
}
