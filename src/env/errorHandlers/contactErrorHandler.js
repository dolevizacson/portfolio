import { functions, classes } from '../utils/access';

const { GeneralErrorHandlerMessagesObject } = classes;

const contactErrorsObject = new GeneralErrorHandlerMessagesObject();

export default function contactErrorHandler(error) {
  return functions.errorHandlers.generalErrorHandler(
    error,
    contactErrorsObject
  );
}
