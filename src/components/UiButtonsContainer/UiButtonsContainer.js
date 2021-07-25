import React from 'react';
import styled from 'styled-components';

// style
const UiButtonsContainerStyle = styled.div`
  ${(props) => props.theme.mixins.centerContent}
  flex-wrap: wrap;

  ${(props) =>
    props.theme.media(
      'buttonsCentering'
    )`justify-content: flex-end; align-items: flex-end;`}
`;

const UiButtonsContainer = (props) => {
  const { children } = props;
  return (
    <UiButtonsContainerStyle {...props}>{children}</UiButtonsContainerStyle>
  );
};

export default UiButtonsContainer;
