import React from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader } from 'reactstrap';

import './index.css';

import MethodologyList from './components/MethodologyList';
import StackList from './components/StackList';

import { loadSkillsListContent } from './services/actions';

class Skills extends React.Component {
  createMethodologyList = () => {
    const { skillsListContent } = this.props.skillsList;
    return skillsListContent.skillsList.map(methodology => {
      return (
        <Col key={methodology.key}>
          <div
            className="methodology ui-container"
            onClick={() => {
              this.props.loadSkillsListContent({
                skillList: skillsListContent.skillsList.filter(
                  item => item.key === methodology.key
                ),
                isHidden: false,
              });
            }}
          >
            <Card>
              <CardHeader>
                <Row>
                  <Col xs="3">
                    <div className="image-container rounded">
                      <img src={methodology.image} alt={methodology.topic} />
                    </div>
                  </Col>
                  <Col>
                    <h4>{methodology.topic}</h4>
                  </Col>
                </Row>
              </CardHeader>
              {skillsListContent.isHidden && (
                <CardBody>
                  {methodology.stack.map(lang => {
                    return <div key={lang.key}>{lang.language}</div>;
                  })}
                </CardBody>
              )}
              {!skillsListContent.isHidden && (
                <StackList
                  stackList={methodology.stack}
                  backButton={() => {
                    this.props.loadSkillsListContent();
                  }}
                />
              )}
            </Card>
          </div>
        </Col>
      );
    });
  };

  render() {
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
              <MethodologyList content={this.createMethodologyList()} />
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    skillsList: state.loadSkillsListContentReducer,
  };
};

export default connect(
  mapStateToProps,
  {
    loadSkillsListContent,
  }
)(Skills);
