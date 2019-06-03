import httpStatus from 'http-status-codes';

import { constants, errorHandlers, portfolioApiServer } from '../utils/access';

class AuthService {
  constructor() {
    this.authServer = portfolioApiServer.create({
      baseURL: constants.server.baseUrl + constants.server.auth,
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
