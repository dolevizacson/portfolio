import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import './About.css';

const About = props => {
  const { aboutContent } = props.about;
  const { motoContent } = props.moto;

  return (
    <div className="about ui-container">
      <Container className="about-me">
        <div className="content">{aboutContent}</div>
      </Container>
      <Container className="moto">
        <div className="top-quotes">"</div>
        <div className="content">{motoContent}</div>
        <div className="bottum-quotes">"</div>
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    about: state.loadAboutContentReducer,
    moto: state.loadMotoContentReducer,
  };
};

export default connect(mapStateToProps)(About);
