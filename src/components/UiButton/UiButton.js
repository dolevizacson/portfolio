import React from 'react';
import styled from 'styled-components';

// style
const UiButtonStyle = styled.button`
  font-family: var(--ui-header-font-1);
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  line-height: normal;
  letter-spacing: 0.1rem;
  color: var(--ui-general-color-1);

  min-width: 16rem;

  cursor: pointer;

  padding: 0.8rem 1.6rem;
  margin: 0.4rem 0.4rem;

  background-color: var(--ui-general-color-2);
  border-radius: var(--ui-corners-2);
  outline: none;
  border: none;

  &:hover {
    background-color: var(--ui-main-color-1);
    color: var(--ui-general-color-2);
    transition: background-color 0.15s ease-out;
    border: none;
  }

  &:active,
  &:focus-visible {
    background-color: var(--ui-main-color-1);
    color: var(--ui-general-color-2);
    border: none;
  }
`;

const UiButton = (props) => {
  const { children } = props;
  return <UiButtonStyle {...props}>{children}</UiButtonStyle>;
};

export default UiButton;
