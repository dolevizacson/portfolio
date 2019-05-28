import axios from 'axios';
import httpStatus from 'http-status-codes';

import { constants } from '../utils/access';

class BlogService {
  constructor() {
    this.serverBlog = axios.create({
      baseURL: constants.server.baseUrl + constants.server.blog,
    });
  }

  async getPosts() {
    let response;
    try {
      response = await this.serverBlog.get('/posts');
    } catch (err) {
      console.log(err);
    }
    return response.data;
  }
}

export default new BlogService();
