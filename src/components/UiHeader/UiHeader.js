import React from 'react';
import styled from 'styled-components';

// style
const UiHeaderStyle = styled.h1`
  padding: 1.8rem 2.5rem;
  border-radius: var(--ui-corners-1);

  background-color: var(--ui-specific-color-2);
  border: 1px solid var(--ui-specific-color-3);
`;

const UiHeader = (props) => {
  const { children } = props;
  return <UiHeaderStyle {...props}>{children}</UiHeaderStyle>;
};

export default UiHeader;
