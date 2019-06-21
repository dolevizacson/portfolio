import React from 'react';
import { Formik, ErrorMessage } from 'formik';

// style
import {
  LoginFormStyle,
  LoginFormContainerStyle,
  FormStyle,
  LoginEmailFieldStyle,
  LoginPasswordFieldStyle,
  LoginFormButtonStyle,
} from './LoginFormStyle';

const LoginFormView = ({ state: { login, loginFormValidationSchema } }) => {
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
};

export default LoginFormView;
