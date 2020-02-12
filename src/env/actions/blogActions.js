import { services, constants, functions, types } from '../utils/access';

// types
const { blog: blogTypes } = types;

// constants
const { blogRoute } = constants;

// services
const { blogService } = services;

// functions
const { reduxActions } = functions;

export default {
  getActiveBlogPosts: () => reduxActions.getActiveItems(blogTypes, blogService),
  getBlogPosts: () => reduxActions.getItems(blogTypes, blogService),
  getBlogPost: id => reduxActions.getItem(id, blogTypes, blogService),
  postBlogPost: (blogPost, ownProps) =>
    reduxActions.postItem(
      blogPost,
      ownProps,
      blogTypes,
      blogService,
      blogRoute,
      true
    ),
  updateBlogPost: (id, blogPost, ownProps) =>
    reduxActions.updateItem(
      id,
      blogPost,
      ownProps,
      blogTypes,
      blogService,
      blogRoute,
      true
    ),
  toggleBlogPost: id => reduxActions.toggleItem(id, blogTypes, blogService),
  deleteBlogPost: (id, ownProps) =>
    reduxActions.deleteItem(id, ownProps, blogTypes, blogService, blogRoute),
};
