import React from 'react';
import styled from 'styled-components';

// style
const MainStyle = styled.main`
  display: grid;
  grid-template-columns:
    minmax(1rem, 1fr) [main-start] minmax(min-content, 90rem)
    [main-end] minmax(1rem, 1fr);
  min-height: calc(100vh - Var(--navbar-height) * 2);
`;

const MainContainerStyle = styled.div`
  grid-column: main-start/main-end;
  margin: var(--ui-top-bottom-margin);
  ${(props) => props.theme.media('tabPort')`
    margin: var(--ui-top-bottom-margin-small);
  `}
`;

const Main = ({ children }) => {
  return (
    <MainStyle>
      <MainContainerStyle>{children}</MainContainerStyle>
    </MainStyle>
  );
};

export default Main;
