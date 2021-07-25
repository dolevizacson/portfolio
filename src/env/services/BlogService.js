import { classes, constants, errorHandlers } from '../utils/access';

const { Crud } = classes;

class BlogService extends Crud {
  constructor() {
    super(constants.server.blog, errorHandlers.blogErrorHandler);
  }
}

export default new BlogService();
