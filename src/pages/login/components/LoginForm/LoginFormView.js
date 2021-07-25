import React from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  types,
  actions,
  AppModal,
  UiHeader,
  UiTextBlock,
  UiButton,
  UiFormInputField,
} from '../../../../env/utils/access';

// types
const { auth: authTypes } = types;

// actions
const { resetErrors } = actions.errorsActions;

// style
const LoginFormStyle = styled.section`
  display: grid;
  grid-template-rows: min-content;
  grid-auto-rows: min-content;
  grid-gap: var(--ui-grid-gap-1);
`;

const LoginFormContainerStyle = styled(Form)`
  display: grid;
  grid-template-rows: min-content;
  grid-auto-rows: min-content;
  grid-gap: var(--ui-grid-gap-1);
`;

const LoginFormButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LoginFormModalStyle = styled(AppModal)`
  width: 50%;
  height: 50%;
`;

const LoginFormModalHeaderStyle = styled.h2`
  display: flex;
  align-items: center;
`;

const LoginFormModalBodyStyle = styled.p`
  color: var(--ui-font-color-2);
  font-size: 1.6rem;
`;

const LoginFormView = (props) => {
  const { functions, validation, errors, isLoading, resetErrors } = props;

  return (
    <LoginFormStyle>
      <UiHeader>login</UiHeader>
      <Formik
        enableReinitialize={true}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{ email: '', password: '' }}
        validationSchema={validation}
        onSubmit={(values, formikBag) => {
          formikBag.validateForm();
          const { email, password } = values;
          functions.login(email, password);
        }}
      >
        {({ errors, status, touched, isSubmitting }) => (
          <LoginFormContainerStyle>
            <UiTextBlock>
              <UiFormInputField label="E-mail" name="email" />
              <UiFormInputField
                label="Password"
                name="password"
                type="password"
              />
              <LoginFormButtonsContainer>
                <UiButton type="submit" disabled={isLoading[authTypes.login]}>
                  Submit
                </UiButton>
              </LoginFormButtonsContainer>
            </UiTextBlock>
          </LoginFormContainerStyle>
        )}
      </Formik>
      {errors[authTypes.login] && (
        <LoginFormModalStyle onClose={resetErrors}>
          <UiTextBlock
            header={
              <LoginFormModalHeaderStyle>
                error has accord
              </LoginFormModalHeaderStyle>
            }
          >
            <LoginFormModalBodyStyle>
              {errors[authTypes.login]}
            </LoginFormModalBodyStyle>
            <LoginFormButtonsContainer>
              <UiButton onClick={resetErrors}>close</UiButton>
            </LoginFormButtonsContainer>
          </UiTextBlock>
        </LoginFormModalStyle>
      )}
    </LoginFormStyle>
  );
};

const mapStateToProps = ({ errors, isLoading }) => ({
  errors,
  isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  resetErrors: () => dispatch(resetErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormView);
