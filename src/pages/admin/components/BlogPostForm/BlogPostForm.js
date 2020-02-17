import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { actions, services } from '../../../../env/utils/access';

// components
import BlogPostFormView from './BlogPostFormView';

// actions
const { postBlogPost, updateBlogPost } = actions.blogActions;

// services
const { localStorageService } = services;

const BlogPostFormValidationSchema = Yup.object().shape({
  header: Yup.string().required('Must provide a post header'),
  summery: Yup.string().required('Must provide summery'),
  paragraph: Yup.array().of(
    Yup.object().shape({
      header: Yup.string(),
      content: Yup.string().required('Must provide paragraph content'),
    })
  ),
  conclusion: Yup.object().shape({
    header: Yup.string(),
    content: Yup.string(),
  }),
  conclusionSentence: Yup.string(),
});

class BlogPostForm extends Component {
  postBlogPost = post => {
    const { postBlogPost } = this.props;
    postBlogPost(post);
  };

  updateBlogPost = (id, post) => {
    const { updateBlogPost } = this.props;
    updateBlogPost(id, post);
  };

  loadBlogPostState = key => {
    try {
      return localStorageService.loadData(key);
    } catch (err) {
      console.log(err);
    }
  };

  saveBlogPostState = (key, data) => {
    try {
      localStorageService.saveData(key, data);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { location } = this.props;
    return (
      <BlogPostFormView
        state={{
          postBlogPost: this.postBlogPost,
          updateBlogPost: this.updateBlogPost,
          loadBlogPostState: this.loadBlogPostState,
          saveBlogPostState: this.saveBlogPostState,
          BlogPostFormValidationSchema,
          location,
        }}
      />
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  postBlogPost: post => dispatch(postBlogPost(post, ownProps)),
  updateBlogPost: (id, post) => dispatch(updateBlogPost(id, post, ownProps)),
});

export default connect(
  null,
  mapDispatchToProps
)(BlogPostForm);
