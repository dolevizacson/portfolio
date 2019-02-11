import React from 'react';
import { connect } from 'react-redux';

import './About.css';

const About = props => {
  const { about, moto } = props.home.homeContent;

  return (
    <div className="about ui-container ">
      <div className="about-me">
        <div className="content">{about}</div>
      </div>
      <div className="moto">
        <div className="top-quotes">"</div>
        <div className="content">{moto}</div>
        <div className="bottum-quotes">"</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    home: state.loadHomeContentReducer,
  };
};

export default connect(mapStateToProps)(About);
