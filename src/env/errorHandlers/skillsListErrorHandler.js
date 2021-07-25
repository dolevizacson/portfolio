import { functions, classes } from '../utils/access';

const { GeneralErrorHandlerMessagesObject } = classes;

const skillsListErrorsObject = new GeneralErrorHandlerMessagesObject();

export default function skillsListErrorHandler(error) {
  return functions.errorHandlers.generalErrorHandler(
    error,
    skillsListErrorsObject
  );
}
