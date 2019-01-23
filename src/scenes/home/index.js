import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

import './index.css';

import About from './components/About';

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <Row>
          <Col>
            <img src="tempPic.jpg" alt="profile" />
          </Col>
          <Col>
            <About />
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Home;
