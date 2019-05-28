import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

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

const loginFormValidationSchema = yup.object().shape({
  email: yup
    .string()
    //.email('Invalid email')
    .required('Must provide an email'),
  password: yup
    .string()
    .max(12, 'Password contains too many letters')
    .required('Must insert a password'),
});

const LoginForm = ({ login }) => {
  return (
    <LoginFormStyle>
      <LoginFormContainerStyle>
        <Formik
          initialValues={{ email: 'email', password: 'password' }}
          validationSchema={loginFormValidationSchema}
          onSubmit={(values, actions) => {
            const { email, password } = values;
            login(email, password);
            actions.setSubmitting(false);
          }}
          render={({ errors, status, touched, isSubmitting }) => (
            <FormStyle>
              <EmailFieldStyle type="text" name="email" />
              <ErrorMessage name="email" component="div" />
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
