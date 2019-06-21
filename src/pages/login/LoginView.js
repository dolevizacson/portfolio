import React from 'react';
import { Redirect } from 'react-router-dom';
import { UiHeader } from '../../env/utils/access';

// components
import LoginForm from './components/LoginForm/LoginForm';

// style
import { LoginStyle, HeaderIconStyle } from './LoginStyle';

const LoginView = ({ state: { isLoggedIn, from } }) => {
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
};

export default LoginView;
