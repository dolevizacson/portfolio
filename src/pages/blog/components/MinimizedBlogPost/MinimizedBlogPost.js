import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import MinimizedBlogPostView from './MinimizedBlogPostView';

class MinimizedBlogPost extends Component {
  render() {
    const { blogPostData, isLoggedIn } = this.props;
    return (
      <MinimizedBlogPostView
        state={{
          blogPostData,
          isLoggedIn,
        }}
      />
    );
  }
}

const mapStateToProps = ({ isLoggedIn }) => ({ isLoggedIn });

export default connect(mapStateToProps)(MinimizedBlogPost);
