import React, { Component } from 'react';
import styled from 'styled-components';
import { constants, actions, UiHeader } from '../../env/utils/access';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// icons
import { LogIn } from 'styled-icons/boxicons-regular';

// component
import LoginForm from './components/LoginForm/LoginForm';

// actions
const login = actions.authActions.login;

// constants
const { homeRoute } = constants;

// style
const LoginStyle = styled.div`
  ${({ theme }) => theme.div}

  flex-direction: column;
  width: 100%;
`;

const HeaderIconStyle = styled(LogIn)`
  ${({ theme }) => theme.ui.headerIconSize}
`;

class Login extends Component {
  login = (username, password) => {
    this.props.login(username, password);
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: homeRoute },
    };

    if (this.props.isLoggedIn) {
      return <Redirect to={from} />;
    } else {
      return (
        <LoginStyle>
          <UiHeader text="Login" icon={HeaderIconStyle} />
          <LoginForm login={this.login} />
        </LoginStyle>
      );
    }
  }
}

const mapStateToProps = ({ isLoggedIn }) => {
  return {
    isLoggedIn,
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
