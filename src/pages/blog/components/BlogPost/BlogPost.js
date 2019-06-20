import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { constants, actions } from '../../../../env/utils/access';

// actions
const { deleteBlogPost } = actions.blogActions;

// constants
const { adminRoute, blogRoute } = constants;

// style
const BlogPostStyle = styled.div`
  ${({ theme: { div } }) => div}
`;
const BlogPostContainerStyle = styled.div`
  ${({
    theme: {
      ui: { item },
    },
  }) => item}

  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
`;
const BlogPostHeaderStyle = styled.h5`
  font-weight: bold;
  ${({
    theme: {
      color: { white2 },
    },
  }) => white2}
  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
`;
const BlogPostSummeryStyle = styled.h5`
  ${({
    theme: {
      color: { white2 },
    },
  }) => white2}
  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
`;
const BlogPostDateStyle = styled.div`
  ${({ theme: { div } }) => div};

  ${({
    theme: {
      color: { white2 },
    },
  }) => white2}
  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
`;
const SeperatorStyle = styled.hr`
  width: 100%;
  height: 2px;
  background-color: ${({
    theme: {
      mainAppThemeColors: { red1 },
    },
  }) => red1};
  border: none;
`;
const BlogPostBodyStyle = styled.div`
  ${({ theme: { div } }) => div};

  flex-direction: column;
`;
const BlogPostparagraphStyle = styled.div`
  ${({ theme: { div } }) => div};

  align-items: center;
  flex-direction: column;
`;
const BlogPostparagraphHeaderStyle = styled.div`
  ${({ theme: { div } }) => div};

  font-size: 1.125rem;
  font-weight: bold;

  ${({
    theme: {
      color: { white2 },
    },
  }) => white2};
  ${({
    theme: {
      font: { font1 },
    },
  }) => font1};
`;
const BlogPostparagraphBodyStyle = styled.div`
  ${({ theme: { div } }) => div};

  ${({
    theme: {
      color: { white2 },
    },
  }) => white2};
  ${({
    theme: {
      font: { font1 },
    },
  }) => font1};
`;
const BlogPostFooterStyle = styled.div`
  ${({ theme: { div } }) => div};

  justify-content: center;
  font-size: 1.125rem;
  font-weight: bold;

  ${({
    theme: {
      color: { white2 },
    },
  }) => white2};
  ${({
    theme: {
      font: { font1 },
    },
  }) => font1};
`;
const BlogPostDeleteButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;
const BlogPostUpdateButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;

class BlogPost extends Component {
  state = { updatePost: false };

  deleteBlogPost = id => {
    const { deleteBlogPost } = this.props;
    deleteBlogPost(id);
  };

  updateBlogPost = () => {
    this.setState(state => ({ updatePost: true }));
  };

  formatDate = date => {
    const rawDate = new Date(date);
    return `${rawDate.getDate()}/${rawDate.getMonth() +
      1}/${rawDate.getFullYear()}`;
  };
  render() {
    const { blogPostData, isLoggedIn, location } = this.props;
    const { updatePost } = this.state;

    if (updatePost)
      return (
        <Redirect
          to={{
            pathname: `${adminRoute}${blogRoute}`,
            state: {
              from: location.pathname,
              blogPost: blogPostData,
            },
          }}
        />
      );

    return (
      <BlogPostStyle>
        <BlogPostContainerStyle>
          <BlogPostHeaderStyle>{blogPostData.header}</BlogPostHeaderStyle>
          <BlogPostDateStyle>
            posted : {this.formatDate(blogPostData.date)}
          </BlogPostDateStyle>
          <SeperatorStyle />
          <BlogPostSummeryStyle>{blogPostData.summery}</BlogPostSummeryStyle>
          <SeperatorStyle />
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
              <SeperatorStyle />

              <BlogPostFooterStyle>{blogPostData.footer}</BlogPostFooterStyle>
            </>
          )}
          {isLoggedIn && (
            <>
              <BlogPostDeleteButtonStyle
                onClick={() => this.deleteBlogPost(blogPostData._id)}
              >
                Delete
              </BlogPostDeleteButtonStyle>
              <BlogPostUpdateButtonStyle onClick={this.updateBlogPost}>
                Update
              </BlogPostUpdateButtonStyle>
            </>
          )}
        </BlogPostContainerStyle>
      </BlogPostStyle>
    );
  }
}

const mapStateToProps = ({ isLoggedIn }) => ({ isLoggedIn });
const mapDispatchToProps = dispatch => ({
  deleteBlogPost: id => dispatch(deleteBlogPost(id)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BlogPost)
);
