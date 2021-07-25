import React from 'react';
import styled from 'styled-components';

// style
const BlogHeaderStyle = styled.h1`
  padding: 1.8rem 2rem;

  border-bottom: 1px solid var(--ui-main-color-1);
`;

const BlogHeader = (props) => {
  const { children } = props;
  return <BlogHeaderStyle {...props}>{children}</BlogHeaderStyle>;
};

export default BlogHeader;
