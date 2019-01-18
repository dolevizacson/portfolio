import React from 'react';

import './About.css';

import content from '../services/content';

const About = () => {
  return (
    <div className="about">
      <div className="content">{content.about}</div>
      <br />
      <div className="content">{content.moto}</div>
    </div>
  );
};

export default About;
