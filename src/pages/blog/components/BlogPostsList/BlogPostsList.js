import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../../env/utils/access';

// components
import BlogPostListView from './BlogPostListView';

// actions
const { getBlogPosts, getActiveBlogPosts } = actions.blogActions;

class BlogPostsList extends Component {
  componentDidMount = () => {
    const { isLoggedIn, getBlogPosts, getActiveBlogPosts } = this.props;
    isLoggedIn ? getBlogPosts() : getActiveBlogPosts();
  };

  componentDidUpdate = prevProps => {
    if (this.props.isLoggedIn !== prevProps.isLoggedIn) {
      const { isLoggedIn, getBlogPosts, getActiveBlogPosts } = this.props;
      isLoggedIn ? getBlogPosts() : getActiveBlogPosts();
    }
  };

  render() {
    const { blogPostsList, isLoading } = this.props;

    return <BlogPostListView state={{ blogPostsList, isLoading }} />;
  }
}

const mapStateToProps = ({ blogPostsList, isLoading, isLoggedIn }) => ({
  blogPostsList,
  isLoading,
  isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  getBlogPosts: () => dispatch(getBlogPosts()),
  getActiveBlogPosts: () => dispatch(getActiveBlogPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPostsList);
