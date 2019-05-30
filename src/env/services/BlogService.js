import axios from 'axios';

import { constants, errorHandlers } from '../utils/access';

class BlogService {
  constructor() {
    this.serverBlog = axios.create({
      baseURL: constants.server.baseUrl + constants.server.blog,
      timeout: 2000,
    });
  }

  async getPosts() {
    let response;
    try {
      response = await this.serverBlog.get('/posts');
    } catch (err) {
      errorHandlers.axiosErrorHandler(err);
    }
    return response.data;
  }
}

export default new BlogService();
