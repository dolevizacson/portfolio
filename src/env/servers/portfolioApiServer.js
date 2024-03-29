import axios from 'axios';
import * as rax from 'retry-axios';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();

rax.attach();

axios.defaults.baseURL = env.REACT_APP_BASE_URL;
axios.defaults.timeout = 2000;
axios.defaults.withCredentials = true;
axios.defaults.raxConfig = {
  noResponseRetries: 3,
  retryDelay: 500,
  httpMethodsToRetry: ['GET'],
};

export default axios;
