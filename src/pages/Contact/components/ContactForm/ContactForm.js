import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { actions } from '../../../../env/utils/access';

// components
import ContactFormView from './ContactFormView';

// actions
const { postMail, resetMessageSent } = actions.contactActions;

// validation
const ContactFormValidationSchema = Yup.object().shape({
  name: Yup.string().required('Please add your name'),
  from: Yup.string()
    .email('Please provide a valid mail address')
    .required('Please provide a mail address'),
  subject: Yup.string().required('Please provide message subject'),
  text: Yup.string().required('Please provide message body'),
});

class ContactForm extends Component {
  postMail = (mail) => {
    const { postMail } = this.props;
    const { name, subject, ...newMail } = mail;
    newMail.subject = `send by ${name} - ${subject}`;
    postMail(newMail);
  };

  resetMessageSent = () => {
    const { resetMessageSent } = this.props;
    resetMessageSent();
  };

  render() {
    return (
      <ContactFormView
        functions={{
          postMail: this.postMail,
          resetMessageSent: this.resetMessageSent,
        }}
        validation={ContactFormValidationSchema}
      />
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  postMail: (mail) => dispatch(postMail(mail)),
  resetMessageSent: () => dispatch(resetMessageSent()),
});

export default connect(null, mapDispatchToProps)(ContactForm);
