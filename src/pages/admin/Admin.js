import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FileCode } from 'styled-icons/fa-regular';
import { Link, Route } from 'react-router-dom';
import { constants, UiHeader, actions } from '../../env/utils/access';

// components
import BlogPostForm from './components/BlogPostForm/BlogPostForm';

// constants
const { adminRoute, blogRoute } = constants;

// actions
const { logout } = actions.authActions;

// style
const AdminStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
  width: 100%;
`;
const HeaderIconStyle = styled(FileCode)`
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
const LogoutButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
`;

class Admin extends Component {
  logout = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    return (
      <AdminStyle>
        <UiHeader text="admin" icon={HeaderIconStyle} />
        <LogoutButtonStyle onClick={this.logout}>Logout </LogoutButtonStyle>
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

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  null,
  mapDispatchToProps
)(Admin);
