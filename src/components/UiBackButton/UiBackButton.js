import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

// icons
import { Times } from 'styled-icons/fa-solid';

// style
const BackButtonStyle = styled.figure.attrs({ tabIndex: '0' })`
  ${(props) => props.theme.mixins.centerContent}
  margin-left:0.7rem;
  align-self: flex-start;
  &:hover,
  &:focus-visible {
    color: var(--ui-main-color-1);
    outline: none;
  }
`;

const BackButtonDefaultIconStyle = styled(Times)`
  width: 2.1rem;
  height: 100%;
  cursor: pointer;
`;

const UiBackButton = (props) => {
  const { history, component, backTo } = props;
  const goBack = () => {
    if (backTo) {
      history.push(backTo);
    } else {
      history.goBack();
    }
  };
  return (
    <BackButtonStyle
      onClick={() => goBack()}
      onKeyDown={(event) => event.key === 'Enter' && goBack()}
    >
      {component || <BackButtonDefaultIconStyle />}
    </BackButtonStyle>
  );
};

export default withRouter(UiBackButton);
