import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { actions, services, constants } from '../../env/utils/access';

// components
import BlogPostFormView from './BlogPostFormView';

// actions
const { getBlogPost, postBlogPost, updateBlogPost } = actions.blogActions;

// constants
const { blogFormLocalStorageKey, blogPostInitialState } = constants;

// services
const { localStorageService } = services;

const BlogPostFormValidationSchema = Yup.object().shape({
  header: Yup.string().required('Must provide a blog post header'),
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
  state = { isSubmit: false };

  componentDidMount = async () => {
    const { getBlogPost } = this.props;

    if (this.isUpdate()) {
      const id = this.getId();
      await getBlogPost(id);
    }
  };

  componentWillUnmount = () => {
    const { isSubmit } = this.state;
    if (isSubmit) {
      this.removeBlogPostState(blogFormLocalStorageKey);
    }
  };

  isSubmit = () => {
    this.setState((state) => (state.isSubmit = true));
  };

  postBlogPost = (post) => {
    const { postBlogPost } = this.props;
    postBlogPost(post);
  };

  updateBlogPost = (id, post) => {
    const { updateBlogPost } = this.props;
    updateBlogPost(id, post);
  };

  loadBlogPostState = (key) => {
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

  removeBlogPostState = (key) => {
    try {
      localStorageService.deleteData(key);
    } catch (err) {
      console.log(err);
    }
  };

  isUpdate = () => {
    const { location } = this.props;
    return location.pathname.split('/')[3] === 'update';
  };

  getId = () => {
    const { match } = this.props;
    return match.params.id;
  };

  render() {
    const { blogPost } = this.props;

    let initialValues = {};

    if (this.isUpdate()) {
      initialValues = blogPost;
    } else {
      initialValues =
        this.loadBlogPostState(blogFormLocalStorageKey) || blogPostInitialState;
    }

    return (
      <BlogPostFormView
        functions={{
          postBlogPost: this.postBlogPost,
          updateBlogPost: this.updateBlogPost,
          saveBlogPostState: this.saveBlogPostState,
          removeBlogPostState: this.removeBlogPostState,
          isSubmit: this.isSubmit,
        }}
        validation={BlogPostFormValidationSchema}
        state={{
          isUpdate: this.isUpdate(),
          id: this.getId(),
          initialValues,
          blogPost,
        }}
      />
    );
  }
}

const mapStateToProps = ({ blogPost }) => ({
  blogPost,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getBlogPost: (id) => dispatch(getBlogPost(id)),
  postBlogPost: (post) => dispatch(postBlogPost(post, ownProps)),
  updateBlogPost: (id, post) => dispatch(updateBlogPost(id, post, ownProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostForm);
