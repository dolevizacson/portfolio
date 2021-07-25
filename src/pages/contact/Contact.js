import React from 'react';
import styled from 'styled-components';

// components
import ContactForm from './components/ContactForm/ContactForm';

// style
const ContactStyle = styled.div`
  display: grid;
  align-items: center;
`;

const Contact = () => {
  return (
    <ContactStyle>
      <ContactForm />
    </ContactStyle>
  );
};

export default Contact;
