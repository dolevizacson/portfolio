import { functions, classes } from '../utils/access';

const { GeneralErrorHandlerMessagesObject } = classes;

const projectErrorsObject = new GeneralErrorHandlerMessagesObject();

export default function projectsErrorHandler(error) {
  return functions.errorHandlers.generalErrorHandler(
    error,
    projectErrorsObject
  );
}
