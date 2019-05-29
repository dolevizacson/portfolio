import axios from 'axios';
import httpStatus from 'http-status-codes';

import { constants } from '../utils/access';

class AuthService {
  constructor() {
    this.serverAuth = axios.create({
      baseURL: constants.server.baseUrl + constants.server.auth,
    });
  }

  async login(username, password) {
    let response;
    try {
      response = await this.serverAuth.post('/login', {
        username,
        password,
      });
    } catch (err) {
      throw err;
    }
    return response.status === httpStatus.OK;
  }

  async logout() {
    let response;
    try {
      response = await this.serverAuth.get('/logout');
    } catch (err) {
      throw err;
    }
    return !response.status === httpStatus.OK;
  }

  async isLoggedIn() {
    let response;
    try {
      response = await this.serverAuth.get('/isLoggedIn');
    } catch (err) {
      throw err;
    }
    return response.status === httpStatus.OK;
  }
}

export default new AuthService();