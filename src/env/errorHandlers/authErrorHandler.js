import httpStatus from 'http-status-codes';
import { errors } from '../utils/access';

const {
  UnAuthorizedError,
  InternalServerError,
  NoResponseError,
  BadRequestObjectError,
} = errors;

const authErrorHandler = error => {
  if (error.response) {
    switch (error.response.status) {
      case httpStatus.UNAUTHORIZED:
        throw new UnAuthorizedError(`${error.name} : Unauthorized`);
      default:
        throw new InternalServerError(`${error.name} : Internal server error`);
    }
  } else if (error.request) {
    throw new NoResponseError(`${error.name} : No response from the server`);
  } else {
    throw new BadRequestObjectError(`${error.name} : Request not sent`);
  }
};

export default authErrorHandler;
