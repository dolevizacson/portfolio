import React from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader } from 'reactstrap';

import './index.css';

import MethodologyList from './components/MethodologyList';
import StackList from './components/StackList';

import { loadSkillsListContent } from './services/actions';

class Skills extends React.Component {
  state = {
    skillsList: this.props.skills.skillsContent.skillsList,
    isHidden: true,
  };

  createMethodologyList = () => {
    return this.state.skillsList.map(methodology => {
      return (
        <Col key={methodology.key}>
          <div
            className="methodology ui-container"
            onClick={() => {
              this.setState({
                skillsList: this.state.skillsList.filter(
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
              {this.state.isHidden && (
                <CardBody>
                  {methodology.stack.map(lang => {
                    return <div key={lang.key}>{lang.language}</div>;
                  })}
                </CardBody>
              )}
              {!this.state.isHidden && (
                <StackList
                  stackList={methodology.stack}
                  backButton={e => {
                    e.stopPropagation();
                    this.setState({
                      skillsList: this.props.skills.skillsContent.skillsList,
                      isHidden: true,
                    });
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
    skills: state.loadSkillsListContentReducer,
  };
};

export default connect(
  mapStateToProps,
  {
    loadSkillsListContent,
  }
)(Skills);
