import React, { Component } from 'react';
import styled from 'styled-components';
import { actions, UiHeader, UiLoading } from '../../../../env/utils/access';
import { connect } from 'react-redux';
import { BloggerB } from 'styled-icons/fa-brands/';

// components
import BlogPost from '../BlogPost/BlogPost';

// actions
const getBlogPosts = actions.blogActions.getBlogPosts;

const BlogPostsListStyle = styled.div`
  ${({ theme }) => theme.div}

  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const HeaderIconStyle = styled(BloggerB)`
  ${({ theme }) => theme.color.black1}
  ${({ theme }) => theme.ui.headerIconSize}
`;

class BlogPostsList extends Component {
  componentDidMount = () => {
    this.props.getBlogPosts();
  };

  renderBlogPostsList = list => {
    return list.map((blogPosts, index) => {
      return <BlogPost key={index} blogPostData={blogPosts} />;
    });
  };

  render() {
    const { blogPostsList } = this.props;

    return (
      <BlogPostsListStyle>
        {this.props.isLoading.READ_BLOG_POSTS && <UiLoading size={50} />}
        {!this.props.isLoading.READ_BLOG_POSTS && (
          <>
            <UiHeader text="Personal blog" icon={HeaderIconStyle} />
            {this.renderBlogPostsList(blogPostsList)}
          </>
        )}
      </BlogPostsListStyle>
    );
  }
}

const mapStateToProps = ({ blogPostsList, isLoading }) => ({
  blogPostsList,
  isLoading,
});

export default connect(
  mapStateToProps,
  { getBlogPosts }
)(BlogPostsList);
