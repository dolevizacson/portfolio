import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import './Methodology.css';

import SkillsList from './SkillsList';

const MethodologyList = props => {
  const { skillsListContent } = props.skillsList;

  const createMethodologyList = skillsListContent.map(methodology => {
    return (
      <Col key={methodology.key}>
        <div className="methodology ui-container">
          <Card>
            <CardHeader>
              <Row>
                <Col xs="3">
                  <div className="image-container rounded">
                    <img src={methodology.image} />
                  </div>
                </Col>
                <Col>{methodology.topic}</Col>
              </Row>
            </CardHeader>

            <CardBody>
              {methodology.stack.map(lang => {
                return <div key={lang.key}>{lang.language}</div>;
              })}
            </CardBody>
          </Card>
        </div>
      </Col>
    );
  });

  return (
    <div>
      <Row>{createMethodologyList}</Row>
    </div>
  );
};

const mapStateToProps = state => {
  return { skillsList: state.loadSkillsListContent };
};

export default connect(mapStateToProps)(MethodologyList);
