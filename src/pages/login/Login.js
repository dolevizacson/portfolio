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
const { adminRoute } = constants;

// style
const LoginStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
  width: 100%;
`;

const HeaderIconStyle = styled(LogIn)`
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

class Login extends Component {
  render() {
    const { from } = this.props.location.state || {
      from: { pathname: adminRoute },
    };
    const { isLoggedIn } = this.props;

    return (
      <>
        {isLoggedIn && <Redirect to={from} />}

        {!isLoggedIn && (
          <>
            <LoginStyle>
              <UiHeader text="Login" icon={HeaderIconStyle} />
              <LoginForm />
            </LoginStyle>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn,
});

export default connect(mapStateToProps)(Login);
