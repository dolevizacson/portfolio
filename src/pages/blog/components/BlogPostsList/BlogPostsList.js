import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../../env/utils/access';

// components
import BlogPostListView from './BlogPostListView';

// actions
const { getBlogPosts } = actions.blogActions;

class BlogPostsList extends Component {
  componentDidMount = () => {
    const { getBlogPosts } = this.props;
    getBlogPosts();
  };

  render() {
    const { blogPostsList, isLoading } = this.props;

    return <BlogPostListView state={{ blogPostsList, isLoading }} />;
  }
}

const mapStateToProps = ({ blogPostsList, isLoading }) => ({
  blogPostsList,
  isLoading,
});

const mapDispatchToProps = dispatch => ({
  getBlogPosts: () => dispatch(getBlogPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPostsList);
