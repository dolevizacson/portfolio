import React from 'react';
import styled from 'styled-components';
import { UiButton, UiTextMessage } from '../../env/utils/access';

// style
const UiRequestErrorStyle = styled(UiTextMessage)``;

const UiRequestErrorBodyStyle = styled.div`
  display: grid;
  grid-gap: var(--ui-grid-gap-2);
  grid-template-rows: repeat(2, 1fr);

  justify-items: center;

  font-size: 1.8rem;
  font-weight: 500;
`;

const UiRequestError = (props) => {
  const { errorMessage, request, buttonText } = props;

  return (
    <UiRequestErrorStyle>
      <UiRequestErrorBodyStyle>
        {errorMessage || 'Something went wrong'}
        {request && (
          <UiButton onClick={request}>{buttonText || 'try to fix it'}</UiButton>
        )}
      </UiRequestErrorBodyStyle>
    </UiRequestErrorStyle>
  );
};

export default UiRequestError;
