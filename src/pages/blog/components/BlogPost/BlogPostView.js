import React from 'react';

// style
import {
  BlogPostStyle,
  BlogPostContainerStyle,
  BlogPostHeaderStyle,
  BlogPostDateStyle,
  BlogPostSeperatorStyle,
  BlogPostSummeryStyle,
  BlogPostBodyStyle,
  BlogPostparagraphStyle,
  BlogPostparagraphHeaderStyle,
  BlogPostparagraphBodyStyle,
  BlogPostFooterStyle,
  BlogPostDeleteButtonStyle,
  BlogPostUpdateButtonStyle,
  BlogPostToggleButtonStyle,
} from './BlogPostStyle';

const formatDate = date => {
  const rawDate = new Date(date);
  return `${rawDate.getDate()}/${rawDate.getMonth() +
    1}/${rawDate.getFullYear()}`;
};

const BlogPostView = ({
  state: {
    blogPostData,
    deleteBlogPost,
    updateBlogPost,
    toggleBlogPost,
    isLoggedIn,
  },
}) => {
  return (
    <BlogPostStyle>
      <BlogPostContainerStyle>
        <BlogPostHeaderStyle>{blogPostData.header}</BlogPostHeaderStyle>
        <BlogPostDateStyle>
          posted : {formatDate(blogPostData.date)}
        </BlogPostDateStyle>
        <BlogPostSeperatorStyle />
        <BlogPostSummeryStyle>{blogPostData.summery}</BlogPostSummeryStyle>
        <BlogPostSeperatorStyle />
        <BlogPostBodyStyle>
          {blogPostData.paragraph.map((paragraph, index) => {
            return (
              <BlogPostparagraphStyle key={index}>
                <BlogPostparagraphHeaderStyle>
                  {paragraph.header}
                </BlogPostparagraphHeaderStyle>
                <BlogPostparagraphBodyStyle>
                  {paragraph.content}
                </BlogPostparagraphBodyStyle>
              </BlogPostparagraphStyle>
            );
          })}
        </BlogPostBodyStyle>
        {blogPostData.footer && (
          <>
            <BlogPostSeperatorStyle />
            <BlogPostFooterStyle>{blogPostData.footer}</BlogPostFooterStyle>
          </>
        )}
        {isLoggedIn && (
          <>
            <BlogPostDeleteButtonStyle
              onClick={() => deleteBlogPost(blogPostData._id)}
            >
              Delete
            </BlogPostDeleteButtonStyle>
            <BlogPostToggleButtonStyle
              onClick={() => toggleBlogPost(blogPostData._id)}
            >
              {blogPostData.active ? 'Toggle off' : 'Toggle on'}
            </BlogPostToggleButtonStyle>
            <BlogPostUpdateButtonStyle onClick={updateBlogPost}>
              Update
            </BlogPostUpdateButtonStyle>
          </>
        )}
      </BlogPostContainerStyle>
    </BlogPostStyle>
  );
};

export default BlogPostView;
