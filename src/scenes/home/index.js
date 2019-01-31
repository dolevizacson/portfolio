import React from 'react';
import { Row, Col } from 'reactstrap';

import './index.css';

import About from './components/About';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <Row>
          <Col>
            <img className="ui-container" src="tempPic.jpg" alt="profile" />
          </Col>
          <Col>
            <About />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
