import { functions, classes } from '../utils/access';

const { GeneralErrorHandlerMessagesObject } = classes;

const taskListErrorsObject = new GeneralErrorHandlerMessagesObject();

export default function taskListErrorHandler(error) {
  return functions.errorHandlers.generalErrorHandler(
    error,
    taskListErrorsObject
  );
}
