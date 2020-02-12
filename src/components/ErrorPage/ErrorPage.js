import React from 'react';

// style
import {
  ErrorPageStyle,
  ErrorPageHeaderStyle,
  ErrorPageMessageStyle,
} from './ErrorPageStyle';

const ErrorPage = ({ message, component }) => {
  return (
    <ErrorPageStyle>
      <ErrorPageHeaderStyle>404</ErrorPageHeaderStyle>
      {message && <ErrorPageMessageStyle>{message}</ErrorPageMessageStyle>}
      {component}
    </ErrorPageStyle>
  );
};

export default ErrorPage;
