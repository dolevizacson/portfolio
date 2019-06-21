import React, { Component } from 'react';
import { connect } from 'react-redux';
import { constants } from '../../env/utils/access';

// component
import LoginView from './LoginView';

// constants
const { adminRoute } = constants;

class Login extends Component {
  render() {
    const { from } = this.props.location.state || {
      from: { pathname: adminRoute },
    };
    const { isLoggedIn } = this.props;

    return <LoginView state={{ isLoggedIn, from }} />;
  }
}

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn,
});

export default connect(mapStateToProps)(Login);
