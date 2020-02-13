import { functions } from '../utils/access';

const { localStorageErrorHandler } = functions;

export default error => localStorageErrorHandler(error);
