import { constants, errorHandlers, portfolioApiServer } from '../utils/access';

class BlogService {
  constructor() {
    this.blogServer = portfolioApiServer.create({
      baseURL: constants.server.baseUrl + constants.server.blog,
    });
  }

  async getActivePosts() {
    let response;
    try {
      response = await this.blogServer.get('/posts');
    } catch (err) {
      errorHandlers.blogErrorHandler(err);
    }
    return response.data;
  }

  async getPosts() {
    let response;
    try {
      response = await this.blogServer.get('/posts/all');
    } catch (err) {
      errorHandlers.blogErrorHandler(err);
    }
    return response.data;
  }

  async postPost(post) {
    let response;
    try {
      response = await this.blogServer.post('/posts', post);
    } catch (err) {
      errorHandlers.blogErrorHandler(err);
    }
    return response.data;
  }

  async updatePost(id, post) {
    let response;
    try {
      response = await this.blogServer.put(`/posts/${id}`, post);
    } catch (err) {
      errorHandlers.blogErrorHandler(err);
    }
    return response.data;
  }

  async togglePost(id) {
    let response;
    try {
      response = await this.blogServer.patch(`/posts/${id}`);
    } catch (err) {
      errorHandlers.blogErrorHandler(err);
    }
    console.log(response.data);
    return response.data;
  }

  async deletePost(id) {
    let response;
    try {
      response = await this.blogServer.delete(`/posts/${id}`);
    } catch (err) {
      errorHandlers.blogErrorHandler(err);
    }
    return response.data;
  }
}

export default new BlogService();
