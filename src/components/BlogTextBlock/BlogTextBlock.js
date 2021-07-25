import React from 'react';
import styled from 'styled-components';

// style
const BlogTextBlockStyle = styled.section`
  display: grid;
  grid-template-rows: min-content;
  grid-auto-rows: 1fr;
`;

const BlogTextBlockHeaderStyle = styled.div`
  padding: var(--ui-text-block-vertical) var(--ui-text-block-horizontal);
  padding-top: 0;
  border-radius: var(--ui-corners-1);
`;

const BlogTextBlockBodyStyle = styled.div`
  display: grid;
  grid-gap: ${(props) => props.gap || `var(--blog-post-grid-2)`};
  ${(props) => props.center && `align-content: center`};

  padding: var(--ui-text-block-vertical) var(--ui-text-block-horizontal);

  line-height: 2.4rem;
`;

const BlogTextBlock = (props) => {
  const { children, header, gap, center } = props;

  return (
    <BlogTextBlockStyle {...props}>
      {header && <BlogTextBlockHeaderStyle>{header}</BlogTextBlockHeaderStyle>}
      <BlogTextBlockBodyStyle gap={gap} center={center} {...props}>
        {children}
      </BlogTextBlockBodyStyle>
    </BlogTextBlockStyle>
  );
};

export default BlogTextBlock;
