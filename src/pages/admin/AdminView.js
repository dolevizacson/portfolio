import React from 'react';
import { Link, Route } from 'react-router-dom';
import { constants, UiHeader } from '../../env/utils/access';

// components
import BlogPostForm from './components/BlogPostForm/BlogPostForm';

// style
import { AdminStyle, HeaderIconStyle, LogoutButtonStyle } from './AdminStyle';

// constants
const { adminRoute, blogRoute } = constants;

const AdminView = ({ state: { logout } }) => {
  return (
    <AdminStyle>
      <UiHeader text="admin" icon={HeaderIconStyle} />
      <LogoutButtonStyle onClick={logout}>Logout </LogoutButtonStyle>
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
};

export default AdminView;
