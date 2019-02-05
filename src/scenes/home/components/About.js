import React from 'react';
import { connect } from 'react-redux';

import './About.css';

const About = props => {
  const { aboutContent } = props.about;
  const { motoContent } = props.moto;

  return (
    <div className="about ui-container ">
      <div className="about-me">
        <div className="content">{aboutContent}</div>
      </div>
      <div className="moto">
        <div className="top-quotes">"</div>
        <div className="content">{motoContent}</div>
        <div className="bottum-quotes">"</div>
      </div>
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
