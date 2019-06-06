import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { constants, UiHeader } from '../../env/utils/access';

// icons
import { LogIn } from 'styled-icons/boxicons-regular';

// component
import LoginForm from './components/LoginForm/LoginForm';

// constants
const { homeRoute } = constants;

// style
const LoginStyle = styled.div`
  ${({ theme }) => theme.div}

  flex-direction: column;
  width: 100%;
`;

const HeaderIconStyle = styled(LogIn)`
  ${({ theme }) => theme.color.black1}
  ${({ theme }) => theme.ui.headerIconSize}
`;

class Login extends Component {
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
          <LoginForm />
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

export default connect(mapStateToProps)(Login);
