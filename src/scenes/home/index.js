import React from 'react';
import { Row, Col } from 'reactstrap';

import './index.css';

import About from './components/About';

const Home = () => {
  return (
    <div className="home">
      <Row>
        <Col>
          <img className="ui-container" src="tempPic.jpg" alt="profile" />
        </Col>
        <Col>
          <About />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
