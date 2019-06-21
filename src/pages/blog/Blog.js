import React, { Component } from 'react';

// components
import BlogPostsList from './components/BlogPostsList/BlogPostsList';

// style
import { BlogStyle } from './BlogStyle';

class Blog extends Component {
  render() {
    return (
      <BlogStyle>
        <BlogPostsList />
      </BlogStyle>
    );
  }
}

export default Blog;
