import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import './Methodology.css';

import StackList from './StackList';

class MethodologyList extends React.Component {
  state = { isHidden: true };

  toggleStackList = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  createMethodologyList = () => {
    const { skillsListContent } = this.props.skillsList;
    return skillsListContent.map(methodology => {
      return (
        <Col key={methodology.key}>
          <div className="methodology ui-container">
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
                <StackList stackList={methodology.stack} />
              )}
            </Card>
          </div>
        </Col>
      );
    });
  };

  render() {
    return (
      <div>
        <Row>{this.createMethodologyList()}</Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { skillsList: state.loadSkillsListContent };
};

export default connect(mapStateToProps)(MethodologyList);
