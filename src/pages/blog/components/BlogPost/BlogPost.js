import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { constants, actions } from '../../../../env/utils/access';

// actions
const deleteBlogPost = actions.blogActions.deleteBlogPost;

// constants
const { adminRoute, blogRoute } = constants;

// style
const BlogPostStyle = styled.div`
  ${({ theme }) => theme.div}
`;
const BlogPostContainerStyle = styled.div`
  ${({ theme }) => theme.ui.item}

  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
`;
const BlogPostHeaderStyle = styled.h5`
  font-weight: bold;

  ${({ theme }) => theme.color.white2}
  ${({ theme }) => theme.font.font1}
`;
const BlogPostDateStyle = styled.div`
  ${({ theme }) => theme.div};

  ${({ theme }) => theme.color.white2}
  ${({ theme }) => theme.font.font1}
`;
const SeperatorStyle = styled.hr`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.mainAppThemeColors.red1};
  border: none;
`;
const BlogPostBodyStyle = styled.div`
  ${({ theme }) => theme.div};

  flex-direction: column;
`;
const BlogPostparagraphStyle = styled.div`
  ${({ theme }) => theme.div};

  align-items: center;
  flex-direction: column;
`;
const BlogPostparagraphHeaderStyle = styled.div`
  ${({ theme }) => theme.div};

  font-size: 1.125rem;
  font-weight: bold;

  ${({ theme }) => theme.color.white2};
  ${({ theme }) => theme.font.font1};
`;
const BlogPostparagraphBodyStyle = styled.div`
  ${({ theme }) => theme.div};

  ${({ theme }) => theme.color.white2};
  ${({ theme }) => theme.font.font1};
`;
const BlogPostFooterStyle = styled.div`
  ${({ theme }) => theme.div};

  justify-content: center;
  font-size: 1.125rem;
  font-weight: bold;

  ${({ theme }) => theme.color.white2};
  ${({ theme }) => theme.font.font1};
`;
const BlogPostDeleteButtonStyle = styled.button`
  ${({ theme }) => theme.ui.formButton}
`;
const BlogPostUpdateButtonStyle = styled.button`
  ${({ theme }) => theme.ui.formButton}
`;

class BlogPost extends Component {
  state = { updatePost: false };

  deleteBlogPost = id => {
    this.props.deleteBlogPost(id);
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

    if (this.state.updatePost)
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

export default withRouter(
  connect(
    mapStateToProps,
    { deleteBlogPost }
  )(BlogPost)
);
