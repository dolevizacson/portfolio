import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { actions } from '../../../../env/utils/access';

// components
import LoginFormView from './LoginFormView';

// actions
const { login } = actions.authActions;

const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Must provide an email'),
  password: Yup.string()
    .max(12, 'Password contains too many letters')
    .required('Must insert a password'),
});

class LoginForm extends Component {
  login = (username, password) => {
    const { login } = this.props;
    login(username, password);
  };

  render() {
    return (
      <LoginFormView state={{ login: this.login, loginFormValidationSchema }} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password)),
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
