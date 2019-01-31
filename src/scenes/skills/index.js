import React from 'react';
import { Row, Col } from 'reactstrap';

import './index.css';

import MethodologyList from './components/MethodologyList';

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-content">
        <Row>
          <div className="ui-titles-container">
            <Row>
              <Col xs="3">
                <img
                  className="rounded"
                  src="/skillsTitleImage.png"
                  alt="stone-stack"
                />
              </Col>
              <Col> Technology Stack And Stuff</Col>
            </Row>
          </div>
        </Row>
        <Row>
          <div className="skills-list">
            <MethodologyList />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Skills;
