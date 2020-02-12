import React from 'react';
import styled from 'styled-components';

// style
import {
  UiHeaderStyle,
  UiHeaderContainerStyle,
  UiHeaderHeaderIconStyle,
  UiHeaderHeaderStyle,
} from './UiHeaderStyle';

const renderIcon = icon => {
  if (icon) {
    const Elem = styled(icon)`
      ${({
        theme: {
          ui: { corners },
        },
      }) => corners}

      ${({
        theme: {
          BackgroundColor: { white2 },
        },
      }) => white2}
    `;
    return (
      <UiHeaderHeaderIconStyle>
        <Elem />
      </UiHeaderHeaderIconStyle>
    );
  }
};

const UiHeader = ({ text, icon }) => {
  return (
    <UiHeaderStyle>
      <UiHeaderContainerStyle>
        {renderIcon(icon)}
        <UiHeaderHeaderStyle>{text}</UiHeaderHeaderStyle>
      </UiHeaderContainerStyle>
    </UiHeaderStyle>
  );
};

export default UiHeader;
