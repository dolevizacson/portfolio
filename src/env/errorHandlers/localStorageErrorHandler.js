import { functions } from '../utils/access';

const { localStorageErrorHandler: errorHandler } = functions;

export default function localStorageErrorHandler(error) {
  return errorHandler(error);
}
