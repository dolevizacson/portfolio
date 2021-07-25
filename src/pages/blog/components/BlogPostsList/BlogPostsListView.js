import React from 'react';
import styled from 'styled-components';
import {
  UiHeader,
  UiLoading,
  UiRequest,
  UiRequestError,
  UiTextMessage,
} from '../../../../env/utils/access';

// components
import MinimizedBlogPost from '../MinimizedBlogPost/MinimizedBlogPost';

// style
const BlogPostsListStyle = styled.section`
  display: grid;
  grid-gap: var(--ui-grid-gap-1);
`;

const BlogPostListLoadingStyle = styled.div`
  margin: var(--ui-loading-top-bottom-margin);
`;

const renderBlogPostsList = (state) => {
  if (state.blogPostsList.length === 0) {
    return <UiTextMessage>No blog Posts at the moment</UiTextMessage>;
  }
  return state.blogPostsList.map((blogPost) => {
    return <MinimizedBlogPost key={blogPost._id} state={blogPost} />;
  });
};

const BlogPostsListView = (props) => {
  const { state, requestName, functions } = props;
  return (
    <BlogPostsListStyle>
      <UiRequest
        requestName={requestName}
        loadingAnimation={
          <BlogPostListLoadingStyle>
            <UiLoading />
          </BlogPostListLoadingStyle>
        }
        topComponent={<UiHeader>Personal blog</UiHeader>}
        error={
          <UiRequestError
            errorMessage="Failed to blog posts"
            request={functions.getBlogPosts}
          />
        }
      >
        {renderBlogPostsList(state)}
      </UiRequest>
    </BlogPostsListStyle>
  );
};

export default BlogPostsListView;
