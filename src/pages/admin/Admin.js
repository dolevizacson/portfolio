import React, { Component } from 'react';
import styled from 'styled-components';
import { FileCode } from 'styled-icons/fa-regular';
import { Link, Route } from 'react-router-dom';
import { constants, UiHeader } from '../../env/utils/access';

// components
import BlogPostForm from './components/BlogPostForm/BlogPostForm';

// constants
const { adminRoute, blogRoute } = constants;

// style
const AdminStyle = styled.div`
  ${({ theme }) => theme.div}

  flex-direction: column;
  width: 100%;
`;
const HeaderIconStyle = styled(FileCode)`
  ${({ theme }) => theme.color.black1}
  ${({ theme }) => theme.ui.headerIconSize}
`;

class Admin extends Component {
  render() {
    return (
      <AdminStyle>
        <UiHeader text="admin" icon={HeaderIconStyle} />
        <Route
          path={adminRoute}
          exact
          render={() => (
            <>
              <Link to={`${adminRoute}${blogRoute}`}>Blog</Link>
            </>
          )}
        />
        <Route
          path={`${adminRoute}${blogRoute}`}
          exact
          render={props => <BlogPostForm {...props} />}
        />
      </AdminStyle>
    );
  }
}

export default Admin;
