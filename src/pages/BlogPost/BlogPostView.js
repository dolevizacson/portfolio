import React from 'react';
import { UiLoading, UiRequest, UiRequstError } from '../../env/utils/access';

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
    blogPost,
    deleteBlogPost,
    updateBlogPost,
    toggleBlogPost,
    isLoggedIn,
  },
  requestName,
}) => {
  return (
    <BlogPostStyle>
      <UiRequest
        requestName={requestName}
        loading={<UiLoading size={50} />}
        error={<UiRequstError message="failed to load" />}
      >
        <BlogPostContainerStyle>
          <BlogPostHeaderStyle>{blogPost.header}</BlogPostHeaderStyle>
          <BlogPostDateStyle>
            posted : {formatDate(blogPost.date)}
          </BlogPostDateStyle>
          <BlogPostSeperatorStyle />
          <BlogPostSummeryStyle>{blogPost.summery}</BlogPostSummeryStyle>
          <BlogPostSeperatorStyle />
          <BlogPostBodyStyle>
            {blogPost.paragraph &&
              blogPost.paragraph.map((paragraph, index) => {
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
          {(blogPost.conclusion || blogPost.conclusionSentence) && (
            <BlogPostSeperatorStyle />
          )}

          <BlogPostparagraphStyle>
            {blogPost.conclusion && (
              <>
                <BlogPostparagraphHeaderStyle>
                  {blogPost.conclusion.header}
                </BlogPostparagraphHeaderStyle>
                <BlogPostparagraphBodyStyle>
                  {blogPost.conclusion.content}
                </BlogPostparagraphBodyStyle>
              </>
            )}

            {blogPost.conclusionSentence && (
              <BlogPostparagraphBodyStyle>
                {blogPost.conclusionSentence}
              </BlogPostparagraphBodyStyle>
            )}
          </BlogPostparagraphStyle>
          {isLoggedIn && (
            <>
              <BlogPostDeleteButtonStyle
                onClick={() => deleteBlogPost(blogPost._id)}
              >
                Delete
              </BlogPostDeleteButtonStyle>
              <BlogPostToggleButtonStyle
                onClick={() => toggleBlogPost(blogPost._id)}
              >
                {blogPost.active ? 'Toggle off' : 'Toggle on'}
              </BlogPostToggleButtonStyle>
              <BlogPostUpdateButtonStyle onClick={updateBlogPost}>
                Update
              </BlogPostUpdateButtonStyle>
            </>
          )}
        </BlogPostContainerStyle>
      </UiRequest>
    </BlogPostStyle>
  );
};

export default BlogPostView;
