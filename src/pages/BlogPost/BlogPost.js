import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { constants, actions, types } from '../../env/utils/access';

// components
import BlogPostView from './BlogPostView';

// types
const { blog: blogTypes } = types;

// actions
const { getBlogPost, deleteBlogPost, toggleBlogPost } = actions.blogActions;

// constants
const { adminRoute, blogRoute } = constants;

class BlogPost extends Component {
  state = { updatePost: false };

  componentDidMount = () => {
    const { getBlogPost, location } = this.props;
    const id = location.pathname.split('/')[2];
    getBlogPost(id);
  };

  deleteBlogPost = id => {
    const { deleteBlogPost } = this.props;
    deleteBlogPost(id);
  };

  updateBlogPost = () => {
    this.setState(state => ({ updatePost: true }));
  };

  toggleBlogPost = id => {
    const { toggleBlogPost } = this.props;
    toggleBlogPost(id);
  };

  render() {
    const { blogPost, isLoggedIn, location } = this.props;
    const { updatePost } = this.state;

    if (updatePost)
      return (
        <Redirect
          push
          to={{
            pathname: `${adminRoute}${blogRoute}`,
            state: {
              from: location.pathname,
              blogPost,
            },
          }}
        />
      );

    return (
      <BlogPostView
        state={{
          blogPost,
          isLoggedIn,
          deleteBlogPost: this.deleteBlogPost,
          updateBlogPost: this.updateBlogPost,
          toggleBlogPost: this.toggleBlogPost,
        }}
        requestName={blogTypes.read}
      />
    );
  }
}

const mapStateToProps = ({ isLoggedIn, blogPost }) => ({
  isLoggedIn,
  blogPost,
});
const mapDispatchToProps = (dispatch, onwProps) => ({
  getBlogPost: id => dispatch(getBlogPost(id)),
  deleteBlogPost: id => dispatch(deleteBlogPost(id, onwProps)),
  toggleBlogPost: id => dispatch(toggleBlogPost(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BlogPost)
);
