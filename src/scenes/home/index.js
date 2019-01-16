import React from 'react';

import './index.css';

import About from './components/About';

const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <img src="tempPic.jpg" alt="profile" />
        </div>
        <div className="col">
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
