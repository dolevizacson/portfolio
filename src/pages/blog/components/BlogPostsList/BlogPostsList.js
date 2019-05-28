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
  ${({ theme }) => theme.ui.headerIconSize}
`;

class BlogPostsList extends Component {
  state = { isLoading: true };

  componentDidMount = async () => {
    await this.props.getBlogPosts();
    this.setState(state => {
      return { isLoading: false };
    });
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
        {this.state.isLoading && <UiLoading size={50} />}
        {!this.state.isLoading && (
          <>
            <UiHeader text="Personal blog" icon={HeaderIconStyle} />
            {this.renderBlogPostsList(blogPostsList)}
          </>
        )}
      </BlogPostsListStyle>
    );
  }
}

const mapStateToProps = ({ blogPostsList }) => {
  return {
    blogPostsList,
  };
};

export default connect(
  mapStateToProps,
  { getBlogPosts }
)(BlogPostsList);
