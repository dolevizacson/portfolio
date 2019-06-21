import React from 'react';
import { UiHeader, UiLoading } from '../../../../env/utils/access';

// components
import BlogPost from '../BlogPost/BlogPost';

// style
import { BlogPostsListStyle, HeaderIconStyle } from './BlogPostListStyle';

const renderBlogPostsList = list => {
  return list.map((blogPost, index) => {
    return <BlogPost key={index} blogPostData={blogPost} />;
  });
};

const BlogPostView = ({ state: { blogPostsList, isLoading } }) => {
  return (
    <BlogPostsListStyle>
      {isLoading.READ_BLOG_POSTS && <UiLoading size={50} />}
      {!isLoading.READ_BLOG_POSTS && (
        <>
          <UiHeader text="Personal blog" icon={HeaderIconStyle} />
          {renderBlogPostsList(blogPostsList)}
        </>
      )}
    </BlogPostsListStyle>
  );
};

export default BlogPostView;
