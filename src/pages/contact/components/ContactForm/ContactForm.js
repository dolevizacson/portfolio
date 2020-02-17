import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { actions } from '../../../../env/utils/access';

// components
import ContactFormView from './ContactFormView';

// actions
const { postMail } = actions.contactActions;

const ContactFormValidationSchema = Yup.object().shape({
  from: Yup.string()
    .email('Must provide a valid mail address')
    .required('Must provide from address'),
  subject: Yup.string().required('Must provide message subject'),
  text: Yup.string().required('Must provide message body'),
});

class ContactForm extends Component {
  postMail = mail => {
    const { postMail } = this.props;
    postMail(mail);
  };

  render() {
    return (
      <ContactFormView
        state={{ postMail: this.postMail, ContactFormValidationSchema }}
      />
    );
  }
}

const mapStateToProps = ({ isLoading }) => ({
  isLoading,
});

const mapDispatchToProps = dispatch => ({
  postMail: mail => dispatch(postMail(mail)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
