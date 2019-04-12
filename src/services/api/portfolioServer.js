import axios from 'axios';

import constant from '../../confing/constants';

export const serverHome = axios.create({
  baseURL: constant.server.baseUrl + constant.server.home,
});

export const serverSkills = axios.create({
  baseURL: constant.server.baseUrl + constant.server.skills,
});
