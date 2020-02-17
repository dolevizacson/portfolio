import axios from 'axios';
import * as rax from 'retry-axios';
import { constants } from '../utils/access';

rax.attach();

axios.defaults.baseURL = constants.baseURL;
axios.defaults.timeout = 2000;
axios.defaults.withCredentials = true;
axios.defaults.raxConfig = {
  noResponseRetries: 3,
  retryDelay: 500,
  httpMethodsToRetry: ['GET'],
};

export default axios;
