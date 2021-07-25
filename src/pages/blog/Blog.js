import React, { Component } from 'react';
import styled from 'styled-components';

// components
import BlogPostsList from './components/BlogPostsList/BlogPostsList';

// style
const BlogStyle = styled.div`
  display: grid;
`;

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
