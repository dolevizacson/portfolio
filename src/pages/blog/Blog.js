import React, { Component } from 'react';
import styled from 'styled-components';

// components
import BlogPostsList from './components/BlogPostsList/BlogPostsList';

const BlogStyle = styled.div`
  ${({ theme }) => theme.div}

  flex-direction: column;
  width: 100%;
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
