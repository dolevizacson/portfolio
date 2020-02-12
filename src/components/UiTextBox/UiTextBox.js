import React from 'react';

// style
import { UiTextBoxStyle, UiTextBoxMessageStyle } from './UiTextBoxStyle';

const UiTextBox = ({ message, component }) => {
  return (
    <UiTextBoxStyle>
      {message && <UiTextBoxMessageStyle>{message}</UiTextBoxMessageStyle>}
      {component}
    </UiTextBoxStyle>
  );
};

export default UiTextBox;
