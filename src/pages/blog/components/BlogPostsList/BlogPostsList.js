import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { BloggerB } from 'styled-icons/fa-brands/';
import { actions, UiHeader, UiLoading } from '../../../../env/utils/access';

// components
import BlogPost from '../BlogPost/BlogPost';

// actions
const { getBlogPosts } = actions.blogActions;

// style
const BlogPostsListStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const HeaderIconStyle = styled(BloggerB)`
  ${({
    theme: {
      color: { black1 },
    },
  }) => black1}
  ${({
    theme: {
      ui: { headerIconSize },
    },
  }) => headerIconSize}
`;

class BlogPostsList extends Component {
  componentDidMount = () => {
    const { getBlogPosts } = this.props;
    getBlogPosts();
  };

  renderBlogPostsList = list => {
    return list.map((blogPosts, index) => {
      return <BlogPost key={index} blogPostData={blogPosts} />;
    });
  };

  render() {
    const { blogPostsList, isLoading } = this.props;

    return (
      <BlogPostsListStyle>
        {isLoading.READ_BLOG_POSTS && <UiLoading size={50} />}
        {!isLoading.READ_BLOG_POSTS && (
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

const mapDispatchToProps = dispatch => ({
  getBlogPosts: () => dispatch(getBlogPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPostsList);
