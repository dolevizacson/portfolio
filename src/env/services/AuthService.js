import httpStatus from 'http-status-codes';
import runtimeEnv from '@mars/heroku-js-runtime-env';

import { constants, errorHandlers, portfolioApiServer } from '../utils/access';

const env = runtimeEnv();

class AuthService {
  constructor() {
    this.authServer = portfolioApiServer.create({
      baseURL: env.REACT_APP_BASE_URL + constants.server.auth,
    });
  }

  async login(username, password) {
    let response;
    try {
      response = await this.authServer.post('/login', {
        username,
        password,
      });
    } catch (err) {
      errorHandlers.authErrorHandler(err);
    }
    return response.status === httpStatus.OK;
  }

  async logout() {
    let response;
    try {
      response = await this.authServer.get('/logout');
    } catch (err) {
      errorHandlers.authErrorHandler(err);
    }
    return !response.status === httpStatus.OK;
  }

  async isLoggedIn() {
    let response;
    try {
      response = await this.authServer.get('/isLoggedIn');
    } catch (err) {
      errorHandlers.authErrorHandler(err);
    }
    return response.status === httpStatus.OK;
  }
}

export default new AuthService();
