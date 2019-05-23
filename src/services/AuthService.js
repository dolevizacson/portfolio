import { serverAuth } from '../api/portfolioServer';
import httpStatus from 'http-status-codes';

class AuthService {
  async login(username, password) {
    let response;
    try {
      response = await serverAuth.post('/login', {
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
      response = await serverAuth.get('/logout');
    } catch (err) {
      throw err;
    }
    return !response.status === httpStatus.OK;
  }

  async isLoggedIn() {
    let response;
    try {
      response = await serverAuth.get('/isLoggedIn');
    } catch (err) {
      throw err;
    }
    return response.status === httpStatus.OK;
  }
}

export default new AuthService();
