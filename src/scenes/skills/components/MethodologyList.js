import React from 'react';
import { Row } from 'reactstrap';

import './Methodology.css';

const MethodologyList = props => {
  return (
    <div>
      <Row>{props.content}</Row>
    </div>
  );
};

export default MethodologyList;
