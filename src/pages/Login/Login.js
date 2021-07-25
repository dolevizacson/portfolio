import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { constants } from '../../env/utils/access';

// component
import LoginForm from './components/LoginForm/LoginForm';

// constants
const { adminRoute } = constants;

// style
const LoginStyle = styled.div`
  display: grid;
`;

const Login = (props) => {
  const { isLoggedIn, location } = props;

  return isLoggedIn ? (
    <Redirect to={location.state.from || `/${adminRoute}`} />
  ) : (
    <LoginStyle>
      <LoginForm />
    </LoginStyle>
  );
};

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn,
});

export default connect(mapStateToProps)(Login);
