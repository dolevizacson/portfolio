import React from 'react';
import styled from 'styled-components';
import { UiTextBlock } from '../../env/utils/access';

const UiTextMessageStyle = styled.article``;

const UiTextMessageHeaderStyle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UiTextMessageContentStyle = styled.section`
  display: flex;
  justify-content: center;

  padding: 3rem 0;
`;

const UiTextMessage = ({ children, header, ...props }) => {
  return (
    <UiTextMessageStyle {...props}>
      <UiTextBlock
        header={
          header && (
            <UiTextMessageHeaderStyle>{header}</UiTextMessageHeaderStyle>
          )
        }
      >
        <UiTextMessageContentStyle>{children}</UiTextMessageContentStyle>
      </UiTextBlock>
    </UiTextMessageStyle>
  );
};

export default UiTextMessage;
