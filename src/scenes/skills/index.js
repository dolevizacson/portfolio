import React from 'react';
import { Row, Col } from 'reactstrap';

import './index.css';

import MethodologyList from './components/MethodologyList';

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-skillsList">
        <Row>
          <div className="ui-titles-container">
            <Row>
              <Col xs="2">
                <img
                  className="rounded"
                  src="/skillsTitleImage.png"
                  alt="stone-stack"
                />
              </Col>
              <Col>
                <h2>Technology Stack And Stuff</h2>
              </Col>
            </Row>
          </div>
        </Row>
        <Row>
          <div className="Methodology-list">
            <MethodologyList />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Skills;
