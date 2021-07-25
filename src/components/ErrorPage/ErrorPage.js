import React from 'react';
import styled from 'styled-components';
import { UiTextBlock } from '../../env/utils/access';

// style
const ErrorPageStyle = styled.section`
  display: grid;
  align-items: center;
  min-height: 100%;
`;

const ErrorPageContainerStyle = styled(UiTextBlock)`
  grid-auto-rows: min-content;
`;
const ErrorPageHeaderStyle = styled.h2`
  text-align: center;
  font-size: 15rem;
`;
const ErrorPageBodyStyle = styled.h3`
  text-align: center;
  color: var(--ui-font-color-1);
  font-size: 2rem;
`;

const ErrorPage = (props) => {
  const { message, component } = props;
  return (
    <ErrorPageStyle>
      {component || (
        <>
          <ErrorPageContainerStyle
            header={<ErrorPageHeaderStyle>404</ErrorPageHeaderStyle>}
          >
            <ErrorPageBodyStyle>
              {message ||
                "oh oh something went wrong you probably didn't meant to go here"}
            </ErrorPageBodyStyle>
          </ErrorPageContainerStyle>
        </>
      )}
    </ErrorPageStyle>
  );
};

export default ErrorPage;
