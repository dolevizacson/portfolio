import { errors } from '../utils/access';

const { LocalStorageError } = errors;

const localStorageErrorHandler = error => {
  if (error.message) {
    throw new LocalStorageError(error.message);
  } else {
    throw new LocalStorageError('Local storage error');
  }
};

export default localStorageErrorHandler;
