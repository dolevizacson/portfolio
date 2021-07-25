import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../env/utils/access';

// components
import AdminView from './AdminView';

// actions
const { logout } = actions.authActions;

class Admin extends Component {
  logout = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    return <AdminView functions={{ logout: this.logout }} />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Admin);
