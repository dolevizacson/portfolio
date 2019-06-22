import axios from 'axios';
import * as rax from 'retry-axios';
import { constants } from '../utils/access';

rax.attach();

axios.defaults.baseURL = constants.baseURL;
axios.defaults.timeout = 1000;
axios.defaults.withCredentials = true;
axios.defaults.raxConfig = {
  noResponseRetries: 3,
  retryDelay: 1000,
  httpMethodsToRetry: ['GET'],
};

export default axios;
