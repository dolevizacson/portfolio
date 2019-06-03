import axios from 'axios';
import { constants } from '../utils/access';

axios.defaults.baseURL = constants.baseURL;
axios.defaults.timeout = 2000;
axios.defaults.withCredentials = true;

export default axios;
