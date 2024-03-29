import { portfolioApiServer } from '../utils/access';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();

export default class CRUD {
  constructor(url, errorHandler, timeOut) {
    this.serviceServer = portfolioApiServer.create({
      baseURL: env.REACT_APP_BASE_URL + url,
    });

    if (timeOut) {
      this.serviceServer.defaults.timeout = timeOut;
    }

    this.errorHandler = errorHandler;
  }

  async getActiveItems() {
    let response;
    try {
      response = await this.serviceServer.get('/active');
    } catch (err) {
      this._handleError(err);
    }
    return response.data;
  }

  async getItems() {
    let response;
    try {
      response = await this.serviceServer.get('/');
    } catch (err) {
      this._handleError(err);
    }
    return response.data;
  }

  async getActiveItem(id) {
    let response;
    try {
      response = await this.serviceServer.get(`/active/${id}`);
    } catch (err) {
      this._handleError(err);
    }
    return response.data;
  }

  async getItem(id) {
    let response;
    try {
      response = await this.serviceServer.get(`/${id}`);
    } catch (err) {
      this._handleError(err);
    }
    return response.data;
  }

  async postItem(item) {
    let response;
    try {
      response = await this.serviceServer.post('/', item);
    } catch (err) {
      this._handleError(err);
    }
    return response.data;
  }

  async updateItem(id, item) {
    let response;
    try {
      response = await this.serviceServer.put(`/${id}`, item);
    } catch (err) {
      this._handleError(err);
    }
    return response.data;
  }

  async toggleItem(id) {
    let response;
    try {
      response = await this.serviceServer.patch(`/${id}`);
    } catch (err) {
      this._handleError(err);
    }
    return response.data;
  }

  async deleteItem(id) {
    let response;
    try {
      response = await this.serviceServer.delete(`/${id}`);
    } catch (err) {
      this._handleError(err);
    }
    return response.data;
  }

  _handleError(err) {
    this.errorHandler(err);
  }
}
