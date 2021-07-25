import { services, constants, functions, types } from '../utils/access';

// types
const { blog: blogTypes } = types;

// constants
const { blogRoute } = constants;

// services
const { blogService } = services;

// functions
const { reduxActions } = functions;

export const getActiveBlogPosts = () =>
  reduxActions.getActiveItems(blogTypes, blogService);

export const getBlogPosts = () => reduxActions.getItems(blogTypes, blogService);

export const getBlogPost = (id) =>
  reduxActions.getItem(blogTypes, blogService, id);

export const getActiveBlogPost = (id) =>
  reduxActions.getActiveItem(blogTypes, blogService, id);

export const postBlogPost = (blogPost, ownProps) =>
  reduxActions.postItem(blogTypes, blogService, blogPost, ownProps, {
    route: blogRoute,
    withID: true,
  });

export const updateBlogPost = (id, blogPost, ownProps) =>
  reduxActions.updateItem(blogTypes, blogService, id, blogPost, ownProps, {
    route: blogRoute,
    withID: true,
  });

export const toggleBlogPost = (id) =>
  reduxActions.toggleItem(blogTypes, blogService, id);

export const deleteBlogPost = (id, ownProps) =>
  reduxActions.deleteItem(blogTypes, blogService, id, ownProps, {
    route: blogRoute,
  });
