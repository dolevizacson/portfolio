import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

import './index.css';

import About from './components/About';

const Home = () => {
  return (
    <div className="home">
      <Jumbotron>
        <Row>
          <Col>
            <img className="border-style" src="tempPic.jpg" alt="profile" />
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
