import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { actions } from '../../../../env/utils/access';

// actions
const { login } = actions.authActions;

// style
const LoginFormStyle = styled.div`
  ${({ theme: { div } }) => div}
`;

const LoginFormContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 100%;
  justify-content:center;
  align-content:center;

  ${({
    theme: {
      ui: { corners },
    },
  }) => corners}
  ${({
    theme: {
      ui: { shadow },
    },
  }) => shadow}

  ${({
    theme: {
      BackgroundColor: { black1 },
    },
  }) => black1}
`;
const FormStyle = styled(Form)`
  ${({ theme: { div } }) => div}

  width: 50%;
  flex-direction: column;
  align-content: space-around;
`;
const LoginEmailFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;
const LoginPasswordFieldStyle = styled(Field)`
  ${({
    theme: {
      ui: { formTextField },
    },
  }) => formTextField}
`;
const LoginFormButtonStyle = styled.button`
  ${({
    theme: {
      ui: { formButton },
    },
  }) => formButton}
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
    const { login } = this.props;
    login(username, password);
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

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password)),
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
