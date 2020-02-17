import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions, types } from '../../../../env/utils/access';

// components
import BlogPostListView from './BlogPostListView';

// actions
const { getBlogPosts, getActiveBlogPosts } = actions.blogActions;

// types
const { blog: blogTypes } = types;

class BlogPostsList extends Component {
  componentDidMount = () => {
    const { init, isLoggedIn, getBlogPosts, getActiveBlogPosts } = this.props;
    if (init) {
      isLoggedIn ? getBlogPosts() : getActiveBlogPosts();
    }
  };

  componentDidUpdate = prevProps => {
    if (
      this.props.init !== prevProps.init ||
      this.props.isLoggedIn !== prevProps.isLoggedIn
    ) {
      const { init, isLoggedIn, getBlogPosts, getActiveBlogPosts } = this.props;
      if (init) {
        isLoggedIn ? getBlogPosts() : getActiveBlogPosts();
      }
    }
  };

  render() {
    const { blogPostsList, isLoggedIn } = this.props;

    return (
      <BlogPostListView
        state={{ blogPostsList }}
        requestName={isLoggedIn ? blogTypes.readAll : blogTypes.readAllActive}
      />
    );
  }
}

const mapStateToProps = ({ blogPostsList, isLoggedIn, init }) => ({
  blogPostsList,
  isLoggedIn,
  init,
});

const mapDispatchToProps = dispatch => ({
  getBlogPosts: () => dispatch(getBlogPosts()),
  getActiveBlogPosts: () => dispatch(getActiveBlogPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostsList);
