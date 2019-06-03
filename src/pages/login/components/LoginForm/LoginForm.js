import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { actions } from '../../../../env/utils/access';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// actions
const login = actions.authActions.login;

// style
const LoginFormStyle = styled.div`
  ${({ theme }) => theme.div}
`;

const LoginFormContainerStyle = styled.div`
  ${({ theme }) => theme.div}

  width: 100%;
  justify-content:center;
  align-content:center;

  ${({ theme }) => theme.ui.corners}
  ${({ theme }) => theme.ui.shadow}

  ${({ theme }) => theme.BackgroundColor.black1}
`;
const FormStyle = styled(Form)`
  ${({ theme }) => theme.div}

  width: 50%;
  flex-direction: column;
  align-content: space-around;
`;
const LoginEmailFieldStyle = styled(Field)`
  ${({ theme }) => theme.ui.formTextField}
`;
const LoginPasswordFieldStyle = styled(Field)`
  ${({ theme }) => theme.ui.formTextField}
`;
const LoginFormButtonStyle = styled.button`
  ${({ theme }) => theme.ui.formButton}
`;

const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    //.email('Invalid email')
    .required('Must provide an email'),
  password: Yup.string()
    .max(12, 'Password contains too many letters')
    .required('Must insert a password'),
});

class LoginForm extends Component {
  login = (username, password) => {
    this.props.login(username, password);
  };

  render() {
    return (
      <LoginFormStyle>
        <LoginFormContainerStyle>
          <Formik
            initialValues={{ email: 'email', password: 'password' }}
            validationSchema={loginFormValidationSchema}
            onSubmit={(values, actions) => {
              const { email, password } = values;
              this.login(email, password);
              actions.setSubmitting(false);
            }}
            render={({ errors, status, touched, isSubmitting }) => (
              <FormStyle>
                <LoginEmailFieldStyle type="text" name="email" />
                <ErrorMessage name="email" component="div" />
                <LoginPasswordFieldStyle type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <LoginFormButtonStyle type="submit" disabled={isSubmitting}>
                  Submit
                </LoginFormButtonStyle>
              </FormStyle>
            )}
          />
        </LoginFormContainerStyle>
      </LoginFormStyle>
    );
  }
}

export default connect(
  null,
  { login }
)(LoginForm);
