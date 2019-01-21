import React from 'react';
import { connect } from 'react-redux';

import './About.css';

const About = props => {
  const { aboutContent } = props.about;
  const { motoContent } = props.moto;

  return (
    <div className="about">
      <div className="content">{aboutContent}</div>
      <br />
      <div className="content">{motoContent}</div>
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
