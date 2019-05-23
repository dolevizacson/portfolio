import axios from 'axios';

import constant from '../confing/constants';

export const serverSkills = axios.create({
  baseURL: constant.server.baseUrl + constant.server.skills,
});

export const serverAuth = axios.create({
  baseURL: constant.server.baseUrl + constant.server.auth,
});
