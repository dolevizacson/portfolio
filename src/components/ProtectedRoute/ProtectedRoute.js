import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { constants } from '../../env/utils/access';

const { loginRoute } = constants;

const ProtectedRoute = ({ isLoggedIn, component: Component, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={props => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: loginRoute, state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn,
});

export default connect(mapStateToProps)(ProtectedRoute);
