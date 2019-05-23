import React, { Component } from 'react';
import styled from 'styled-components';

const BlogStyle = styled.div`
  ${({ theme }) => theme.div}

  flex-direction: column;
  width: 100%;
`;

class Blog extends Component {
  render() {
    return <BlogStyle>blog</BlogStyle>;
  }
}

export default Blog;
