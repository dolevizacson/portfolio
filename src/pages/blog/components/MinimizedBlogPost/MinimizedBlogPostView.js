import React from 'react';
import { Link } from 'react-router-dom';
import { constants } from '../../../../env/utils/access';

// style
import {
  MinimizedBlogPostStyle,
  MinimizedBlogPostContainerStyle,
  MinimizedBlogPostHeaderStyle,
  MinimizedBlogPostDateStyle,
  MinimizedBlogPostSeperatorStyle,
  MinimizedBlogPostSummeryStyle,
  MinimizedBlogPostToggleStateStyle,
} from './MinimizedBlogPostStyle';

// constants
const { blogRoute } = constants;

const formatDate = date => {
  const rawDate = new Date(date);
  return `${rawDate.getDate()}/${rawDate.getMonth() +
    1}/${rawDate.getFullYear()}`;
};

const MinimizedBlogPostView = ({ state: { blogPostData, isLoggedIn } }) => {
  return (
    <MinimizedBlogPostStyle>
      <MinimizedBlogPostContainerStyle>
        <MinimizedBlogPostHeaderStyle>
          {blogPostData.header}
        </MinimizedBlogPostHeaderStyle>
        <MinimizedBlogPostDateStyle>
          posted : {formatDate(blogPostData.date)}
        </MinimizedBlogPostDateStyle>
        <MinimizedBlogPostSeperatorStyle />
        <MinimizedBlogPostSummeryStyle>
          {blogPostData.summery}
        </MinimizedBlogPostSummeryStyle>
        <MinimizedBlogPostSeperatorStyle />
        <Link to={`${blogRoute}/${blogPostData._id}`}>Show more</Link>
        {isLoggedIn && (
          <MinimizedBlogPostToggleStateStyle>
            blog post toggled {`${blogPostData.active ? 'on' : 'off'}`}
          </MinimizedBlogPostToggleStateStyle>
        )}
      </MinimizedBlogPostContainerStyle>
    </MinimizedBlogPostStyle>
  );
};

export default MinimizedBlogPostView;
