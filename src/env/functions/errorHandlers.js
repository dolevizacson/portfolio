import httpStatus from 'http-status-codes';
import { errors } from '../utils/access';

const {
  UnAuthorizedError,
  InternalServerError,
  NoResponseError,
  BadRequestObjectError,
  LocalStorageError,
} = errors;

export default {
  generalErrorHandler: (error, errorMessagesObject) => {
    if (error.response) {
      switch (error.response.status) {
        case httpStatus.UNAUTHORIZED:
          throw new UnAuthorizedError(errorMessagesObject.unAuthorizedError);
        default:
          throw new InternalServerError(
            errorMessagesObject.internalServerError
          );
      }
    } else if (error.request) {
      throw new NoResponseError(errorMessagesObject.noResponseError);
    } else {
      throw new BadRequestObjectError(
        errorMessagesObject.badRequestObjectError
      );
    }
  },
  localStorageErrorHandler: (error, message) => {
    if (message) {
      throw new LocalStorageError(message);
    } else if (error.message) {
      throw new LocalStorageError(error.message);
    } else {
      throw new LocalStorageError('Local storage error');
    }
  },
};
