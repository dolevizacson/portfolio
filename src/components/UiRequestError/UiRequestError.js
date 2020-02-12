import React from 'react';

// style
import {
  UiRequestErrorStyle,
  UiRequestErrorMessageStyle,
} from './UiRequestErrorStyle';

const UiRequestError = ({ message, component }) => {
  return (
    <UiRequestErrorStyle>
      {message && (
        <UiRequestErrorMessageStyle>{message}</UiRequestErrorMessageStyle>
      )}
      {component}
    </UiRequestErrorStyle>
  );
};

export default UiRequestError;
