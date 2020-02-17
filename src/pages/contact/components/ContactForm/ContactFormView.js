import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { constants, UiHeader } from '../../../../env/utils/access';

// style
import {
  ContactFormStyle,
  ContactContainerStyle,
  FormStyle,
  ContactFromFieldStyle,
  ContactSubjectFieldStyle,
  ContactTextFieldStyle,
  ContactResetButtonStyle,
  ContactSubmitButtonStyle,
} from './ContactFormStyle';

// constants
const { contactInitialState } = constants;

const ContactFormView = ({
  state: { postMail, ContactFormValidationSchema },
}) => {
  return (
    <>
      <UiHeader text="Contact" />
      <ContactFormStyle>
        <ContactContainerStyle>
          <Formik
            enableReinitialize={true}
            initialValues={contactInitialState}
            validationSchema={ContactFormValidationSchema}
            onSubmit={(values, actions) => {
              postMail(values);
              actions.setSubmitting(false);
            }}
            render={({
              values,
              errors,
              status,
              touched,
              isSubmitting,
              setFieldValue,
            }) => (
              <FormStyle>
                <ContactFromFieldStyle type="text" name="from" />
                <ErrorMessage name="from" component="div" />
                <ContactSubjectFieldStyle type="text" name="subject" />
                <ErrorMessage name="subject" component="div" />
                <ContactTextFieldStyle type="text" name="text" />
                <ErrorMessage name="text" component="div" />
                <ContactResetButtonStyle type="reset">
                  reset
                </ContactResetButtonStyle>
                <ContactSubmitButtonStyle type="submit" disabled={isSubmitting}>
                  send
                </ContactSubmitButtonStyle>
              </FormStyle>
            )}
          />
        </ContactContainerStyle>
      </ContactFormStyle>
    </>
  );
};

export default ContactFormView;
