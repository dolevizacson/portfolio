import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import {
  constants,
  actions,
  types,
  UiHeader,
  UiTextBlock,
  UiButton,
  UiFormInputField,
  UiButtonsContainer,
  AppModal,
} from '../../../../env/utils/access';

// constants
const { contactInitialState } = constants;

// types
const { contact: contactTypes } = types;

// actions
const { resetErrors } = actions.errorsActions;

// style
const ContactFormStyle = styled.section`
  display: grid;
  grid-gap: var(--ui-grid-gap-1);
`;

const ContactFormContainerStyle = styled(Form)`
  display: grid;
  grid-gap: var(--ui-grid-gap-1);
`;

const ContactFormModalStyle = styled(AppModal)`
  width: 50%;
  height: 50%;
`;

const ContactFormModalHeaderStyle = styled.h2`
  display: flex;
  align-items: center;
`;

const ContactFormModalBodyStyle = styled.p`
  ${(props) => props.theme.mixins.formModalStyle}
`;

const ContactFormView = (props) => {
  const { validation, errors, resetErrors, messageSent, functions } = props;

  const formReset = (resetForm) => {
    if (messageSent) {
      resetForm();
      functions.resetMessageSent();
    }
  };

  const timerResetForm = (resetForm) => {
    setTimeout(() => formReset(resetForm), 3000);
  };

  return (
    <ContactFormStyle>
      <UiHeader>contact</UiHeader>

      <Formik
        enableReinitialize={true}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={contactInitialState}
        validationSchema={validation}
        onSubmit={(values, formikBag) => {
          formikBag.validateForm();
          functions.postMail(values);
          formikBag.setSubmitting(false);
        }}
      >
        {({ isSubmitting, resetForm }) => (
          <ContactFormContainerStyle>
            <UiTextBlock>
              <UiFormInputField label="Name" name="name" />
              <UiFormInputField label="E-mail" name="from" />
              <UiFormInputField label="Subject" name="subject" />
              <UiFormInputField
                label="Message"
                name="text"
                textarea
                rows="10"
              />
              <UiButtonsContainer>
                <UiButton type="reset">clear</UiButton>
                <UiButton type="submit" disabled={isSubmitting}>
                  send
                </UiButton>
              </UiButtonsContainer>
            </UiTextBlock>
            {errors[contactTypes.create] && (
              <ContactFormModalStyle onClose={resetErrors}>
                <UiTextBlock
                  header={
                    <ContactFormModalHeaderStyle>
                      failed to send message
                    </ContactFormModalHeaderStyle>
                  }
                >
                  <ContactFormModalBodyStyle>
                    {errors[contactTypes.create]}
                  </ContactFormModalBodyStyle>
                  <UiButtonsContainer>
                    <UiButton onClick={resetErrors}>close</UiButton>
                  </UiButtonsContainer>
                </UiTextBlock>
              </ContactFormModalStyle>
            )}
            {messageSent && (
              <ContactFormModalStyle onClose={() => formReset(resetForm)}>
                {timerResetForm(resetForm)}
                <UiTextBlock
                  header={
                    <ContactFormModalHeaderStyle>
                      message Sent
                    </ContactFormModalHeaderStyle>
                  }
                >
                  <UiButtonsContainer>
                    <UiButton onClick={() => formReset(resetForm)}>
                      close
                    </UiButton>
                  </UiButtonsContainer>
                </UiTextBlock>
              </ContactFormModalStyle>
            )}
          </ContactFormContainerStyle>
        )}
      </Formik>
    </ContactFormStyle>
  );
};

const mapStateToProps = ({ errors, messageSent }) => ({
  errors,
  messageSent,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  resetErrors: () => dispatch(resetErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormView);
