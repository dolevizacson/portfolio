import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  constants,
  BlogHeader,
  BlogTextBlock,
  UiButton,
  UiLoading,
  UiRequest,
  UiRequestError,
  UiBackButton,
  UiButtonsContainer,
} from '../../env/utils/access';

// constants
const { blogRoute } = constants;

// style
const BlogPostStyle = styled.article`
  display: grid;
  grid-gap: var(--blog-post-grid-1);
`;

const BlogPostHeaderStyle = styled(BlogHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BlogPostLoadingStyle = styled.div`
  margin: var(--ui-loading-top-bottom-margin);
`;

const BlogPostContainerStyle = styled.div`
  display: grid;
  grid-gap: var(--ui-grid-gap-1);
`;

const BlogPostDateContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const BlogPostDateStyle = styled.h3`
  color: var(--ui-font-color-1);

  font-size: 1.7rem;

  ${(props) => props.theme.media('21.875rem')`
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  `}
`;

const BlogPostDateNumberStyle = styled.span`
  letter-spacing: 0.4rem;
`;

const BlogPostParagraphContainerStyle = styled(BlogTextBlock)``;

const BlogPostParagraphHeaderStyle = styled.h3`
  font-size: 2rem;
`;
const BlogPostParagraphBodyStyle = styled.p``;

const BlogPostConclusionSentenceContainerStyle = styled(BlogTextBlock)``;

const BlogPostConclusionSentenceStyle = styled.h3`
  text-align: center;

  font-size: 1.8rem;
`;

const BlogPostButtonsStyle = styled(BlogTextBlock)``;

const formatDate = (date) => {
  const rawDate = new Date(date);
  return `${rawDate.getDate()}/${
    rawDate.getMonth() + 1
  }/${rawDate.getFullYear()}`;
};

const isUpdated = (date, updatedDate) => {
  let newDate = new Date(date);
  let newUpdatedDate = new Date(updatedDate);

  return newUpdatedDate.getTime() > newDate.getTime();
};

const updateBlogPost = (props) => {
  const { state, functions } = props;
  const blogPost = state;
  functions.updateBlogPost(blogPost);
};

const deleteBlogPost = (props) => {
  const { state, functions } = props;
  const id = state._id;
  functions.deleteBlogPost(id);
};

const toggleBlogPost = (props) => {
  const { state, functions } = props;
  const id = state._id;
  functions.toggleBlogPost(id);
};

const BlogPostView = (props) => {
  const { state, requestName, isLoggedIn, functions } = props;

  return (
    <BlogPostStyle>
      <UiRequest
        requestName={requestName}
        loadingAnimation={
          <BlogPostLoadingStyle>
            <UiLoading />
          </BlogPostLoadingStyle>
        }
        topComponent={
          <BlogPostHeaderStyle>
            {state?.header}
            <UiBackButton backTo={blogRoute} />
          </BlogPostHeaderStyle>
        }
        error={
          <UiRequestError
            errorMessage="Failed to blog post"
            request={functions.getBlogPost}
          />
        }
      >
        <BlogPostContainerStyle>
          {state?.paragraph?.map((paragraph, index) => {
            return (
              <BlogPostParagraphContainerStyle
                key={paragraph?._id || index}
                header={
                  index === 0 && (
                    <BlogPostDateContainerStyle>
                      <BlogPostDateStyle>
                        posted :{' '}
                        <BlogPostDateNumberStyle>{`${
                          state?.date && formatDate(state.date)
                        } `}</BlogPostDateNumberStyle>
                      </BlogPostDateStyle>
                      <BlogPostDateStyle>
                        {state?.date &&
                          state?.update &&
                          isUpdated(state.date, state.update) && (
                            <>
                              last updated :{' '}
                              <BlogPostDateNumberStyle>
                                {formatDate(state.update)}
                              </BlogPostDateNumberStyle>
                            </>
                          )}
                      </BlogPostDateStyle>
                    </BlogPostDateContainerStyle>
                  )
                }
              >
                <BlogPostParagraphHeaderStyle>
                  {paragraph?.header}
                </BlogPostParagraphHeaderStyle>
                <BlogPostParagraphBodyStyle>
                  {paragraph?.content}
                </BlogPostParagraphBodyStyle>
              </BlogPostParagraphContainerStyle>
            );
          })}
          {state?.conclusion?.content && (
            <BlogPostParagraphContainerStyle>
              {state.conclusion?.header && (
                <BlogPostParagraphHeaderStyle>
                  {state.conclusion.header}
                </BlogPostParagraphHeaderStyle>
              )}
              <BlogPostParagraphBodyStyle>
                {state.conclusion.content}
              </BlogPostParagraphBodyStyle>
            </BlogPostParagraphContainerStyle>
          )}
          {state?.conclusionSentence && (
            <BlogPostConclusionSentenceContainerStyle>
              <BlogPostConclusionSentenceStyle>
                {state.conclusionSentence}
              </BlogPostConclusionSentenceStyle>
            </BlogPostConclusionSentenceContainerStyle>
          )}
          {isLoggedIn && (
            <BlogPostButtonsStyle>
              <UiButtonsContainer>
                <UiButton onClick={() => updateBlogPost(props)}>
                  update
                </UiButton>
                <UiButton onClick={() => deleteBlogPost(props)}>
                  delete
                </UiButton>
                <UiButton onClick={() => toggleBlogPost(props)}>
                  {state?.active !== 0 ? 'toggle off' : 'toggle on'}
                </UiButton>
              </UiButtonsContainer>
            </BlogPostButtonsStyle>
          )}
        </BlogPostContainerStyle>
      </UiRequest>
    </BlogPostStyle>
  );
};

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn,
});

export default connect(mapStateToProps)(BlogPostView);
