import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';

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
const EmailFieldStyle = styled(Field)`
  ${({ theme }) => theme.ui.formTextField}
`;
const PasswordFieldStyle = styled(Field)`
  ${({ theme }) => theme.ui.formTextField}
`;
const LoginFormButtonStyle = styled.button`
  ${({ theme }) => theme.ui.formButton}
`;

const LoginForm = ({ login }) => {
  return (
    <LoginFormStyle>
      <LoginFormContainerStyle>
        <Formik
          initialValues={{ username: 'email', password: 'password' }}
          onSubmit={(values, actions) => {
            const { username, password } = values;
            login(username, password);
            actions.setSubmitting(false);
          }}
          render={({ errors, status, touched, isSubmitting }) => (
            <FormStyle>
              <EmailFieldStyle type="text" name="username" />
              <ErrorMessage name="username" component="div" />
              <PasswordFieldStyle type="password" name="password" />
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
};

export default LoginForm;
