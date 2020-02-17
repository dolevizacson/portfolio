import React from 'react';
import {
  UiHeader,
  UiLoading,
  UiRequest,
  UiRequstError,
} from '../../../../env/utils/access';

// components
import MinimizedBlogPost from '../MinimizedBlogPost/MinimizedBlogPost';

// style
import { BlogPostsListStyle, HeaderIconStyle } from './BlogPostListStyle';

const renderBlogPostsList = list => {
  return list.map((blogPost, index) => {
    return <MinimizedBlogPost key={index} blogPostData={blogPost} />;
  });
};

const BlogPostView = ({ state: { blogPostsList }, requestName }) => {
  return (
    <BlogPostsListStyle>
      <UiRequest
        requestName={requestName}
        loading={<UiLoading size={50} />}
        component={<UiHeader text="Personal blog" icon={HeaderIconStyle} />}
        error={<UiRequstError message="failed to load" />}
      >
        <>{renderBlogPostsList(blogPostsList)}</>
      </UiRequest>
    </BlogPostsListStyle>
  );
};

export default BlogPostView;
