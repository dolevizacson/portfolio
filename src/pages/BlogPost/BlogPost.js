import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { constants, actions, types } from '../../env/utils/access';

// components
import BlogPostView from './BlogPostView';

// actions
const { getBlogPost, getActiveBlogPost, deleteBlogPost, toggleBlogPost } =
  actions.blogActions;

// constants
const { adminRoute, blogRoute, updateRoute } = constants;

// types
const { blog: blogTypes } = types;

class BlogPost extends Component {
  componentDidMount = () => {
    this.getBlogPost();
  };

  componentDidUpdate = (prevProps) => {
    if (
      this.props.init !== prevProps.init ||
      this.props.isLoggedIn !== prevProps.isLoggedIn
    ) {
      this.getBlogPost();
    }
  };

  getBlogPost = () => {
    const { init, isLoggedIn, getBlogPost, getActiveBlogPost, location } =
      this.props;
    if (init) {
      const id = location.pathname.split('/')[2];
      isLoggedIn ? getBlogPost(id) : getActiveBlogPost(id);
    }
  };

  deleteBlogPost = (id) => {
    const { deleteBlogPost } = this.props;
    deleteBlogPost(id);
  };

  updateBlogPost = (blogPost) => {
    const { history } = this.props;
    history.push(`${adminRoute}${blogRoute}${updateRoute}/${blogPost._id}`);
  };

  toggleBlogPost = (id) => {
    const { toggleBlogPost } = this.props;
    toggleBlogPost(id);
  };
  z;

  render() {
    const { blogPost, isLoggedIn } = this.props;

    return (
      <BlogPostView
        state={blogPost}
        requestName={isLoggedIn ? blogTypes.read : blogTypes.readActive}
        functions={{
          getBlogPost: this.getBlogPost,
          deleteBlogPost: this.deleteBlogPost,
          updateBlogPost: this.updateBlogPost,
          toggleBlogPost: this.toggleBlogPost,
        }}
      />
    );
  }
}

const mapStateToProps = ({ blogPost, init, isLoggedIn }) => ({
  blogPost,
  init,
  isLoggedIn,
});
const mapDispatchToProps = (dispatch, onwProps) => ({
  getBlogPost: (id) => dispatch(getBlogPost(id)),
  getActiveBlogPost: (id) => dispatch(getActiveBlogPost(id)),
  deleteBlogPost: (id) => dispatch(deleteBlogPost(id, onwProps)),
  toggleBlogPost: (id) => dispatch(toggleBlogPost(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BlogPost)
);
