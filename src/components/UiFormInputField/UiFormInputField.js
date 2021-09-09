import React from 'react';
import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import { v4 as uuidv4 } from 'uuid';

// icons
import { Dash } from '@styled-icons/octicons';

const UiFormFieldStyle = styled.div`
  display: grid;
  grid-gap: 1rem;
`;
const UiFormFieldLabelStyle = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const UiFormFieldLabelHeaderStyle = styled.h3`
  color: var(--ui-font-color-1);
  text-transform: uppercase;
`;

const UiFormFieldInputStyle = styled(Field).attrs(
  (props) =>
    props.component === 'textarea' && {
      rows: props.rows || 7,
    }
)`
  min-width: 100%;

  padding: 0.8rem 1.3rem;

  border-radius: var(--ui-corners-3);
  border: none;

  overflow: hidden;

  ${(props) =>
    props.component === 'textarea' &&
    `
    resize: none;
    overflow-y: auto;
  `}

  &:focus-visible {
    outline: none;
  }

  &::selection {
    background-color: var(--ui-main-color-4);
  }
`;
const UiFormFieldErrorStyle = styled(ErrorMessage)``;

const UiFormFieldDashIconStyle = styled(Dash)`
  height: 2rem;
  width: 2rem;

  margin: 0 0.5rem;
`;

const UiFormFieldErrorContainerStyle = styled.h3`
  color: var(--ui-font-color-error-1);
  &::before,
  &::after {
    font-size: 2rem;
  }

  &::before {
    content: '[ ';
  }

  &::after {
    content: ' ]';
  }
`;

const UiFormInputField = ({
  label,
  name,
  className,
  placeHolder,
  textarea,
  rows,
  type,
  ...props
}) => {
  const id = uuidv4();
  return (
    <UiFormFieldStyle className={className}>
      <UiFormFieldLabelStyle htmlFor={id}>
        <UiFormFieldLabelHeaderStyle>
          {label ?? name}
          {(label ?? name) && <UiFormFieldDashIconStyle />}
        </UiFormFieldLabelHeaderStyle>
        <UiFormFieldErrorStyle
          name={name}
          render={(errorMsg) => {
            return (
              <UiFormFieldErrorContainerStyle>
                {errorMsg}
              </UiFormFieldErrorContainerStyle>
            );
          }}
        />
      </UiFormFieldLabelStyle>
      <UiFormFieldInputStyle
        type={type}
        name={name}
        id={id}
        placeholder={placeHolder}
        component={textarea && 'textarea'}
        rows={rows}
        {...props}
      />
    </UiFormFieldStyle>
  );
};

export default UiFormInputField;
