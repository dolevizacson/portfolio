import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { constants, actions } from '../../../../env/utils/access';

// components
import BlogPostView from './BlogPostView';

// actions
const { deleteBlogPost, toggleBlogPost } = actions.blogActions;

// constants
const { adminRoute, blogRoute } = constants;

class BlogPost extends Component {
  state = { updatePost: false };

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
    const { blogPostData, isLoggedIn, location } = this.props;
    const { updatePost } = this.state;

    if (updatePost)
      return (
        <Redirect
          to={{
            pathname: `${adminRoute}${blogRoute}`,
            state: {
              from: location.pathname,
              blogPost: blogPostData,
            },
          }}
        />
      );

    return (
      <BlogPostView
        state={{
          blogPostData,
          isLoggedIn,
          deleteBlogPost: this.deleteBlogPost,
          updateBlogPost: this.updateBlogPost,
          toggleBlogPost: this.toggleBlogPost,
        }}
      />
    );
  }
}

const mapStateToProps = ({ isLoggedIn }) => ({ isLoggedIn });
const mapDispatchToProps = dispatch => ({
  deleteBlogPost: id => dispatch(deleteBlogPost(id)),
  toggleBlogPost: id => dispatch(toggleBlogPost(id)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BlogPost)
);
