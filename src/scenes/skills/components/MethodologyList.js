import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import './Methodology.css';

import StackList from './StackList';

const MethodologyList = props => {
  return (
    <div>
      <Row>{props.content}</Row>
    </div>
  );
};

export default MethodologyList;
